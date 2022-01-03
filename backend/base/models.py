from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import CharField



class Team(models.Model):
    name = models.CharField(max_length=200, null=False)

    def __str__(self):
        return self.name



class Player(models.Model):
    player_id= models.CharField(max_length=10, primary_key=True)
    name= models.CharField(max_length=200, null=True, blank=True)
    total_points= models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    teams = models.ManyToManyField(Team, blank=True)
    # img = 
    last_update = models.DateTimeField(auto_now=False)
    
    def __str__(self):
        return self.name
