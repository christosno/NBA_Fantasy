import requests
from ..models import Player
import datetime

# //////// year from datetime  //////////
year = 2021

# get player info
def get_player_info(pk):
    url = 'https://www.balldontlie.io/api/v1/players/{}'.format(pk)

    player_info_data = requests.get(url).json()

    # clean data
    player_info = {'player_id': player_info_data['id'], 'first_name': player_info_data['first_name'], 
                   'last_name': player_info_data['last_name'], 'position': player_info_data['position'],
                   'team': player_info_data['team']['abbreviation'], }

    return player_info

# get player's average stats for the season
def get_player_average_stats(pk):
    url = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]={}'.format(pk)

    player_season_avg_stats = requests.get(url).json()['data'][0]

    # clean data
    # player_avg_cleand_stats = {"games_played": player_season_avg_stats["games_played"], 'min_played': player_season_avg_stats['min'],
    #                            'reb': player_season_avg_stats['reb'], 'ast': player_season_avg_stats['ast'],
    #                            'stl': player_season_avg_stats['stl'], 'blk': player_season_avg_stats['blk'],
    #                            'turnover': player_season_avg_stats['turnover'], 'p_foul': player_season_avg_stats['pf'],
    #                            'pts' :player_season_avg_stats['pts'], 'fg_pct': player_season_avg_stats['fg_pct'],
    #                            'fg3_pct': player_season_avg_stats['fg3_pct'], "ft_pct": player_season_avg_stats['ft_pct']}

    return player_season_avg_stats


# # get player's stats for each game in the season
# def get_player_stats_for_all_games(pk):
#     total_player_stats = []
#     url = "https://www.balldontlie.io/api/v1/stats?seasons[]={}&player_ids[]={}".format(year, pk)

#     player_stats = requests.get(url).json()
#     # full stats from first page
#     for p_stats in player_stats['data']:
#             total_player_stats.append(p_stats)
   
#     # find the total pages
#     num_pages = player_stats['meta']['total_pages']

#     # iterate from page 2 until last page 
#     for page in range(2, num_pages+1):
#         player_stats = requests.get(url, params={"page":page}).json()
#         # full stats from ather pages, if exists
#         for p_stats in player_stats['data']:
#             total_player_stats.append(p_stats)
        
#     return total_player_stats


def get_players_stats():
    print('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    # date = datetime.datetime.now().date()

    # all the player_id that use in the database
    players_id = ['237', '15', '115', '132'] #
    for player_id in players_id:
        player_avg_stats = get_player_average_stats(player_id)
        # i can use update_or_create
        try:
            player = Player.objects.get(player_id=player_id)
            print('There is player with id {}'.format(player_id))
        except Player.DoesNotExist:
            player_info = get_player_info(player_id)
            print('There is no player with id {}'.format(player_id))
            player = Player(player_id=player_info['player_id'], first_name=player_info['first_name'],
                            last_name=player_info['last_name'], position=player_info['position'],
                            player_team= player_info['team'], games_played=player_avg_stats['games_played'],
                            rebound=player_avg_stats['reb'], assist=player_avg_stats['ast'],
                            steal=player_avg_stats['stl'], block=player_avg_stats['blk'],
                            turnover=player_avg_stats['turnover'],personal_foul=player_avg_stats['pf'],
                            points=player_avg_stats['pts'], fg_pct=player_avg_stats['fg_pct'],
                            fg3_pct=player_avg_stats['fg3_pct'], ft_pct=player_avg_stats['ft_pct'])

            player.save()
            print('The player {} {} with id:{} added!!'.format(player_info["first_name"],player_info["last_name"],player_info['player_id']))
           


