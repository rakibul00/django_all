# Generated by Django 5.1.2 on 2024-11-02 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Text',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=400)),
                ('text', models.TextField()),
                ('first_at', models.DateTimeField(auto_now_add=True)),
                ('last_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
