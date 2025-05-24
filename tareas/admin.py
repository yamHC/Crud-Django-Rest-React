from django.contrib import admin
from .models import tareas          # Importa el modelo tareas


admin.site.register(tareas)         # Registra el modelo tareas en el panel de administración de Djangoc