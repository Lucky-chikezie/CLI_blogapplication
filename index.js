#!/usr/bin/env node

import readline from "node:readline";
import {
    createPost,
    deletePost,
    editPost,
    displayPost
} from "./service.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function menu() {
    console.log(`
================ BLOG CLI ================

1. Create Post
2. View Posts
3. Edit Post
4. Delete Post
5. Exit

=========================================
`);
    rl.question("Choose an option: ", handleMenu);
}


function handleMenu(choice) {
    switch (choice) {
        case "1":
            rl.question("Title: ", title => {
                rl.question("Content: ", content => {
                    rl.question("Author: ", author => {
                        createPost(title, content, author);
                        menu();
                    });
                });
            });
            break;

        case "2":
            rl.question("Search by (title/author or leave empty): ", type => {

                if (!type) {
                    displayPost();
                    return menu();
                }

                rl.question("Enter search value: ", value => {
                    displayPost(type, value);
                    menu();
                });
            });
            break;

        case "3":
            rl.question("Creator: ", creator => {
                rl.question("Title of post to edit: ", searchTitle => {
                    rl.question("New Title (optional): ", newTitle => {
                        rl.question("New Content (optional): ", content => {
                            editPost(creator, searchTitle, newTitle, content);
                            menu();
                        });
                    });
                });
            });
            break;

        case "4":
            rl.question("Post ID: ", id => {
                rl.question("Admin Password: ", password => {
                    deletePost(id, password);
                    menu();
                });
            });
            break;

        case "5":
            console.log("Goodbye!");
            rl.close();
            break;

        default:
            console.log("Invalid option.");
            menu();
    }
}

menu();#!/usr/bin/env node

import readline from "node:readline";
import {
    createPost,
    deletePost,
    editPost,
    displayPost
} from "./service.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function menu() {
    console.log(`
================ BLOG CLI ================

1. Create Post
2. View Posts
3. Edit Post
4. Delete Post
5. Exit

=========================================
`);
    rl.question("Choose an option: ", handleMenu);
}


function handleMenu(choice) {
    switch (choice) {
        case "1":
            rl.question("Title: ", title => {
                rl.question("Content: ", content => {
                    rl.question("Author: ", author => {
                        createPost(title, content, author);
                        menu();
                    });
                });
            });
            break;

        case "2":
            rl.question("Search by (title/author or leave empty): ", type => {

                if (!type) {
                    displayPost();
                    return menu();
                }

                rl.question("Enter search value: ", value => {
                    displayPost(type, value);
                    menu();
                });
            });
            break;

        case "3":
            rl.question("Creator: ", creator => {
                rl.question("Title of post to edit: ", searchTitle => {
                    rl.question("New Title (optional): ", newTitle => {
                        rl.question("New Content (optional): ", content => {
                            editPost(creator, searchTitle, newTitle, content);
                            menu();
                        });
                    });
                });
            });
            break;

        case "4":
            rl.question("Post ID: ", id => {
                rl.question("Admin Password: ", password => {
                    deletePost(id, password);
                    menu();
                });
            });
            break;

        case "5":
            console.log("Goodbye!");
            rl.close();
            break;

        default:
            console.log("Invalid option.");
            menu();
    }
}

menu();
