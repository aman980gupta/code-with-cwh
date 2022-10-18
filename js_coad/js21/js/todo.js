console.log("hellp aman")
shownote();
let addbtn = document.getElementById('add_btn');
addbtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addText');
    let note = localStorage.getItem('notes');
    if (note == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(note);
    }
    noteobj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    addText.value = "";
    console.log(note);
    shownote();
})
function shownote() {
    let note = localStorage.getItem('notes'); 
    if (note == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(note);
    }
    let html = "";
    noteobj.forEach(function (element, index) {
        html += `
        <div  class="noteCard mx-2 my-2" style="width: 18rem;">

                <div class="card-body">
                    <h5 class="card-title">Note${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick=delet(this.id) class="btn btn-primary">delet</button>
                </div>
            </div>
        `
    });
    let noteelm = document.getElementById('notes');
    if (noteobj.length != 0) {
        noteelm.innerHTML =html;
    }
    else{
        noteelm.innerHTML= `show nnothing`
    }
}
function delet(index) {
    let note = localStorage.getItem('notes');
    if (note == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(note);
    }
    noteobj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(noteobj));
    shownote();

}