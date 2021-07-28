from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Product
from .serializers import ProductSerializer
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
    Handles GET and POST request method i.e, non-primary key based operations
    returns a serialized list of all the available products
    """
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    # safe=False: allows non-dict objects to be serialized
    return Response(serializer.data)


@api_view(["GET"])
def getProduct(request, pk):
    """
    Handles GET, PUT and DELETE request method i.e, primary key based operations
    """

    # try:
    #     product = Product.objects.get(_id=pk)
    # except Product.DoesNotExist:
    #     return Response(status=status.HTTP_404_NOT_FOUND)

    product = get_object_or_404(Product, _id=pk)

    #  returns a single serialized product
    if request.method == "GET":
        serializer = ProductSerializer(product)
        return Response(serializer.data)
