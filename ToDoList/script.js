//Select container
let container = document.querySelector(".container");
//Select input box
let inputBox = document.querySelector("#item");
//Select add button
let addButton = document.getElementById("addButton");
//create new element div
let div = document.createElement("div");
container.append(div);
//creating todo list array
let todos = [];
window.onload = () => {
    console.log("loaded");
    todos = JSON.parse(localStorage.getItem("todosLocalStorage")) || [];
    // localStorage.clear();
    todos.forEach(todo => appendParagraph(todo));
};
//event listener for addButton
addButton.addEventListener('click', () => {
    if (inputBox.value.trim()) {
        localStorage.clear();
        addToDoList(inputBox.value);
    }
});
//append in html code
function appendParagraph(input) {
    let para = document.createElement("p");
    para.textContent = input;
    para.style.color = "white";
    para.style.paddingTop = ".5rem";
    div.append(para);
    para.addEventListener('click', () => {
        para.style.textDecoration = "line-through";
        removeItem(input);
    });
    para.addEventListener('dblclick', () => {
        para.remove();
        removeItem(input);
    })
}
//addTodoList function to add each item
function addToDoList(input) {
    appendParagraph(input);
    addItem(input);
    addLocalStorage();
    inputBox.value = '';
}
//Fucntion to add item in todos array and local storage
function addItem(input) {
    todos.push(input);
}
//Function to store in local Storage
function addLocalStorage() {
    window.localStorage.setItem("todosLocalStorage", JSON.stringify(todos));

}
//Function to remove item from todos array
function removeItem(input) {
    if (todos.indexOf(input) > -1) {
        todos.splice(todos.indexOf(input), 1);
    }
    addLocalStorage();
}