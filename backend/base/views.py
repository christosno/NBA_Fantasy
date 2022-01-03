from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

import requests

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/players',
        '/api/players/<id>'
    ]
    return Response(routes)

@api_view(['GET'])
def getPlayers(request):
    r = requests.get('https://www.balldontlie.io/api/v1/stats?start_date=2022-01-02')
    players = r.json()
    return Response(players['data'])

@api_view(['GET'])
def getPlayer(request, pk):

    # player = None
    # for i in players:
    #     if i[id] == pk:
    #         player = i
    #         break

    r = requests.get("https://www.balldontlie.io/api/v1/players/{}".format(pk))
    player = r.json()
    return Response(player)

