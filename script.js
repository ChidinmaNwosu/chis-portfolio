//sidemenu
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

//contact form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx60sbBNmcNt2_1BFQiDMLzG4IoLtQ25l4AAG9__F2SGWMak8HptngadWhZIjPndCF3iQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
        msg.innerHTML = "Message sent successfully!";
        setTimeout(function(){
            msg.innerHTML = "";
        }, 5000);
        form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});


