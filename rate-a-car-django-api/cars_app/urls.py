from django.urls import path

from .views import BrandView, CarModelByBrandView, GetCarModels

urlpatterns = [
    path('brand/', BrandView.as_view()),
    path('randomModels/', GetCarModels.as_view()),
    path('model/<int:id>/', CarModelByBrandView.as_view())
]