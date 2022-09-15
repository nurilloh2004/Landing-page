from django import forms
from .models import *


class ZayavkaForm(forms.ModelForm):
    class Meta:
        model = Zayavka
        fields = '__all__'
