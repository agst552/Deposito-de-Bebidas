from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import BebidasViewset

router = DefaultRouter ()
router.register (r'bebidas', BebidasViewset)

urlpatterns = [
    path ('', include (router.urls)),
]