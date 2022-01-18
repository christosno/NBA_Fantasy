from apscheduler.schedulers.background import BackgroundScheduler
from .players import get_players_stats

def start():
    scheduler = BackgroundScheduler()
    scheduler.add_job(get_players_stats, 'interval', minutes=3)
    scheduler.start()