from rest_framework import serializers
from .models import Brand, CarModel

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'

class CarModelsSerializer(serializers.ModelSerializer):
    brand = serializers.SerializerMethodField()

    class Meta:
        model = CarModel
        fields = ['id', 'name', 'version', 'production_from', 'production_to', 'rate', 'brand']

    def get_brand(self, obj):
        return {
            'id': obj.brand.id,
            'name': obj.brand.name
        }

