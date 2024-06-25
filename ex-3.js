//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let message;
//Start coding here
lightBulbStatus == "On" ? (message = "Light Bulb is On."):
 lightBulbStatus == "Off" ? (message = "Light Bulb is Off."):
 lightBulbStatus == "Broken" ?  (message = "Light Bulb is Broken."):
 message = "Please chosse  the correct input (On/Off/Broken)"
 console.log(message)