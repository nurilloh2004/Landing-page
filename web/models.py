from django.db import models

# Create your models here.
class Entrence(models.Model):
    name = models.CharField(max_length=125)

    def __str__(self) -> str:
        return self.name

class Floor(models.Model):
    name = models.CharField(max_length=125)
    entrence = models.ForeignKey(Entrence, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

class Room(models.Model):
    name = models.CharField(max_length=125)
    floor = models.ForeignKey(Floor, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name
    


class Zayavka(models.Model):
    f_name = models.CharField(max_length=125)
    phone = models.IntegerField()
    floor = models.ForeignKey(Floor, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name