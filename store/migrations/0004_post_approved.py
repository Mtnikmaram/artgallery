# Generated by Django 4.2.4 on 2023-08-31 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_remove_cartitem_cart_remove_cartitem_product_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='approved',
            field=models.BooleanField(default=False),
        ),
    ]
