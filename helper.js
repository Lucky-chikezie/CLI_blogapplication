#!/usr/bin/env node

const fs = require("fs");
const crypto = require("crypto");

function readDatabase() {
    try {
        const data = fs.readFileSync("./db.json", "utf-8");
        return JSON.parse(data);
    } catch (err) {
        console.error(err);
        return [];
    }
}

function addToDatabase(data) {
    try {
        const db = readDatabase();
        db.push(data);
        fs.writeFileSync(
            "./db.json",
            JSON.stringify(db, null, 2),
            "utf-8"
        );
        return data;
    } catch (err) {
        console.error("Error adding to database:", err);
    }
}

function getUniqueId() {
    const dbData = readDatabase();
    let uniqueId = crypto.randomUUID();
    while (dbData.some(post => post.id === uniqueId)) {
        uniqueId = crypto.randomUUID();
    }
    return uniqueId;
}

module.exports = {
    getUniqueId,
    readDatabase,
    addToDatabase,
};
