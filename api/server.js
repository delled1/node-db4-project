const express = require("express")
const helmet = require("helmet")
const recipesRouter = require("./recipies/recipes-router")


const server = express()

server.use(helmet())
server.use(express.json())

server.use("/api/recipes", recipesRouter)

server.get("/", (req,res) => {
    res.send("<h1>Unit 4: Node DB4 Project")
})
module.exports = server;