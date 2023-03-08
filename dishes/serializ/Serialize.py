from rest_framework import serializers
from dishes.models import Dish



class LeadSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Dish
        fields = '__all__'

    def get_image_url(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.image)

