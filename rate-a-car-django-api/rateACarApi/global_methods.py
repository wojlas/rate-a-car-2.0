from rest_framework import status

def throw200():
    return status.HTTP_200_OK

def throw500():
    return status.HTTP_500_INTERNAL_SERVER_ERROR