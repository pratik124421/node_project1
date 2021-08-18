const notes=document.querySelector("#create_note")

window.onload=function (){
    fetch("http://localhost:3000/get/note").then((response)=>{
        response.json().then((data)=>{
            data.map((obj)=>{
                var div=document.createElement("div")
                div.id="all_notes"
                var input=document.createElement("h2")
                input.innerHTML=obj.title
                var hr=document.createElement("hr")
                var description=document.createElement("p")
                description.innerHTML=obj.description
                notes.appendChild(div)
                div.appendChild(input)
                div.appendChild(hr)
                div.appendChild(description)
            })
        })
    })
}
