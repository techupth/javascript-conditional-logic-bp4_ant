//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let message;
//Start coding here
switch (lightBulbStatus) {
    case "On" :
     message = "Light Bulb is On."
     break;
    case "Off" :
     message = "Light Bulb is Off"
     break;
    case "broken" :
     message = "Light Bulb is Broken"
     break;
    default : message = "Please choose the correct input (On/Off/Broken)";
}
console.log(message)