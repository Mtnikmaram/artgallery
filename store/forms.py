from .models import Comment
from django import forms


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('body',)


class CartItemForm(forms.Form):
    quantity = forms.IntegerField(min_value=1)