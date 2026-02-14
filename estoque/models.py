import requests
from django.db import models
from django.core.files.base import ContentFile
# from PIL import Image

# img = Image.open ('Cerveja.png')

class Bebidas(models.Model):
    OPCOES_CATEGORIA = [
        ('Cerveja', 'Cerveja'),
        ('Vinho', 'Vinho'),
        ('Destilado', 'Destilado'),
        ('NaoAlcoolico', 'Sem Álcool'),
    ]

    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=6, decimal_places=2)
    quantidade = models.IntegerField(verbose_name="Quantidade em Estoque") 
    
    e_destaque = models.BooleanField(default=False, verbose_name="Destaque no Site")
    categoria = models.CharField(
        max_length=50, 
        choices=OPCOES_CATEGORIA, 
        default='Cerveja'
    )
    
    data_entrada = models.DateField(auto_now_add=True)
    url_foto = models.URLField(max_length=500, null=True, blank=True)
    imagem = models.ImageField(upload_to='bebidas/', null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.url_foto and not self.imagem:
            try:
                headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
                resposta = requests.get(self.url_foto, headers=headers, timeout=10)
                if resposta.status_code == 200:
                    nome_arquivo = f"{self.nome.replace(' ', '_').lower()}.jpg"
                    self.imagem.save(nome_arquivo, ContentFile(resposta.content), save=False)
            except Exception as e:
                print(f"Erro ao baixar a foto: {e}")
        super().save(*args, **kwargs)

    def __str__(self):
        return self.nome
# Create your models here.
