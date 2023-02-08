const path = require("path")
const express = require("express")
const app = express()
const port = process.env.PORT || 4040

app.use(express.static("public"))

app.listen(port,()=>console.log("El servidor " + port + " se levanto"))

app.get("/", (req, res) => {res.sendFile(path.join(__dirname,"/views/home.html"))})

app.get("/register", (req, res) => {res.sendFile(path.join(__dirname,"/views/register.html"))})

app.get("/login", (req, res) => {res.sendFile(path.join(__dirname,"/views/login.html"))})



