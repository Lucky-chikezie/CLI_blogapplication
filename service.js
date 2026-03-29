#!/usr/bin/env node

import Post from "./post.js";
import {addToDatabase, readDatabase} from "./helper.js";
import * as fs from "node:fs";

export function createPost(title, content, author ) {
    const db = readDatabase();
    const exists = db.some(post => post.title === title);
    if (exists) {
        console.log("Try a different title, that title already exists");
        return;
    }
    const  post = new Post(title, content, author);
    addToDatabase(post);
    console.log(`Thank you ${author}, your post was created successfully.`);
}

export function deletePost(id, password){

    //Dummy admin password
    const adminPassword =  "Admin123"

    if (password !== adminPassword){
        console.log("You do not have permission to delete a post.");
        return
    }
    const db = readDatabase();
    const exists = db.some(post => post.id === id);
    if (!exists) {
        console.log("Post not found.");
        return;
    }

    const updatedDb = db.filter(post => post.id !== id);

    fs.writeFileSync(
        "./db.json",
        JSON.stringify(updatedDb, null, 2),
        "utf-8"
    );

    console.log("Post deleted successfully.");

}

export function editPost(creator, searchTitle, newTitle, content) {
    const db = readDatabase();

    const index = db.findIndex(
        post =>
            post.author.toLowerCase() === creator.toLowerCase() &&
            post.title.toLowerCase() === searchTitle.toLowerCase()
    );

    if (index === -1) {
        console.log("Post not found.");
        return;
    }

    if (newTitle) db[index].title = newTitle;
    if (content) db[index].content = content;

    db[index].updated_at = new Date();

    fs.writeFileSync("./db.json", JSON.stringify(db, null, 2));

    console.log("Post updated successfully.");
}
export function displayPost(searchType, searchParameter) {
    const db = readDatabase();

    let results = [];

    if (!searchType) {
        results = db;
    } else if (searchType === "title") {
        const post = findByTitle(db, searchParameter);
        results = post ? [post] : [];
    } else if (searchType === "author") {
        results = findByAuthor(db, searchParameter);
    } else {
        console.log("Invalid search type. Use 'title' or 'author'");
        return;
    }

    if (results.length === 0) {
        console.log("No posts found.");
        return;
    }

    results.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    console.log("\n-----------");
    results.forEach(post => {
        console.log(
            `\n${post.title} was written by ${post.author} on ${
                new Date(post.created_at).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true
                })
            }`
        );
        console.log(post.content);
    });
}

function findByTitle(db, title) {
    return db.find(
        post => post.title.toLowerCase() === title.toLowerCase()
    );
}

function findByAuthor(db, author) {
    return db.filter(
        post => post.author.toLowerCase() === author.toLowerCase()
    );
}
