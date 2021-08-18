const form = document.querySelector("form")
const notes = document.querySelector("#show_note")
const p = document.querySelector("p")
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const address = document.querySelector("input").value
    p.innerText="Loading..."
    fetch("http://localhost:3000/weather?address=" + address).then((response) => {
        response.json().then((data) => {
            if (notes.childElementCount!=0) {
                notes.removeChild(notes.firstElementChild);
            }
            
                if (data.error) {
                    alert(data.error)
                    p.innerText=""
                }
                else {
                    console.log(data)
                    p.innerText=""
                    var div = document.createElement("div")
                    div.id = "all_notes"
                    var input = document.createElement("h2")
                    input.innerHTML = "Temperature"
                    var hr = document.createElement("hr")
                    var description = document.createElement("p")
                    description.innerHTML = data.temperature
                    notes.appendChild(div)
                    div.appendChild(input)
                    div.appendChild(hr)
                    div.appendChild(description)
                }
            
        })
    })
})
