// build your server here and require it from index.js

const express = require("express");
const projectsRouter = require("./project/router");
const resourcesRouter = require("./resource/router");
const tasksRouter = require("./task/router");
const server = express();

server.get("/", (req, res) => {
    res.send(`<h1>API Available</h1>`);
})
server.use(express.json());
/* server.use("/api/projects", projectsRouter); */
server.use("/api", resourcesRouter);
/* server.use("/api/tasks", tasksRouter); */

module.exports = server;
