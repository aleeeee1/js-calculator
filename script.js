const buttons = document.querySelectorAll("button")
const display = document.querySelector('.schermo')

buttons.forEach(function(button){
  button.addEventListener("click", calc)
})

var calculated = Boolean

function calc (event) {
  var clickedValue = event.target.value
  
  if (calculated == true) {
    calculated = false
    display.value = ""
  }
  if (clickedValue !== "=") {
    if (clickedValue === "del") {
      display.value = ""
    } else if (clickedValue === "back") {
      var coso = display.value.substring(0, display.value.length - 1)
      display.value = coso
    } else {
      display.value += clickedValue
    }
  } else {
    if (display.value == "69") {
      display.value = "u simp die"
    } else {
      var calcolo = display.value.replaceAll("x", "*")
      calcolo = calcolo.replaceAll("÷", "/")
      calculated = true
      display.value = eval(calcolo)
      
    }
  }

}


