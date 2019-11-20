from django.db import models

# Create your models here.
class Contexto(models.Model):
    descripcion = models.CharField(max_length=1000)

class Meta(models.Model):
    descripcionGeneral = models.CharField(max_length=1000)
    descripcionEspecifica = models.CharField(max_length=1000)
    entidad = models.CharField(max_length=500)
    proposito = models.CharField(max_length=500)
    propiedades = models.CharField(max_length=500)
    interesados = models.CharField(max_length=500)
    ambiente = models.CharField(max_length=500)

class MetaPregunta(models.Model):
    meta = models.ForeignKey('Meta', on_delete=models.CASCADE)
    pregunta = models.ForeignKey('Pregunta', on_delete=models.CASCADE)

class Pregunta(models.Model):
    pregunta = models.CharField(max_length=500)
