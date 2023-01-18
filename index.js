let image = document.getElementById ("wrapper")

let changeSize = document.getElementsByClassName ("clearRules")

changeSize.addEventListener("click", function() {
  if (image.style.height == "100%") {
    image.style.height = "0px"
  }
  else {
    image.style.height = "100%"
  }
})