from apscheduler.schedulers.background import BackgroundScheduler
from .players import get_players_stats

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(get_players_stats, 'interval', seconds=40)
    scheduler.start()