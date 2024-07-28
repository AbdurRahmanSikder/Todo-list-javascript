const inputBox = document.querySelector(".inp");
const listContainer = document.querySelector(".Task");
const btn = document.querySelector('.btn');
function addTask() {
    console.log(inputBox.value);
    if (inputBox.value === '') {
        alert("you must contain something");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    save();
    inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle("check");
    }
    else if (e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
    }
    save();
})

btn.addEventListener('click', () => {
    addTask();
}, false);

function save() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function show() {
    listContainer.innerHTML = localStorage.getItem("data");
}
show();