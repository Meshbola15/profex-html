const button = document.getElementById("btn");
const link = document.getElementById("links");

button.addEventListener("click", function () {
  link.classList.toggle("active");
  button.classList.toggle("active");
});


