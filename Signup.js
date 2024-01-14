let next = document.querySelector(".next");
let warning = document.querySelector("#warning");
let input = document.getElementById("email");

next.addEventListener("click", () => {
  let emailValue = input.value;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailValue)) {
    warning.style.display = "none";
  } else {
    warning.style.display = "block";
    input.style.border = "1px solid red";
    
  }
});