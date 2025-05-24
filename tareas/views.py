from rest_framework import viewsets
from .models import tareas
from .serializers import TareasSerializer
     
# from rest_framework.views import APIView

# class TareaAPIView(APIView):
#     def get(self, request):
#         # código para listar tareas

#     def post(self, request):
#         # código para crear una nueva tarea
#--------------------------------------------------------------------------------------------------

# con esos codigos me ayuda ya crear automatico el crud completo q es con el 
# get , post, put y delete - me ahorra a hacer codigo como el de arriba q tmb es 
class Clase1(viewsets.ModelViewSet):
    queryset = tareas.objects.all()
    serializer_class = TareasSerializer