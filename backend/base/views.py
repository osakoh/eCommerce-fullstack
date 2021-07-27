from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from .products import products

# Create your views here.


@api_view(["GET"])
def getRoutes(request):
    """returns a list of all the available routes"""
    routes = [
        "/api/products",
        "/api/products/create/",
        "/api/products/upload/",
        "/api/products/<id>/reviews/",
        "/api/products/top/",
        "/api/products/<id>/",
        "/api/products/delete/<id>/",
        "/api/products/update/<id>/",
    ]
    return Response(routes)


@api_view(["GET"])
def getProducts(request):
    """
    returns a serialized list of all the available products
    """

    # safe=False: allows non-dict objects to be serialized
    return Response(products)


@api_view(["GET"])
def getProduct(request, pk):
    """
    returns a single serialized product
    """
    product = None

    for i in products:
        if i["_id"] == pk:
            product = i
            break

    return Response(product)
