from cgitb import reset
from django.shortcuts import render
from django.http import HttpResponse

def display_portfolio(request):
    return render(
        request, 'index.html', {
            'user_fullname': 'Sashwat K',
            'user_firstname': 'Sashwat',
            'user_lastname': 'K',
            'user_mail_id': 'hi@sashwat.in',
            'website_copyright': 'Sashwat K 2022, All Rights Reserved.'
    })
