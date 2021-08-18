const form = document.querySelector("form")
const notes = document.querySelector("#show_note")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const title = document.querySelector("input").value
    fetch("http://localhost:3000/search/notes?title=" + title).then((response) => {
        response.json().then((data) => {
            if (notes.childElementCount!=0) {
                notes.removeChild(notes.firstElementChild);
            }
            
                if (data.error) {
                    alert(data.error)
                }
                else {
                    console.log(data)
                    var div = document.createElement("div")
                    div.id = "all_notes"
                    var input = document.createElement("h2")
                    input.innerHTML = data[0].title
                    var hr = document.createElement("hr")
                    var description = document.createElement("p")
                    description.innerHTML = data[0].description
                    notes.appendChild(div)
                    div.appendChild(input)
                    div.appendChild(hr)
                    div.appendChild(description)
                }
            
        })
    })
})
