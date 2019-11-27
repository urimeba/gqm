from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from Apps.gqm.models import Contexto, Meta, MetaPregunta, Pregunta
from django.http import JsonResponse, HttpResponse
from django.contrib.auth.models import User

def loginn(request):
    if(request.method=='POST'):
        print("ES POST")
        usuario = request.POST.get('usuario')
        contraseña = request.POST.get('contraseña')
        user = authenticate(request, username=usuario, password=contraseña)
        if user is not None:
            login(request, user)
            return HttpResponse(True)
        else:
            return HttpResponse('Datos incorrectos. Favor de verificarlos')
    else:
        if request.user.is_authenticated:
            return redirect(home)
        else:
            return render(request, 'registration/login.html')

@login_required
def cerrarSesion(request):
    logout(request)
    return redirect(loginn)

def register(request):
    if request.method == 'POST':
        usuario = request.POST.get('usuario')
        contraseña = request.POST.get('contraseña')
        user, created = User.objects.get_or_create(username=usuario)
        if created:
            user.set_password(contraseña)
            user.save()
            return HttpResponse("Usuario creado correctamente")
        else:
            return HttpResponse("El usuario ya existe. Elige otro nombre de usuario")
    else:
        return render(request, 'registration/register.html')

@login_required
def home(request):
    contexto = Contexto.objects.all()
    metas = Meta.objects.all()
    return render(request, 'home.html', {'contexto':contexto, 'metas':metas})

@login_required
def poll(request):
    metas = Meta.objects.all()
    return render(request, 'poll/poll.html', {'metas':metas})

def getPreguntas(request):
    idMeta = request.POST.get('idMeta')
    meta = Meta.objects.get(id=idMeta)
    preguntas = MetaPregunta.objects.filter(meta=meta).values()
    return JsonResponse({'preguntas':list(preguntas)}, safe=False)

@login_required
def statistics(request):
    return render(request, 'statistics/statistics.html')

@login_required
def results(request):
    return render(request, 'results.html')