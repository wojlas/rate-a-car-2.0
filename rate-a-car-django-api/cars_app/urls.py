from django.urls import path

from .views import BrandView, CarModelDetails, GetCarModels

urlpatterns = [
    path('brand/', BrandView.as_view()),
    path('models/', GetCarModels.as_view()),
    path('model/<int:id>/', CarModelDetails.as_view())
]