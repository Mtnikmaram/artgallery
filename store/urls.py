from . import views
from django.urls import path

urlpatterns = [
    path('', views.PostList.as_view(), name='home'),
    path('create_post/', views.CreatePost.as_view(), name='create_post'),
    path('view_post/', views.ViewPost.as_view(), name='view_post'),
    path('show_profile/', views.ShowProfile.as_view(), name='show_profile'),
    path('admin_area/', views.AdminArea.as_view(), name='admin_area'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('like/<slug:slug>/', views.PostLike.as_view(), name='post_like'),
]
