from cgitb import reset
from django.shortcuts import render
from django.http import HttpResponse

def display_portfolio(request):
    return render(request, 'index.html')
