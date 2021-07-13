from django.urls import path
from . import views

urlpatterns = [
    path('drawing', views.drawing, name='drawing'),
    path('artwork_page_3', views.artwork_page_3, name='artwork_page_3'),
    path('artwork_page_2', views.artwork_page_2, name='artwork_page_2'),
    path('artwork_page_1', views.artwork_page_1, name='artwork_page_1'),
    path('art_community_main_page', views.art_community_main_page, name='art_community_main_page'),
    path('new_interaction', views.new_interaction, name='new_interaction'),
    path('library', views.library, name='library'),
    path('landing_page', views.landing_page, name='landing_page')
]
