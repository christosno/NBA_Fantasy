from django.db.models import fields
from  rest_framework import serializers
from django.contrib.auth.models import User
from .models import Player

class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = '__all__'

