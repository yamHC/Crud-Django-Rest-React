from django.db import models

# Crear la tabla - con los comandos  1) python manage.py makemigrations 2) python manage.py migrate
class tareas(models.Model):
    
    # todos los campos que se van a incluir en la tabla
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    VerdarFalso = models.BooleanField(default=False)
    
    
    def __str__(self):
        return self.title   # para ver el nombre en el admin
    
    class Meta:
        verbose_name = 'Tarea'
        verbose_name_plural = 'Tareas'
        ordering = ['title']