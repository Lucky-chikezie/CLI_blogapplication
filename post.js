const {getUniqueId} = require("./helper");

class Post {
    constructor( title, content, author ) {
        const now = new Date();
        this.id = getUniqueId();
        this.title = title;
        this.content = content;
        this.author = author;
        this.created_at = now;
        this.updated_at = now;
    }

}


module.exports = Post;
