//Exercise 2
let lightBulbStatus = "Broken";
let message;
// Start coding here.
if (lightBulbStatus === "On") {
    message ="Light bulb is On."
} else if (lightBulbStatus === "Off") {
    message = "Light bulb is Off"
} else if (lightBulbStatus === "Broken") {
    message = "Light bulb is Broken."
} else message = "Please choose the correct input (On/Off/Broken)"

console.log(message)

