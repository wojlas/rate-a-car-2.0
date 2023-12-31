# Generated by Django 4.2.3 on 2023-07-14 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars_app', '0002_alter_carmodel_production_from_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carmodel',
            name='production_from',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='carmodel',
            name='production_to',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='carmodel',
            name='rate',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='carmodel',
            name='version',
            field=models.CharField(max_length=32, null=True),
        ),
    ]
