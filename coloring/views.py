from django.shortcuts import render

def index(request):
    return render(request, 'coloring/index.html')

def demo(request):
    return render(request, 'coloring/demo.html')

def artwork_page_3(request):
    return render(request, 'coloring/artwork_page_3.html')

def artwork_page_2(request):
    return render(request, 'coloring/artwork_page_2.html')

def artwork_page_1(request):
    return render(request, 'coloring/artwork_page_1.html')

def art_community_main_page(request):
    return render(request, 'coloring/art_community_main_page.html')

def new_interaction(request):
    return render(request, 'coloring/new_interaction.html')