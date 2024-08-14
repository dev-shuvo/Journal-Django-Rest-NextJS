from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post, Category
from .serializers import PostSerializer, CategorySerializer
from django.db.models import Q


@api_view(["GET"])
def get_blog(request):
    blog = Post.objects.order_by("-published_at")
    serializer = PostSerializer(blog, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_post(request, slug):
    post = Post.objects.get(slug=slug)
    serializer = PostSerializer(post)
    return Response(serializer.data)


@api_view(["GET"])
def get_category(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_posts_by_category(request, slug):
    try:
        category = Category.objects.get(slug=slug)
        posts = Post.objects.filter(category=category).order_by("-published_at")
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response({"error": "Category not found"}, status=404)


@api_view(["GET"])
def get_search(request):
    keyword = request.GET.get("keyword", None)
    posts = Post.objects.all()

    if keyword:
        posts = posts.filter(
            Q(content__icontains=keyword) | Q(title__icontains=keyword)
        ).order_by("-published_at")

    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)
