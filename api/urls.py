from django.urls import path
from .views import (
    get_blog,
    get_post,
    get_category,
    get_posts_by_category,
    get_search,
)

urlpatterns = [
    path("blog/", get_blog),
    path("post/<slug:slug>/", get_post),
    path("category/", get_category),
    path("category/<slug:slug>/", get_posts_by_category),
    path("search/", get_search),
]
