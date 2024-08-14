from django.contrib import admin
from .models import Category, Tag, Post
from django.utils.html import format_html
from django.templatetags.static import static
from django.utils.safestring import mark_safe


class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}


admin.site.register(Category, CategoryAdmin)


class TagAdmin(admin.ModelAdmin):
    list_display = ("name",)


admin.site.register(Tag, TagAdmin)


class PostAdmin(admin.ModelAdmin):

    def image_tag(self, obj):
        if obj.thumbnail:
            return format_html(
                '<img src="{}" style="max-width:50px; max-height:50px"/>'.format(
                    obj.thumbnail.url
                )
            )
        else:
            return "No Image!"

    image_tag.short_description = "Thumbnail"

    list_display = ("image_tag", "title", "category", "published_at", "updated_at")
    list_display_links = ("title", "image_tag")
    prepopulated_fields = {"slug": ("title",)}


admin.site.register(Post, PostAdmin)
