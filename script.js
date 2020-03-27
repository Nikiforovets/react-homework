let todoArray = [];

request();

async function request(){
    try{
        let response = await fetch("https://rn-todo-app-c27d4.firebaseio.com/todos.json");
        let data = await response.json();
        createList(data);        
    }
    catch(e){
        console.log(e);
    }
}

function createList(data){
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];    
            todoArray.push(element.title);      
        }
    }
    showTodoList();
}

function showTodoList(){
    let container = document.querySelector(".todoList");
    container.innerHTML = "";
    let i = 0;
    todoArray.forEach(element => {
        let elemCont = document.createElement("div");
        elemCont.id = "elemCont" + i;
        elemCont.className = "elemContainer";
        let elemText = document.createElement("span");
        let elemDel = document.createElement("button");
        
        elemText.innerHTML = element;
        elemDel.innerHTML = "delete";
        elemDel.addEventListener("click", deleteBtn);

        elemCont.appendChild(elemText);
        elemCont.appendChild(elemDel);
        container.appendChild(elemCont);
        i++;
    });
}

document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("newTaskField").addEventListener("keydown", event=>{
    if(event.keyCode == 13)
        addTask();
})

function addTask(){
    let value = document.getElementById("newTaskField").value;
    if(value != ""){
        todoArray.push(value);
        document.getElementById("newTaskField").value = "";
        showTodoList();
    }
}

function deleteBtn(){
    let id = this.parentNode.id;
    let iterator = id.replace("elemCont", "");
    console.log(iterator);
    todoArray.splice(iterator,1);
    showTodoList();
}
