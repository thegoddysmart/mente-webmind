from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.postgres.search import TrigramSimilarity
from django.core.mail import send_mail
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator
from django.db.models import Count
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.views.decorators.http import require_POST
from .myscraper import get_title, get_about, get_body_text
from .summary import abstractive_summary, extractive_summary
from django.contrib.postgres.search import SearchVector, SearchQuery, SearchRank, TrigramSimilarity



from .models import Bookmark
# Create your views here.

@login_required(login_url = 'mente:login')
def home(request):
    bookmark_list = Bookmark.objects.all().filter().order_by('-created')
    paginator = Paginator(bookmark_list, 5)
    page_number = request.GET.get('page', 1)
    try:
        bookmarks = paginator.page(page_number)
    except PageNotAnInteger:
        # If page_number is not an integer get the first page
        bookmarks = paginator.page(1)
    except EmptyPage:
        # If page_number is out of range get last page of results
        bookmarks = paginator.page(paginator.num_pages)
    return render(
        request,
        'mente/index.html',
        {
            'bookmarks': bookmarks,
        }
    )

def register(request):
    if request.method == "POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        user_data_has_error = False
        if User.objects.filter(username=username).exists():
            user_data_has_error = True
            # messages.error(request, "Username Already Exists")

        if User.objects.filter(email=email).exists():
            user_data_has_error = True
            # messages.error(request, "Email Already Exists")

        if len(password) < 8:
            user_data_has_error = True
            # messages.error(request, "Password must be atleast 8 Characters")


        if user_data_has_error:
            return redirect('mente:register')
        else:
            new_user = User.objects.create_user(
                email=email, 
                username=username,
                password=password,
            )
            # messages.success(request, "Account created successfully, Login Now")
            return redirect('mente:login')
    return render(request, 'mente/register.html')

def bookmark_detail(request, bookmark):
    bookmark = get_object_or_404(
        Bookmark,
        slug=bookmark,
    )
    return render(
        request,
        'mente/bookmark.html',
        {
            'bookmark': bookmark,
        }
    )

@login_required(login_url = 'mente:login/')
def add_bookmark(request):
    # user = get_object_or_404(User, username=username)
    # if request.user == user:
    if request.method == 'POST':
        url = request.POST.get('userurl')
        
        title = get_title(url)
        about = f"This article is about {get_about(url)}"
        text = get_body_text(url)
        # tags = 'hello'
        highlight = extractive_summary(text).split('.')
        notes = text
        owner = request.user
        bookmark = Bookmark(
            title=title,
            url=url,
            about=about,
            notes=notes,
            highlight=highlight,
            owner=owner,
        )
        bookmark.save()
        # print(f"TITLE is {title}\n{about}\nTEXT: {text}\nSUMMARY: {highlight}")
        messages.success(request, "Bookmark Added Successfully.")
        return redirect('mente:home')
    else:
        messages.error(request, "Bookmark not added.")
    return render(request, 'mente/add_bookmark.html')

def search_bookmark(request):
    query = None
    results = []
    if 'query' in request.GET:
        query = request.GET.get('query')
        results = (
                Bookmark.objects.annotate(
                    similarity=TrigramSimilarity('title', query),
                )
                .filter(similarity__gt=0.1)
                .order_by('-similarity')
            )
        # return redirect('mente:home')
    return render(
        request,
        'mente/search.html',
        {
            'query': query,
            'results': results,
        },
    )

def delete(request, bookmark_id):
    bookmark = Bookmark.objects.get(id=bookmark_id)
    bookmark.delete()
    return redirect('mente:home')
