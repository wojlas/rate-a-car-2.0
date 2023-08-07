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
      
    def post(self, request, format=None):
      page_index = request.data.get('pageIndex', 1)
      page_size = request.data.get('pageSize', 20)
      # page_size = 3

      start_index = (page_index - 1) * page_size
      end_index = page_index * page_size
      try:
         query = CarModel.objects.all()[start_index:end_index]
         total_count = CarModel.objects.count()

         serializer = CarModelsSerializer(query, many=True)

         response_data = {
            'carModels': serializer.data,
            'totalCount': total_count
         }

         return Response(response_data, status=throw200())
         
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