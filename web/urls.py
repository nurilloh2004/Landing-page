from django.urls import path
from .views import *

urlpatterns = [
    # path('', HomePageView.as_view(), name='entrences'),
    path('', entrences, name='entrences'),
    path('floors/', floors, name='floors'),
    path('rooms/', rooms, name='rooms'),
    path('form/', user_zayavka_view, name='form'),
]