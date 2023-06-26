const wholeSection = document.querySelector(".new-section");
const sideBar = document.querySelector(".sidebar-btn");
const newPost = document.querySelector(".updated-post");
const subBtn = document.getElementById("sub-btn");
const textArea = document.getElementById("text-section");

sideBar.addEventListener("click", function togglesideBar() {
  document.body.classList.toggle("open");

  if (wholeSection.classList.contains("margin")) {
    wholeSection.style.marginLeft = "260px";
  } else {
    wholeSection.style.marginLeft = "120px";
  }

  wholeSection.classList.toggle("margin");
});

textArea.addEventListener("input", function () {
  if (textArea.value === "") {
    subBtn.style.backgroundColor = "#374151";
  } else {
    subBtn.style.backgroundColor = "#3074e0";
  }
});

function createNewPost() {
  const newContent = textArea.value;
  const newContainer = document.createElement("div");
  newContainer.classList.add("post-text");
  newContainer.classList.add("border");

  const date = new Date();
  const currentHour = date.getHours();
  const currentMinutes = date.getMinutes();

  if (newContent !== "") {
    newContainer.innerHTML = `
    <div class="user-name">
      <span class="user-image"
        ><i class="fa-solid fa-user usericon"></i
      ></span>
      <div class="new-text">
        <p class="name">Username</p>
        <p class="name" id="time-update">Updated at ${currentHour}:${currentMinutes} </p>
      </div>

      <div class="edit-delete">
      <button class="btns edit-btn">Edit</button>
      <button class="delete-btn btns">Delete</button>
      </div>

    </div>
  
    <div class="text-sub">
      <input
        type="text"
        class="text-area"
        value = "${newContent}"
        readonly
        disabled
      />
    </div>`;

    newPost.appendChild(newContainer);

    textArea.value = "";
    subBtn.style.backgroundColor = "#374151";

    const editBtn = newContainer.querySelector(".edit-btn");
    const newTextArea = newContainer.querySelector(".text-area");

    editBtn.addEventListener("click", () => {
      if (newTextArea.hasAttribute("readonly")) {
        newTextArea.removeAttribute("readonly");
        newTextArea.disabled = false;
      } else {
        newTextArea.setAttribute("readonly", "readonly");
        newTextArea.disabled = true;
      }
    });

    const btnDelete = newContainer.querySelector(".delete-btn");

    btnDelete.addEventListener("click", () => {
      newPost.removeChild(newContainer);
    });
  }
}

subBtn.addEventListener("click", createNewPost);
