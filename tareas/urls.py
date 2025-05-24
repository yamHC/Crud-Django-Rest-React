from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from tareas.views import Clase1  # Importa la vista que se va a usar


# from django.urls import path
# from .views import TareaListView, TareaDetailView

# urlpatterns = [
#     path("tareas/", TareaListView.as_view(), name="tarea-list"),
#     path("tareas/<int:pk>/", TareaDetailView.as_view(), name="tarea-detail"),
# ]

router = routers.DefaultRouter()    # Crea una instancia del router
router.register(r"tareas", Clase1)  # es para api/v1/tareas/  # Registra la vista en el router

urlpatterns = [
    path("api/v1/", include(router.urls)), # Incluye las URLs generadas
    path('docs/', include_docs_urls(title='Tarea API')),  # Documentación de la API
]
