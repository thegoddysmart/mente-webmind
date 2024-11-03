from . import views
# from .views import home
from django.urls import path, include
from django.contrib.auth import views as auth_views

app_name = 'mente'

urlpatterns = [
    path('', views.home, name='home'),   
     path('', include('django.contrib.auth.urls')),
    path('register/', views.register, name='register'),
    path('add/', views.add_bookmark, name='add_bookmark'),
    path('search/', views.search_bookmark, name='search_bookmark'),
    path(
        '<slug:bookmark>/',
        views.bookmark_detail,
        name='bookmark_detail',
    ),
    path(
        'password_reset_done/',
        auth_views.PasswordResetDoneView.as_view(), 
        name='password_reset_done'
    ),
    path('delete/<int:bookmark_id>/', views.delete, name='delete'),

]
