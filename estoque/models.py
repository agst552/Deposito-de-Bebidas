from django.db import models
# from PIL import Image

# img = Image.open ('Cerveja.png')

class Bebidas (models.Model):
    nome = models.CharField (max_length=100)
    preco = models.DecimalField (max_digits=6, decimal_places=2)
    quantidade_estoque = models.IntegerField ()
    categoria = models.CharField (max_length=50)
    data_entrada = models.DateField (auto_now_add=True)
    imagem = models.ImageField(upload_to='bebidas/', null=True, blank=True)
def __str__ (self):
    return self.nome
# Create your models here.
