from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import CharField, NullBooleanField



class Team(models.Model):
    name = models.CharField(max_length=200, null=False)

    def __str__(self):
        return self.name



class Player(models.Model):
    player_id = models.CharField(max_length=10, primary_key=True)
    first_name = models.CharField(max_length=200, null=True, blank=True)
    last_name = models.CharField(max_length=200, null=True, blank=True)
    position = models.CharField(max_length=5, null=True, blank=True)
    height = models.CharField(max_length=10, null=True, blank=True)
    weight = models.CharField(max_length=10, null=True, blank=True)
    games_played = models.CharField(max_length=10, null=True, blank=True)
    rebound = models.CharField(max_length=10, null=True, blank=True)
    assist = models.CharField(max_length=10, null=True, blank=True)
    steal = models.CharField(max_length=10, null=True, blank=True)
    block = models.CharField(max_length=10, null=True, blank=True)
    turnover = models.CharField(max_length=10, null=True, blank=True)
    personal_foul = models.CharField(max_length=10, null=True, blank=True)
    points =  models.CharField(max_length=10, null=True, blank=True)
    fg_pct =  models.CharField(max_length=10, null=True, blank=True)
    fg3_pct =  models.CharField(max_length=10, null=True, blank=True)
    ft_pct =  models.CharField(max_length=10, null=True, blank=True)
    total_index_rating = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    avg_intex_rating = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    player_team = models.CharField(max_length=200, null=True, blank=True)
    user_teams = models.ManyToManyField(Team, blank=True)
    image = models.ImageField(null=True, blank=True)
    
    
    def __str__(self):
        return (self.first_name + " " + self.last_name)
