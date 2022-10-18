console.log("hello do")
showNotes();
let addBtn = document.getElementById("addBtn");


addBtn.addEventListener("click", e => {
    let notes = localStorage.getItem("notes");
    let addText = document.getElementById("addText");
    if (notes == null) {
       noteObj = [];
    } else { noteObj = JSON.parse(noteobj) }
    noteObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(noteObj));
    addText.value = "";
    console.log("clicked")

    
    showNotes()
}
);
showNotes = () => {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteObj = [];
    } else { noteObj = JSON.parse("notes") }
    let html = "";
    noteObj.forEach((element, index) => {
        html += `
        <div class="noteCard my-2 mx-2 card " style="width:18rem;">
        <div class="card-body">
        <h5 class "card-titel"> Note- ${index + 1}</h5>
        <p class="class-titel">${element}</p>
        <button id="${index}" onClick ="deleteNote(this.id)"class="btn btn-primary"> Delete Note</button></div></div>
        `
    });
}
let noteElm = document.getElementById("notes");
    if (noteObj.length != 0) { noteElm.innerHTML = html; } else { noteElm.innerHTML = `Nothing to show! Add new N0te to show`; }

// let deleteNote = () => {
//     let notes = localStorage.getItem("notes");
//     if (notes == null) { noteObj = [] } else { noteObj = JSON.parse(notes) }
//     noteObj.splice(index, 1);
//     localStorage.setItem("notes", JSON.stringify(noteObj));

// }



