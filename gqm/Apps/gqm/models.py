from django.db import models

# Create your models here.
class Contexto(models.Model):
    descripcion = models.CharField(max_length=600)

class Meta(models.Model):
    abreviacion = models.CharField(max_length=50)
    descripcionGeneral = models.CharField(max_length=500)
    descripcionEspecifica = models.CharField(max_length=1100)
    entidad = models.CharField(max_length=200)
    proposito = models.CharField(max_length=200)
    propiedades = models.CharField(max_length=200)
    interesados = models.CharField(max_length=200)
    ambiente = models.CharField(max_length=200)

class MetaPregunta(models.Model):
    meta = models.ForeignKey('Meta', on_delete=models.CASCADE)
    pregunta = models.ForeignKey('Pregunta', on_delete=models.CASCADE)

class Pregunta(models.Model):
    pregunta = models.CharField(max_length=200)
