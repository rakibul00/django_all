# Generated by Django 5.1.2 on 2024-10-27 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0002_student_group'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('father_name', models.CharField(max_length=10)),
                ('group', models.IntegerField(max_length=10)),
                ('deparment', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=20)),
            ],
        ),
    ]
