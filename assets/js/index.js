const form = document.getElementById("form");
const btn = document.getElementById("popup");
const popUp = document.getElementById("popupid");
const removeData = document.getElementById("remove");
let data = [
  {
    agenda: "makan",
    time: new Date().getTime(),
    cek: true,
  },
];
const datas = localStorage.getItem("datas");
if (datas !== null) {
  data = JSON.parse(datas);
}

// popUp.setAttribute("style", "display : block");
const ul = document.getElementsByClassName("list").item(0);
function getData() {
  ul.innerHTML = "";
  data.forEach((event, index) => {
    const li = document.createElement("li");
    li.setAttribute("class", "li");
    const span1 = document.createElement("span");
    span1.textContent = event.agenda;
    const span2 = document.createElement("span");
    const hours = new Date(event.time).getHours();
    const minute = new Date(event.time).getMinutes();
    span2.textContent = hours + ":" + minute;
    const label = document.createElement("label");
    label.setAttribute("for", "list" + `${index + 1}`);
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "agenda");
    input.setAttribute("id", "list" + `${index + 1}`);
    label.appendChild(span1);
    label.appendChild(span2);
    li.appendChild(input);
    li.appendChild(label);
    ul.appendChild(li);
  });
}
getData();
form.addEventListener("submit", (event) => {
  ul.innerHTML = "";
  event.preventDefault();
  const write = event.target.write.value;
  if (write === "") {
    window.alert("You must fill the write text!");
  } else {
    data.push({
      agenda: write,
      time: new Date().getTime(),
      cek: false,
    });
    window.localStorage.setItem("datas", JSON.stringify(data));
  }
  getData();
  popUp.classList.toggle("hide");
  form.reset();
});
popUp.addEventListener("click", () => {
  popUp.classList.toggle("hide");
});
removeData.addEventListener("click", () => {
  localStorage.removeItem("datas");
  data = [];
  getData();
});
