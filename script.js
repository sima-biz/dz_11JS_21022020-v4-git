
// //////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
// //////////////////       Calculator.    //////////////////////////
// //////////////////////////////////////////////////////////////////

// document.onkeydown = function(e) {
//     switch (e.keyCode) {   
//     case 96:
//       // display.innerHTML += "0";
//       // console.log(e.key, typeof e.key, "(нажат 0)");
//       // document.getElementById("zero").click();
//      button.dataset.value = "0"
//       break;
//     case 97:
//       document.getElementById("one").click();
//       break;
//     case 98:
//       document.getElementById("two").click();
//       break;
//     case 99:
//       document.getElementById("three").click();
//       break;
//     case 100:
//       document.getElementById("four").click();
//       break;
//     case 101:
//       document.getElementById("five").click();
//       break;
//     case 102:
//       document.getElementById("six").click();
//       break;
//     case 103:
//       document.getElementById("seven").click();
//       break;
//     case 104:
//       document.getElementById("eight").click();
//       break;
//     case 105:
//       document.getElementById("nine").click();
//       break;
//     case 106:
//       document.getElementById("multiply").click();
//       break;
//     case 107:
//       document.getElementById("add").click();
//       break;
//     case 109:
//       document.getElementById("subtract").click();
//       break;
//     case 111:
//       document.getElementById("divide").click();
//       break;
//     case 187:
//       document.getElementById("eguals").click();
//       break;
//     case 67:
//       document.getElementById("discharge").click();
//       break;
//       // default: 
//   }; 
// };
// let display = document.getElementById("display");
// let buttons = document.getElementsByClassName("btn");
// // console.log(document.getElementsByClassName("btn"));
// let operation = "";
// for (let i = 0; i < buttons.length; i++) {
//   let button = buttons[i];
//   // console.log(button)
//   button.addEventListener("click", function() {
//     switch (button.classList.contains("action")) {
//       case true:
//         if (button.classList.contains("operator")) {
//           concatOperation(button);
//         } else {
//           callAction(button);
//         };
//         // console.log(button, "true");
//         break;
//       case false:
//         concatOperation(button);
//         // console.log(button, "false");
//         break;
//         // default:
//     };
//   });  
// };
// function concatOperation(button) {
//   if (button.classList.contains("operator")) {
//     if (!operation) {
//       return;
//       // console.log("Invalid")
//     };
//   };
//   console.log(operation, "before"); 
//   operation += button.dataset.value;
//   console.log(operation, "after", typeof operation);
//   //display.innerHTML = operation.substr(0, 14);
//   // operation += button.dataset.value;
//   // console.log(operation);
//   if((operation.charAt(operation.length - 2) == "-" || operation.charAt(operation.length - 2) == "+" || operation.charAt(operation.length - 2) == "*" || operation.charAt(operation.length - 2) == "/") && (operation.charAt(operation.length - 1) == "-" || operation.charAt(operation.length - 1) == "+" || operation.charAt(operation.length - 1) == "*" || operation.charAt(operation.length - 1) == "/"))
//   {
//     operation = operation.substring(0, operation.length - 1);
//     display.innerHTML = operation.substr(0, 14);
//   } else {
//     // operation += button.dataset.value;
//     display.innerHTML = operation.substr(0, 14);
//   };
// // console.log(operation.match(/[-,+,*,"/"]/g));
// // console.log(operation.match(/[-,+,*,"/"]/g).length);

//   if(operation.match(/["-", "+", "*", "/"]/g).length < 2) {
//     display.innerHTML = operation.substr(0, 14);
//   } else {
//     let lastSign = operation.slice(-1);
//     // console.log(lastSign);
//     operation = operation.substring(0, operation.length - 1);
//     operation = eval(operation).toString() + lastSign;
//     display.innerHTML = operation.substr(0, 14);
//   };
// };



















