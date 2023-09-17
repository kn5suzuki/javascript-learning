document.addEventListener("DOMContentLoaded", function () {
  console.log(document.getElementById("h1").textContent);

  let elements = document.getElementsByTagName("p");
  console.log(elements);

  let elements2 = document.getElementsByClassName("p");
  console.log(elements2);
});
