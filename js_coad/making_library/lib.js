console.log("this for lib");

function book(name,author, type){
    this.name=name;
    this.author=author;
    this.type=type;
}
function display(){

}
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", lib_form_submit);
function lib_form_submit(e){
    // console.log("u submited");
    let name= document.getElementById("bookName")
    let author=document.getElementById("Author")
    let type =document.getElementById("type")
    let book = new book(name,author,type);
    e.preventDefault();

}
