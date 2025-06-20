function addTask() {
  //Ul tag
  const taskList = document.getElementById("list");
  //Input tag
  const task = document.getElementsByName("Task")[0].value;

  //create a <li>

  const list = document.createElement("li");
  list.innerHTML = `
  <span>${task}</span>
  <button class="delete-btn">Delete</button>
  `;

  //Add in task List
  taskList.appendChild(list);

  //Erase input text
  document.getElementsByName("Task")[0].value = "";

  //delete task event listner
  list.querySelector(".delete-btn").addEventListener("click", () => {
    taskList.removeChild(list);
  });
}
