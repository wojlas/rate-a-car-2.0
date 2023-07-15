from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import BrandSerializer, CarModelsSerializer

from .models import Brand, CarModel
from rateACarApi.global_methods import throw200, throw500

class BrandView(APIView):
    def get(self, request):
      try:
        queryset = Brand.objects.all()
        serializer = BrandSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
      except Brand.DoesNotExist:
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
      
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

        return Response(serializer.data, status=status.HTTP_200_OK)
      except CarModel.DoesNotExist:
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)