document.getElementById("dropdown").addEventListener("change", function() {
  const selectedValue = this.value;
  const allDivs = document.querySelectorAll("div[id^='div']");

  allDivs.forEach(div => {
    if (div.id === selectedValue) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  });
});
