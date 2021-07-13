from django.urls import path
from . import views

urlpatterns = [
    path('library', views.library, name='library'),
    path('demo', views.index, name='demo'),
    path('new_interaction', views.index, name='new_interaction')
]
