from django.contrib import admin
from .models import Bebidas

# admin.site.register(Bebidas)

@admin.register(Bebidas)
class BebidasAdmin(admin.ModelAdmin):
    list_display = ('nome', 'categoria', 'preco', 'e_destaque')
    
    list_editable = ('e_destaque',) 
    
    list_filter = ('e_destaque', 'categoria')
# Register your models here.
