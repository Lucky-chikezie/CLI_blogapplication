# Blog CLI Application

A simple command-line blog application built with Node.js that allows users to create, view, edit, and delete blog posts using a JSON file as storage.

---

## Features

-  Create a blog post
-  View all posts or search by title/author
-  Edit existing posts
-  Delete posts (with admin password)
-  Posts sorted by latest
-  Clean console display with formatted date & time

---

## Project Structure

├── index.js # CLI entry point (user interaction)

├── service.js # Business logic (CRUD operations)

├── helper.js # Database helpers (read/write JSON)

├── post.js # Post model

├── db.json # JSON database

└── README.md


---

##  Requirements

- Node.js (v16 or higher recommended)

---

## Installation

1. Clone the repository or download the project:

`git clone https://github.com/sypha999/CLIblogInterface.git`

`cd CLIblogInterface`


---

## Running the Application

Start the CLI app with:

`node index.js`


---

## How to Use

After running the app, you’ll see a menu like:
1. Create Post
2. View Posts
3. Edit Post
4. Delete Post
5. Exit


---

### Create a Post

- Enter title, content, and author
- Title must be unique

---

### View Posts

- View all posts
- Or search by:
    - `title`
    - `author`
---

### Edit a Post

- Provide:
    - Creator name
    - Title of the post
- Optionally update:
    - Title
    - Content

---

### Delete a Post

- Provide:
    - Post ID
    - Admin password

Default password:
Admin123


---

## Database

- Stored in `db.json`
- Structure:

```json
[
  {
    "id": "uuid",
    "title": "Post Title",
    "content": "Post content",
    "author": "Author name",
    "created_at": "date",
    "updated_at": "date"
  }
]
