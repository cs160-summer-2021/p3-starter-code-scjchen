from django.shortcuts import render

def index(request):
    return render(request, 'coloring/index.html')

def library(request):
    return render(request, 'coloring/library.html')