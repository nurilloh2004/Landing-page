from multiprocessing import context
import re
from django.shortcuts import render
from django.views.generic import TemplateView

from web.forms import ZayavkaForm
from .models import *
# Create your views here.

# class HomePageView(TemplateView):
#     template_name = 'index.html'

def entrences(request):
    entrences = Entrence.objects.all()
    context = {'entrences' : entrences}
    return render(request,'index.html', context)

def floors(request):
    entrence = request.GET.get(entrence)
    floors = Floor.objects.filter(entrence=entrence)
    context = {'floors' : floors}
    return render(request, 'index.html', context)

def rooms(request):
    floors = request.GET.get(floors)
    rooms = Room.objects.filter(floors=floors)
    context = {'rooms' : rooms}
    return render(request, 'index.html', context)


def user_zayavka_view(request):
    form = ZayavkaForm(data=request.POST)
    return render(request,'index.html', context={'form':form})