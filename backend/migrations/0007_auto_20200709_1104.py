# Generated by Django 3.0.8 on 2020-07-09 08:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20200709_1059'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='avarage',
        ),
        migrations.RemoveField(
            model_name='product',
            name='good',
        ),
    ]
