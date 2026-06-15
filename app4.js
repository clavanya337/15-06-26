const events = require("events");
let myEventSource = new events.EventEmitter();
myEventSource.on("someevent",(user,test)=>{
    console.log("Event Emitted..",user,test)
})
myEventSource.emit("someevent","abc","cvr");
const fs = require("node:fs");
console.log("START");
fs.appendFile("abc.txt","\n Hello world! Upadated Again",(err)=>{
    console.log("Write Operation done");

})