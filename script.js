const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("change", function() {
  const selectedValue = dropdown.value;
  const allDivs = document.querySelectorAll("div");
  allDivs.forEach(function(div) {
    if (div.id === selectedValue) {
      div.classList.add("selected");
      div.style.display = "block";
    } else {
      div.classList.remove("selected");
      div.style.display = "none";
    }
  });
});
