from . import views
from django.urls import path

urlpatterns = [
    path('', views.PostList.as_view(), name='home'),
    path('create_post/', views.CreatePostView.as_view(), name='create_post'),
    path('view_post/', views.ViewPost.as_view(), name='view_post'),
    path('update_post/<int:id>/', views.UpdatePostView.as_view(), name='update_post'),
    path('delete_post/<int:id>/', views.DeletePostView.as_view(), name='delete_post'),
    path('show_profile/', views.EditProfileView.as_view(), name='show_profile'),
    path('<int:id>/', views.PostDetail.as_view(), name='post_detail'),
    path('like/<int:id>/', views.PostLike.as_view(), name='post_like'),
]
