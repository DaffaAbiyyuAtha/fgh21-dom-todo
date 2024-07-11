const form = document.getElementById("form");
const data = [
  {
    agenda: "makan",
    time: new Date().getTime(),
    cek: true,
  },
  {
    agenda: "minum",
    time: new Date().getTime(),
    cek: true,
  },
  {
    agenda: "tidur",
    time: new Date().getTime(),
    cek: true,
  },
];
const ul = document.getElementsByClassName("list").item(0);
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
console.log(ul);
