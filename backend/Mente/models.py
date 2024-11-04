from django.db import models
from django.conf import settings
from django.urls import reverse
from taggit.managers import TaggableManager
from django.utils.text import slugify


# Create your models here.
class Bookmark(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(blank=True, unique=True)
    url = models.URLField()
    about = models.TextField()
    # tags = TaggableManager()
    highlight = models.TextField()
    notes = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    
    class Meta:
        ordering = ['updated']
        indexes = [
            models.Index(fields=['-created']),
        ]
    def save(self, *args, **kwargs):
        # Automatically generate slug from title
        if not self.slug:  # Only set slug if it is not already set
            self.slug = slugify(self.title)
        super().save(*args, **kwargs) 

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse(
            'mente:bookmark_detail',
            args=[
                self.slug,
            ],
        )
    