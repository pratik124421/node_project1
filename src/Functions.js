const path = require("path")

const file = path.join(__dirname, "../public/files/note.txt")

const { write_note, load_note, filter_note } = require("./WriteFile")
const { Geocode } = require("./Geocode")
const { Weather } = require("./Weather")
const home_page = (req, res) => {
    res.render("Home", {
        title: "Home",
        name: "Pratik"
    })
}

const insert_note = (req, res) => {
    const note = {
        title: req.query.title,
        description: req.query.description
    }

    const status = write_note(file, note)
    res.send({ status: status })
}

const load_notes = (req, res) => {
    res.send(load_note(file))
}

const get_note = (req, res) => {
    const title = req.query.title
    console.log(title)
    res.send(filter_note(file, title))
}

const load_all_notes = (req, res) => {
    res.render("All_notes", {
        title: "Notes",
        name: "Pratik"
    })
}

const search_notes = (req, res) => {
    res.render("Load_note", {
        title: "Notes",
        name: "Pratik"
    })
}

const weather_form = (req,res) => {
    res.render("weather_form",{
        title: "Weather",
        name: "Pratik"
    })
}

const weather = (req, res) => {
    Geocode(req.query.address, (data, error) => {
        if (error) {
            return res.send({ error: error })
        }

        Weather(data, (data, error) => {
            if (error) {
                return res.send({ error: error })
            }

            res.send(data)
            })

        }
    )
}
module.exports = {
    home_page: home_page,
    insert_note: insert_note,
    load_notes: load_notes,
    load_all_notes: load_all_notes,
    search_notes: search_notes,
    get_note: get_note,
    weather: weather,
    weather_form:weather_form
}