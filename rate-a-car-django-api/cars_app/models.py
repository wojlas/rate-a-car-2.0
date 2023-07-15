from django.db import models

class Brand(models.Model):
    name = models.CharField(max_length=32, null=False, unique=True)

    def __str__(self):
        return f'{ self.name }'

class CarModel(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=False)
    name = models.CharField(max_length=32, null=False)
    version = models.CharField(max_length=32, null=True, blank=True)
    production_from = models.IntegerField(null=False)
    production_to = models.IntegerField(null=True, blank=True)
    rate = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f'{ self.brand } { self.name } { self.version }'
            
