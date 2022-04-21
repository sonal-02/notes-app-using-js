let addbtn = document.getElementById('addNote')
let noteObj = [];
showNote();

addbtn.addEventListener('click', function () {

    let addText = document.getElementById("addText");

    if (addText.value == '') {
        alert("Please, add information in the note");
    }
    else {

        let notes = localStorage.getItem("notes");
        if (notes !== null) {
            noteObj = JSON.parse(notes);
        }

        noteObj.push(addText.value);
        localStorage.setItem("notes", JSON.stringify(noteObj));
        addText.value = '';
        showNote();

    }
})

function showNote() {
    let notes = localStorage.getItem("notes");
    if (notes !== null) {
        noteObj = JSON.parse(notes);
    }
    let html = ""
    noteObj.forEach(function (element, index) {
        html += `<div class="my-4 mx-4 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
        </div>
    </div>`
    })
    let notesAppend = document.getElementById('notes');
    if (noteObj.length != 0) {
        notesAppend.innerHTML = html;
    }
    else {
        notesAppend.innerHTML = "Nothing to show";
    }
}

function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes !== null) {
        noteObj = JSON.parse(notes);
        noteObj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(noteObj));
    }
    showNote()

}

function searchNote(){
    let searchText = document.getElementById("searchText");
    let notes = localStorage.getItem("notes");
    if (notes !== null) {
        noteObj = JSON.parse(notes);
    }
    let html = ""
    noteObj.forEach(function (element, index) {
            if (element.includes(searchText.value)){
            html += `<div class="my-4 mx-4 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
            </div>
        </div>`}
    
    })

    let notesAppend = document.getElementById('notes');
    if (noteObj.length != 0 && html != "") {
        notesAppend.innerHTML = html;
    }
    else if(html == "") {
        notesAppend.innerHTML = "Nothing to show";
    }
}

let searchText = document.getElementById("searchText");
searchText.addEventListener("input", function(){
    let notes = localStorage.getItem("notes");
    if (notes !== null) {
        noteObj = JSON.parse(notes);
    }
    let html = ""
    noteObj.forEach(function (element, index) {
            if (element.includes(searchText.value)){
            html += `<div class="my-4 mx-4 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
            </div>
        </div>`}
    
    })

    let notesAppend = document.getElementById('notes');
    if (noteObj.length != 0 && html != "") {
        notesAppend.innerHTML = html;
    }
    else if(html == "") {
        notesAppend.innerHTML = "Nothing to show";
    }
})