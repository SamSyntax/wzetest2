let counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 7000);

!(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = "https://weatherwidget.io/js/widget.min.js";
    fjs.parentNode.insertBefore(js, fjs);
  }
})(document, "script", "weatherwidget-io-js");

// const txt1 = document.getElementById('wprowadzenie');
// const autor = document.getElementById('autor');
// const btn1 = document.getElementById('btn');
// const out1 = document.getElementById('output');
// const out2 = document.getElementById('output2');

// function fun1() {
//     out1.innerHTML = txt1.value;
//     out2.innerHTML = autor.value;
// }

// btn1.addEventListener('click', fun1);

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "";

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);
}

showTime();

// form script
/*
window.addEventListener("load", () => {
  // Via Query parameters - GET
  const params = new URL(document.location).searchParams;
  const name = params.get("name");
  const surname = params.get("surname");

  // Via local Storage
  /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */

//   const name = sessionStorage.getItem("NAME");
//   const surname = sessionStorage.getItem("SURNAME");
/*
  document.getElementById("result-name").innerHTML = name;
  document.getElementById("result-surname").innerHTML =
    "~" + surname;
});
*/
