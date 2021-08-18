console.log("javascript loaded..")

const form=document.querySelector("form")
const loading=document.querySelector("h3")



form.addEventListener("submit",(event)=>{
    event.preventDefault()
    loading.innerHTML="Loading..."
    const title=document.querySelector("input")
    const description=document.querySelector("textarea")
    fetch("http://localhost:3000/insert/note?title="+title.value+"&description="+description.value).then((response)=>{
    response.json().then((data)=>{
        loading.innerHTML=""
        title.value=""
        description.value=""
        alert("status= "+data.status)
    })
})
})


