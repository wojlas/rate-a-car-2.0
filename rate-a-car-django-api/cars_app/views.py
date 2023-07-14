from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import BrandSerializer, CarModelsSerializer

from .models import Brand, CarModel

class BrandView(APIView):
    def get(self, request):
      try:
        queryset = Brand.objects.all()
        serializer = BrandSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
      except:
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class CarModelView(APIView):
    def get(self, request):
      try:
        queryset = CarModel.objects.all()
        serializer = CarModelsSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
      except:
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)