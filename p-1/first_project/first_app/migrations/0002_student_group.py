# Generated by Django 5.1.2 on 2024-10-27 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='group',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
