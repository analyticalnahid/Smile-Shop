
from base.models import Product, Review
from django.contrib.auth.models import User
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
