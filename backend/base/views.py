from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import PlayerSerializer

from .models import Player


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/players',
        '/api/players/<id>'
    ]
    return Response(routes)

@api_view(['GET'])
def getPlayers(request):
    players = Player.objects.all()
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)
    

@api_view(['GET'])
def getPlayer(request, pk):
    player = Player.objects.get(player_id=pk)
    serializer = PlayerSerializer(player, many=False)
    return Response(serializer.data)


