from django.urls import path 
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('players/', views.getPlayers, name='players'),
    path('players/<str:pk>', views.getPlayer, name='player'),
]