// function callAction (button) {
//   switch (button.dataset.value) {
//     case "calculate": 
//       operation = eval(operation).toString();
//       // console.log(typeof eval(operation), typeof operation);
//       display.innerHTML = operation.substr(0, 14);
//       // console.log(display.innerHTML);
//       break;
//     case "clear":
//       operation = "";
//       display.innerHTML = "";
//       break;
//   };  
// };





//////////////////////////////////////////////////////////////////

// document.onkeydown = function(e) {
//   function jjj (j) {
//     document.getElementById(j).click();
//   }
//   switch (e.keyCode) {   
//   case 96:
//     // display.innerHTML += "0";
//     // console.log(e.key, typeof e.key, "(нажат 0)");
//     // document.getElementById("zero").click();
//     jjj("zero")
//     break;
//   case 97:
//     document.getElementById("one").click();
//     break;
//   case 98:
//     document.getElementById("one").click();
//     // document.getElementById("two").click();
//     break;
//   case 99:
//     document.getElementById("three").click();
//     break;
//   case 100:
//     document.getElementById("four").click();
//     break;
//   case 101:
//     document.getElementById("five").click();
//     break;
//   case 102:
//     document.getElementById("six").click();
//     break;
//   case 103:
//     document.getElementById("seven").click();
//     break;
//   case 104:
//     document.getElementById("eight").click();
//     break;
//   case 105:
//     document.getElementById("nine").click();
//     break;
//   case 106:
//     document.getElementById("multiply").click();
//     break;
//   case 107:
//     document.getElementById("add").click();
//     break;
//   case 109:
//     document.getElementById("subtract").click();
//     break;
//   case 111:
//     document.getElementById("divide").click();
//     break;
//   case 187:
//     document.getElementById("eguals").click();
//     break;
//   case 67:
//     document.getElementById("discharge").click();
//     break;
//     // default: 
//   }; 
// };
// let display = document.getElementById("display");
// let buttons = document.getElementsByClassName("btn");
// // console.log(document.getElementsByClassName("btn"));
// let operation = "";
// for (let i = 0; i < buttons.length; i++) {
// let button = buttons[i];
// // console.log(button)
// button.addEventListener("click", function() {
//   switch (button.classList.contains("action")) {
//     case true:
//       if (button.classList.contains("operator")) {
//         concatOperation(button);
//       } else {
//         callAction(button);
//       };
//       // console.log(button, "true");
//       break;
//     case false:
//       concatOperation(button);
//       // console.log(button, "false");
//       break;
//       // default:
//   };
// });  
// };
// function concatOperation(button) {
// if (button.classList.contains("operator")) {
//   if (!operation) {
//     return;
//     // console.log("Invalid")
//   };
// };
// console.log(operation, "before"); 
// operation += button.dataset.value;
// console.log(operation, "after", typeof operation);



















// //display.innerHTML = operation.substr(0, 14);
// // operation += button.dataset.value;
// // console.log(operation);
// if((operation.charAt(operation.length - 2) == "-" || operation.charAt(operation.length - 2) == "+" || operation.charAt(operation.length - 2) == "*" || operation.charAt(operation.length - 2) == "/") && (operation.charAt(operation.length - 1) == "-" || operation.charAt(operation.length - 1) == "+" || operation.charAt(operation.length - 1) == "*" || operation.charAt(operation.length - 1) == "/"))
// {
//   operation = operation.substring(0, operation.length - 1);
//   display.innerHTML = operation.substr(0, 14);
// } else {
//   // operation += button.dataset.value;
//   display.innerHTML = operation.substr(0, 14);
// };
// // console.log(operation.match(/[-,+,*,"/"]/g));
// // console.log(operation.match(/[-,+,*,"/"]/g).length);


// // console.log(evaliss(operation), "ggggg1")





