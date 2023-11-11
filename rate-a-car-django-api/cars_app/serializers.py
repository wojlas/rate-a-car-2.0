from rest_framework import serializers
from .models import Brand, CarModel

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'

class CarModelsSerializer(serializers.ModelSerializer):
    brand = serializers.SerializerMethodField()
    productionFrom = serializers.IntegerField(source='production_from')
    productionTo = serializers.IntegerField(source='production_to')

    class Meta:
        model = CarModel
        fields = ['id', 'name', 'version', 'rate', 'brand', 'productionFrom', 'productionTo']

    def get_brand(self, obj):
        return {
            'id': obj.brand.id,
            'name': obj.brand.name
        }
