from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import BrandSerializer, CarModelsSerializer

from .models import Brand, CarModel
from rateACarApi.global_methods import throw200, throw400, throw500

class BrandView(APIView):
    def get(self, request):
      try:
        queryset = Brand.objects.all()
        serializer = BrandSerializer(queryset, many=True)

        return Response(serializer.data, status=throw200())
      except Brand.DoesNotExist:
        return Response(serializer.errors, status=throw500())
      
class GetCarModels(APIView):
   def get(self, request):
      try:
         queryset = CarModel.objects.all()
         serializer = CarModelsSerializer(queryset, many=True)

         return Response(serializer.data, status=throw200())
      except CarModel.DoesNotExist:
         return Response(serializer.errors, status=throw500())
    
class CarModelByBrandView(APIView):
    def get(self, request, id):
      try:
        queryset = CarModel.objects.filter(brand_id = id)
        serializer = CarModelsSerializer(queryset, many=True)

        return Response(serializer.data, status=throw200())
      except CarModel.DoesNotExist:
        return Response(serializer.errors, status=throw500())