// if(operation.substr(1).match(/[-,+,*,"/"]/g).length < 2) {
//   // if((operation.substr(1).indexOf("+") > -1 || operation.substr(1).indexOf("-") > -1 || operation.substr(1).indexOf("*") > -1 || operation.substr(1).indexOf("/") > -1) && (operation.substr(1).indexOf("+") > -1 || operation.substr(1).indexOf("-") > -1 || operation.substr(1).indexOf("*") > -1 || operation.substr(1).indexOf("/") > -1)) {
// // if((operation.substr(1).includes("+") || operation.substr(1).includes("-") || operation.substr(1).includes("*") > -1 || operation.substr(1).includes("/")) && (operation.substr(1).includes("+") || operation.substr(1).includes("-") || operation.substr(1).includes("*") || operation.substr(1).includes("/")) && (operation.substr(1).includes("+") || operation.substr(1).includes("-") || operation.substr(1).includes("*") || operation.substr(1).includes("/"))) {  

//   display.innerHTML = operation.substr(0, 14);
// } else {
//   let lastSign = operation.slice(-1);
//   // console.log(lastSign);
//   operation = operation.substring(0, operation.length - 1);
//   // console.log(evaliss(operation), "ggggg2")
//   operation = operationAction(operation).toString() + lastSign;
//   display.innerHTML = operation.substr(0, 14);
// };

// };





// function operationAction (element) {
//   let result
//   if (element.charAt(0) !== "-") {
//     if (element.indexOf("+") > -1) {
//     element = element.split("+")
//     // console.log(element[0], element[1], typeof Number(element[1]))
//     result = Number(element[0]) + Number(element[1])
//     }
//     if (element.indexOf("-") > -1) {
//       element = element.split("-")
//       // console.log(element)
//       result = Number(element[0]) - Number(element[1])
//       }
//       if (element.indexOf("*") > -1) {
//         element = element.split("*")
//         result = Number(element[0]) * Number(element[1])
//         }
//         if (element.indexOf("/") > -1) {
//           element = element.split("/")
//           result = Number(element[0]) / Number(element[1])
//           }

//   } else {
//     element = element.substring(1)
//     if (element.indexOf("+") > -1) {
//       element = element.split("+")
//       // console.log(element[0], element[1], typeof Number(element[1]))
//       result = ( - (Number(element[0]))) + Number(element[1])
//       }
//       if (element.indexOf("-") > -1) {
//         element = element.split("-")
//         result = ( - (Number(element[0]))) - Number(element[1])
//         }
//         if (element.indexOf("*") > -1) {
//           element = element.split("*")
//           result = ( - (Number(element[0]))) * Number(element[1])
//           }
//           if (element.indexOf("/") > -1) {
//             element = element.split("/")
//             result = ( - (Number(element[0]))) / Number(element[1])              
//            } 
//   }
//   return result  
// }

// function callAction (button) {
// switch (button.dataset.value) {
//   case "calculate": 
//     operation = operationAction(operation).toString();
//     // console.log(typeof eval(operation), typeof operation);
//     display.innerHTML = operation.substr(0, 14);
//     // console.log(display.innerHTML);
//     break;
//   case "clear":
//     operation = "";
//     display.innerHTML = "";
//     break;
// };  
// };



/////////////////////////////////////////////////////////////////////////////////////////


// document.onkeydown = function(e) {
//   function jjj (j) {
//     document.getElementById(j).click();
//   }
//   switch (e.keyCode) {   
//   case 96:
//     // display.innerHTML += "0";
//     // console.log(e.key, typeof e.key, "(нажат 0)");
//     // document.getElementById("zero").click();
//     jjj("zero")
//     break;
//   case 97:
//     document.getElementById("one").click();
//     break;
//   case 98:
//     document.getElementById("one").click();
//     // document.getElementById("two").click();
//     break;
//   case 99:
//     document.getElementById("three").click();
//     break;
//   case 100:
//     document.getElementById("four").click();
//     break;
//   case 101:
//     document.getElementById("five").click();
//     break;
//   case 102:
//     document.getElementById("six").click();
//     break;
//   case 103:
//     document.getElementById("seven").click();
//     break;
//   case 104:
//     document.getElementById("eight").click();
//     break;
//   case 105:
//     document.getElementById("nine").click();
//     break;
//   case 106:
//     document.getElementById("multiply").click();
//     break;
//   case 107:
//     document.getElementById("add").click();
//     break;
//   case 109:
//     document.getElementById("subtract").click();
//     break;
//   case 111:
//     document.getElementById("divide").click();
//     break;
//   case 187:
//     document.getElementById("eguals").click();
//     break;
//   case 67:
//     document.getElementById("discharge").click();
//     break;
//     // default: 
//   }; 
// };


