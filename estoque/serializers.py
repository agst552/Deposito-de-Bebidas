from rest_framework import serializers
from .models import Bebidas

class BebidasSerializer (serializers.ModelSerializer):
    class Meta: 
        model = Bebidas

        fields = '__all__'