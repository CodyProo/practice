const express = require("express");
const routes = express.Router();
const fs = require("fs");
const path = require("path");

routes.get("/data", (req, res, next) => {
    const root = process.mainModule.path;
    fs.readFile(path.resolve(root, "data.txt"), "utf8", (err, data) => {
        if (err) res.status(500).json({ message: err });
        else {
            console.log("-------------------------- result 1 ------------------");
            const result = JSON.parse(data);
            result.map((element) => console.log(element));
            console.log("-------------------------- result 2 ------------------");
            console.log(result.join(",").replace(/\,/g, " "));
            res.status(200).json({ result });
        }
    });
});
module.exports = routes;