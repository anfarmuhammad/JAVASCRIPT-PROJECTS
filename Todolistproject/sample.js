const inputtodo = document.getElementById("input");
const butntodo = document.getElementById("butn");
const listtodo = document.getElementById("ul");
butntodo.addEventListener("click", function() {
    const todoapp = document.createElement("div");
    todoapp.classList.add("tododiv");

    const todlist = document.createElement("span"); 
    todlist.classList.add("todotext");
    todlist.innerText = inputtodo.value;
    todoapp.appendChild(todlist);

    const editbtn = document.createElement("button");
    editbtn.classList.add("edit");
    editbtn.innerText = "Edit";
    todoapp.appendChild(editbtn);

    const trashbtn = document.createElement("button");
    trashbtn.classList.add("trash");
    trashbtn.innerText = "Delete";
    todoapp.appendChild(trashbtn);

    listtodo.appendChild(todoapp);

    inputtodo.value = "";
});

listtodo.addEventListener("click", function(e) {
    const item = e.target;

    if (item.classList[0] === "trash") {
        const todo = item.parentElement;
        todo.remove();
    }

    if (item.classList[0] === "edit") {
        const todo = item.parentElement;
        const todotext = todo.querySelector(".todotext");

        todotext.setAttribute("contenteditable", "true"); 
        todotext.focus(); 

        todotext.style.border = "1px dashed #ccc"; 

        item.style.display = "none"; 
        const savebtn = document.createElement("button");
        savebtn.classList.add("save");
        savebtn.innerText = "Save";
        todo.appendChild(savebtn);

        const trashbtn = todo.querySelector(".trash");
        todo.appendChild(trashbtn); 
    }

    if (item.classList[0] === "save") {
        const todo = item.parentElement;
        const todotext = todo.querySelector(".todotext");

        todotext.removeAttribute("contenteditable");
        todotext.style.border = "none"; 
        
        item.style.display = "none"; 
        const editbtn = todo.querySelector(".edit");
        editbtn.style.display = "inline"; 
        
        const trashbtn = todo.querySelector(".trash");
        todo.appendChild(trashbtn); 
    }
});
