from rest_framework import generics

from .models import Job
from .serializers import JobSerializer


class JobListCreateView(generics.ListCreateAPIView):
    queryset = Job.objects.filter(is_active=True)
    serializer_class = JobSerializer
