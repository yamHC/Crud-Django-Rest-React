from rest_framework import serializers
from .models import tareas                  # Importa el modelo tareas

# el serializer es una clase que se encarga de convertir los datos del modelo en JSON

class TareasSerializer(serializers.ModelSerializer):
    class Meta:
        model = tareas
        fields = '__all__' # '__all__' significa que se van a incluir todos los campos del modelo
        # fields = ['id', 'nombre', 'descripcion', 'fecha_creacion'] # o puedes especificar los campos que quieres incluir