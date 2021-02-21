from rest_framework.views import APIView
from rest_framework.response import Response
import json

class InfoView(APIView):
    def __init__(self):
        self.dados = None

    def get(self, request, format=None):
        return Response({"Status":self.dados})
        
    def post(self, request, format=None):
        self.dados = request.data
        print(request.data)
        return Response({"status":"Dados recebidos"})