"""indicadores URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
import Apps.gqm.views as views_gqm

urlpatterns = [
    path('', views_gqm.home, name="home"),
    path('poll', views_gqm.poll, name="poll"),
    path('statistics', views_gqm.statistics, name="statistics"),
    path('results', views_gqm.results, name="results"),
    path('loginn', views_gqm.loginn, name="loginn"),
    path('register', views_gqm.register, name="register"),

    path('cerrarSesion', views_gqm.cerrarSesion, name="cerrarSesion"),
    path('getPreguntas', views_gqm.getPreguntas, name="getPreguntas"),
    
]
