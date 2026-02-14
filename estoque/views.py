from django.shortcuts import render
from rest_framework import viewsets
from .models import Bebidas
from .serializers import BebidasSerializer
from rest_framework import permissions
from django_filters.rest_framework import DjangoFilterBackend

class BebidasViewset(viewsets.ModelViewSet):
    queryset = Bebidas.objects.all()
    serializer_class = BebidasSerializer
    
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['e_destaque', 'categoria']  
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
# Create your views here.