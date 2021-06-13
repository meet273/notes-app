shownote();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt")
    let addtitle=document.getElementById("addtitle")
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    let myobj={
        title: addtitle.value,
        text: addtxt.value
    }
    noteobj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    addtxt.value = "";
    addtitle.value="";
    shownote();
})

function shownote() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    let html = '';
    noteobj.forEach(function (element, index) {

        html += `
     <div class="mycard mx-2 my-2" style="width: 18rem;">
        <div  class="card-body">
         <h5 class="card-title">${index+1}.${element.title}</h5>
         <p class="card-text">${element.text}</p>
         <a id=${index} onclick="deletenotes(this.id)" class="btn btn-primary">delete node</a>
     </div>
 </div>` ;  

    });
    let noteselm = document.getElementById("mynotes");
    if (noteobj.length != 0) {
        noteselm.innerHTML = html;

    }
    else {
        noteselm.innerHTML = "nothing"
    }
}
function deletenotes(index) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
noteobj.splice(index,1)
localStorage.setItem("notes",JSON.stringify(noteobj));
shownote();
}
let search = document.getElementById("searchtxt");
search.addEventListener("input",showtxt)

function showtxt() {
    let inputval=search.value.toLowerCase();
    console.log("input value",inputval);

    let txtcard=document.getElementsByClassName("mycard")
    Array.from(txtcard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtxt);
        if (cardtxt.includes(inputval)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    });
}