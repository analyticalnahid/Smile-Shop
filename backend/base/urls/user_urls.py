from django.urls import path
from base.views.user_views import MyTokenObtainPairView, registerUser, getUserProfile, getUsers

urlpatterns = [

    path('', getUsers, name='users'),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', getUserProfile, name='user-profile'),
    path('register/', registerUser, name='register-user'),

]
