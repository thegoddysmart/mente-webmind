# Generated by Django 5.1.1 on 2024-10-29 12:27
from django.contrib.postgres.operations import TrigramExtension
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mente', '0001_initial'),
    ]

    operations = [
        TrigramExtension()
    ]