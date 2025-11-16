# Blog Template

## Database Properties

### Required Properties
- **id** (Text)
  - Description: Unique identifier for each post
  - Example: `post-001`

- **slug** (Text)
  - Description: URL-friendly version of the title
  - Example: `bai-viet-dau-tien`

- **title** (Text)
  - Description: Post title
  - Example: `Bài viết đầu tiên của tôi`

- **date** (Date)
  - Description: Publication date
  - Format: YYYY-MM-DD
  - Example: `2024-03-20`

- **tag** (Multi-select)
  - Options:
    - Engineer
    - Blockchain
    - Product
    - Thought
    - Invest
    - Others

- **status** (Select)
  - Options:
    - Published
    - Draft

- **lang** (Select)
  - Options:
    - vi (Tiếng Việt)
    - en (English)

- **description** (Text)
  - Description: Short description of the post
  - Example: `Đây là mô tả ngắn về bài viết của tôi`

- **series** (Multi-select)
  - Description: Series that the post belongs to
  - Example: `Series React`, `Series JavaScript`

- **hero_image** (Files & media)
  - Description: Featured image for the post
  - Recommended size: 1200x630px

### Optional Properties
- **linkRelatived** (Text)
  - Description: Related link
  - Example: `https://example.com/related-post`

## Example Post

```json
{
  "id": "post-001",
  "slug": "bai-viet-dau-tien",
  "title": "Bài viết đầu tiên của tôi",
  "date": "2024-03-20",
  "tag": ["Engineer", "Product"],
  "status": "Published",
  "lang": "vi",
  "description": "Đây là mô tả ngắn về bài viết của tôi",
  "series": ["Series React"],
  "hero_image": "URL_to_image",
  "linkRelatived": "https://example.com/related-post"
}
```

## Cách sử dụng template

1. Tạo database mới trong Notion
2. Thêm các thuộc tính như mô tả ở trên
3. Tạo bài viết mới với đầy đủ thông tin
4. Đảm bảo status là "Published" để hiển thị bài viết
5. Upload hero_image với kích thước phù hợp
6. Chọn ít nhất một tag phù hợp 