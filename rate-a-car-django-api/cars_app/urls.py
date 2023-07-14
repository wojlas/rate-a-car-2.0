from django.urls import path

from .views import BrandView, CarModelView

urlpatterns = [
    path('brand/', BrandView.as_view()),
    path('model/', CarModelView.as_view())
]