// document.onkeydown = function(event) {
//   if (event.keyCode > 95 && event.keyCode < 108 || event.keyCode == 109 || event.keyCode == 111 || event.keyCode == 13) {
//     if (document.getElementByIdAll().click() == 97
//   }
// }
//////////////////////////////////////

document.onkeydown = function(e) {
  function jjj (j) {
    document.getElementById(j).click();
  }
  console.log(e.key)
  switch (e.keyCode) {   
  case 96: jjj("zero")
     break;
  case 97: jjj("one")
    break;
  case 98: jjj("two")
    break;
  case 99: jjj("three")
    break;
  case 100: jjj("four")
    break;
  case 101: jjj("five")
    break;
  case 102: jjj("six")
    break;
  case 103: jjj("seven")
    break;
  case 104: jjj("eight")
    break;
  case 105: jjj("nine")
    break;
  case 106: jjj("multiply")
    break;
  case 107: jjj("add")
    break;
  case 109: jjj("subtract")
    break;
  case 111: jjj("divide")
    break;
  case 187: jjj("eguals")
    break;
  case 67: jjj("discharge")
    break; 
  }; 
};
let display = document.getElementById("display");
let buttons = document.getElementsByClassName("btn");

let operation = "";
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  // console.log(button.classList)
  button.addEventListener("click", function() {
    switch (button.classList.contains("action")) {
      case true:
        if (button.classList.contains("operator")) {
          concatOperation(button);
        } else {
          callAction(button);
        };
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
  operation += button.dataset.value;
  // console.log(operation, "after", typeof operation);
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
  if(operation.substr(1).match(/[-,+,*,"/"]/g).length < 2) { 
    display.innerHTML = operation.substr(0, 14);
  } else {
    let lastSign = operation.slice(-1);
    // console.log(lastSign);
    operation = operation.substring(0, operation.length - 1);
    // console.log(evaliss(operation), "ggggg2")
    operation = operationAction(operation).toString() + lastSign;
    display.innerHTML = operation.substr(0, 14);
  };
};


function operationAction (element) {
  let result
  if (element.charAt(0) !== "-") {
    if (element.indexOf("+") > -1) {
    element = element.split("+");
    // console.log(element[0], element[1], typeof Number(element[1]))
    result = Number(element[0]) + Number(element[1]);
    };
    if (element.indexOf("-") > -1) {
      element = element.split("-");
      // console.log(element)
      result = Number(element[0]) - Number(element[1]);
      };
      if (element.indexOf("*") > -1) {
        element = element.split("*");
        result = Number(element[0]) * Number(element[1]);
        };
        if (element.indexOf("/") > -1) {
          element = element.split("/");
          result = Number(element[0]) / Number(element[1]);
          };

  } else {
    element = element.substring(1);
    if (element.indexOf("+") > -1) {
      element = element.split("+");
      // console.log(element[0], element[1], typeof Number(element[1]))
      result = ( - (Number(element[0]))) + Number(element[1]);
      };
      if (element.indexOf("-") > -1) {
        element = element.split("-");
        result = ( - (Number(element[0]))) - Number(element[1]);
        };
        if (element.indexOf("*") > -1) {
          element = element.split("*");
          result = ( - (Number(element[0]))) * Number(element[1]);
          };
          if (element.indexOf("/") > -1) {
            element = element.split("/");
            result = ( - (Number(element[0]))) / Number(element[1]);              
           }; 
  };
  return result  
};

function callAction (button) {
  switch (button.dataset.value) {
    case "calculate": 
      operation = operationAction(operation).toString();
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