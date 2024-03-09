//Adding validation for empty input fields
let btn = document.querySelector("#btn");
let inp = document.querySelector("#task");
let ul = document.querySelector(".tasks");

btn.addEventListener("click", function () {
  if (inp.value.length == 0) {
    alert("Enter a valid Task");
  } else {
    let taskItem = document.createElement("li");
    taskItem.classList.add("taskList");
    taskItem.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerHTML += `<span>
    <i class="fa-regular fa-trash-can"></i>
  </span>
`;

    delBtn.classList.add("deleteBtn");
    taskItem.appendChild(delBtn);
    ul.appendChild(taskItem);
    inp.value = "";
  }
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("Deleted!");
  }
});

// let delBtns = document.querySelectorAll(".deleteBtn");
// for (btn of delBtns) {
//   btns.addEventListener("click", function () {
//     let par = btn.parentElement;
//     par.remove();
//   });
// }
