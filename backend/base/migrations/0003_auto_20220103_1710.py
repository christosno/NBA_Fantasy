# Generated by Django 3.2 on 2022-01-03 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_auto_20220103_1707'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='teams',
        ),
        migrations.AddField(
            model_name='player',
            name='teams',
            field=models.ManyToManyField(blank=True, null=True, to='base.Team'),
        ),
    ]
