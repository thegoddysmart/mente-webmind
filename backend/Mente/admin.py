from django.contrib import admin
from .models import Bookmark

# Register your models here.
@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'owner', 'url', 'notes', 'about']
    list_filter = ['url', 'created', 'owner']
    search_fields = ['title', 'url']
    prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ['owner']
    date_hierarchy = 'updated'
    ordering = ['created', 'updated']
    show_facets = admin.ShowFacets.ALWAYS
