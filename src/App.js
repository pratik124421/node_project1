const express = require('express')
const path = require('path')
const hbs = require("hbs")

const {home_page,insert_note,load_notes,load_all_notes,search_notes,get_note, weather,weather_form} = require("./Functions")

const views_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")
const public_path=path.join(__dirname,"../public")

app = express()

app.set("view engine", "hbs")
app.set("views", views_path)

hbs.registerPartials(partials_path)

app.use(express.static(public_path))      //this is important for loading css or other public content

app.get("/", (req, res) => home_page(req,res))

app.get("/load_note",(req,res)=> load_all_notes(req,res))

app.get("/weather_form",(req,res) => weather_form(req,res))

app.get("/search_note",(req,res)=> search_notes(req,res))

app.get("/insert/note",(req,res) => insert_note(req,res))

app.get("/get/note",(req,res) => load_notes(req,res))

app.get("/search/notes",(req,res) => get_note(req,res))

app.get("/weather",(req,res) => weather(req,res))

app.listen(port = 3000, () => {
    console.log("server started")
})