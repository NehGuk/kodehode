const helloAgain = "Hello, this is a string";
const initialName = document.querySelector("#initialName");
const newName = "Sofia";
const changeNameButton = document.querySelector("#change-name-button");

changeNameButton.addEventListener("click", function() {
    initialName.textContent = newName;
    changeNameButton.textContent = "Good job";
    changeNameButton.setAttribute("disabled", "true");   
});