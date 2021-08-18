const fs = require("fs")
const write_note = (file_name, note_obj) => {
    const note=filter_note(file_name,note_obj.title)
    if(note.length>0){
        return "note already exist"
    }
    else{
    const note_list = load_note(file_name)
    note_list.push(note_obj)
    console.log(note_list)
    update_note(file_name,note_list)
    return "done"
}}

const load_note = (file_name) => {
    if (fs.existsSync(file_name)) {
        note_list_string = fs.readFileSync(file_name).toString()
        return JSON.parse(note_list_string)
    }
    else {
        return []
    }
}

const update_note = (file_name, note_list) => {
    const note_data = JSON.stringify(note_list)
    fs.writeFileSync(file_name, note_data)
}

const filter_note = (file_name,title) =>{
    const note_list=load_note(file_name)
    const note=note_list.filter((obj)=>{
        return obj.title==title
    })
    if(note.length==0){
        return {error:"note not found"} 
    }
    else{
    return note
    }
}
module.exports = {
    write_note: write_note,
    load_note:load_note,
    filter_note:filter_note
}