const form = document.getElementById("form");
const data = [
  {
    agenda: "makan",
    time: new Date().getTime(),
    cek: true,
  },
];
data.forEach((event) => {
  //   const inputWrite = event.target.name.value;
  const label = document.createElement("label");
  label.className = "label";
  label.htmlFor = "num1";

  const span1 = document.createElement("span");
  span1.className = "agenda";

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "num1");
  input.setAttribute("name", "name-agenda");

  const span2 = document.createElement("span");
  span2.className = "name-agenda";
  span2.htmlFor = "num1";
  span2.innerHTML = agenda;

  const span3 = document.createAttribute("span");
  span3.className = "time";
  span2.innerHTML = time;

  label.appendChild("span1");
  label.appendChild("span3");
  span1.appendChild("input");
  span1.appendChild("span3");
  form.appendChild("label");
  console.log(form);
});
