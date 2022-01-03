import requests
from ..models import Player
import datetime



def get_player_stats(pk):
    total_player_stats = []
    url = "https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]={}".format(pk)

    player_stats = requests.get(url).json()

    for p_stats in player_stats['data']:
            total_player_stats.append(p_stats)
   
    num_pages = player_stats['meta']['total_pages']

    for page in range(2, num_pages+1):
        player_stats = requests.get(url, params={"page":page}).json()
        for p_stats in player_stats['data']:
            total_player_stats.append(p_stats)
        
    return total_player_stats


def get_players_stats():
    print('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    # date = datetime.datetime.now().date()
    players_id = ['237', '15', '115', '132'] # 
    for player_id in players_id:
        player_stats = get_player_stats(player_id)
        print(len(player_stats))
        # print('date------->',date)


