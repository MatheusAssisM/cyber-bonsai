from django.urls import path
from ..views.infoView import InfoView

urlpatterns = [
    path('', InfoView.as_view())
]