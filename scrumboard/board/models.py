from django.db import models
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
@python_2_unicode_compatible
class List(models.Model):
    name = models.CharField(max_length=50)

    def _str_(self):
        return "List: {}".format(self.name)

DEFAULT_LIST_ID = 1

@python_2_unicode_compatible
class Card(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    list = models.ForeignKey(List, related_name='cards', on_delete=models.SET_DEFAULT, default=DEFAULT_LIST_ID)
    story_points = models.IntegerField(null=True, blank=True)
    business_value = models.IntegerField(null=True, blank=True)

    def _str_(self):
        return "Card: {}".format(self.name)