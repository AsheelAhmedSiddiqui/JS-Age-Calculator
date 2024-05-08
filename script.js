let now = new Date();
let date = now.getDate();
let months = now.getMonth() + 1;
let year = now.getFullYear();

function calcAge() {
  let selectMonths = document.getElementById("months").value;
  let selectDate = document.getElementById("date").value;
  let selectYear = document.getElementById("year").value;
  document.getElementById("message-box").style.display = "block";
  document.getElementById("message-box").innerText = `${
    year - selectYear
  } years ${months} Months  ${date} Days`;
}

let today = new Date();
let currYear = today.getFullYear();
let span = document.getElementById("currYear");
span.innerText = currYear;