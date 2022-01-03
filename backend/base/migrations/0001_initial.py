# Generated by Django 3.2 on 2022-01-03 15:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('player_id', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('total_points', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('last_update', models.DateTimeField()),
                ('teams', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.team')),
            ],
        ),
    ]
