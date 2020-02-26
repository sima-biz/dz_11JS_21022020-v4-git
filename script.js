
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////       Calculator.    //////////////////////////
//////////////////////////////////////////////////////////////////

document.onkeydown = function(e) {
    switch (e.keyCode) {   
    case 96:
      // display.innerHTML += "0";
      //console.log(e.key, typeof e.key, "(нажат 0)");
      document.getElementById("zero").click();
      break;
    case 97:
      document.getElementById("one").click();
      break;
    case 98:
      document.getElementById("two").click();
      break;
    case 99:
      document.getElementById("three").click();
      break;
    case 100:
      document.getElementById("four").click();
      break;
    case 101:
      document.getElementById("five").click();
      break;
    case 102:
      document.getElementById("six").click();
      break;
    case 103:
      document.getElementById("seven").click();
      break;
    case 104:
      document.getElementById("eight").click();
      break;
    case 105:
      document.getElementById("nine").click();
      break;
    case 106:
      document.getElementById("multiply").click();
      break;
    case 107:
      document.getElementById("add").click();
      break;
    case 109:
      document.getElementById("subtract").click();
      break;
    case 111:
      document.getElementById("divide").click();
      break;
    case 187:
      document.getElementById("eguals").click();
      break;
    case 67:
      document.getElementById("discharge").click();
      break;
      // default: 
  }; 
};
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn");
// console.log(document.getElementsByClassName("btn"));
let operation = "";
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  // console.log(button)
  button.addEventListener("click", function() {
    switch (button.classList.contains("action")) {
      case true:
        if (button.classList.contains("operator")) {
          concatOperation(button);
        } else {
          callAction(button);
        };
        // console.log(button, "true");
        break;
      case false:
        concatOperation(button);
        // console.log(button, "false");
        break;
        // default:
    };
  });  
};
function concatOperation(button) {
  if (button.classList.contains("operator")) {
    if (!operation) {
      return;
      // console.log("Invalid")
    };
  };
  // console.log(operation, "before"); 
  // operation += button.dataset.value;
  // console.log(operation, "after");
  //display.innerHTML = operation.substr(0, 14);
  operation += button.dataset.value;
  // console.log(operation);
  if((operation.charAt(operation.length - 2) == "-" || operation.charAt(operation.length - 2) == "+" || operation.charAt(operation.length - 2) == "*" || operation.charAt(operation.length - 2) == "/") && (operation.charAt(operation.length - 1) == "-" || operation.charAt(operation.length - 1) == "+" || operation.charAt(operation.length - 1) == "*" || operation.charAt(operation.length - 1) == "/"))
  {
    operation = operation.substring(0, operation.length - 1);
    display.innerHTML = operation.substr(0, 14);
  } else {
    // operation += button.dataset.value;
    display.innerHTML = operation.substr(0, 14);
  };
// console.log(operation.match(/[-,+,*,"/"]/g));
// console.log(operation.match(/[-,+,*,"/"]/g).length);
  if(operation.match(/[-,+,*,"/"]/g).length < 2) {
    display.innerHTML = operation.substr(0, 14);
  } else {
    let lastSign = operation.slice(-1);
    // console.log(lastSign);
    operation = operation.substring(0, operation.length - 1);
    operation = eval(operation).toString() + lastSign;
    display.innerHTML = operation.substr(0, 14);
  };
};
function callAction (button) {
  switch (button.dataset.value) {
    case "calculate": 
      operation = eval(operation).toString();
      // console.log(typeof eval(operation), typeof operation);
      display.innerHTML = operation.substr(0, 14);
      // console.log(display.innerHTML);
      break;
    case "clear":
      operation = "";
      display.innerHTML = "";
      break;
  };  
};