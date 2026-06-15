const events = require("events");

let myEventSource = new events.EventEmitter();

myEventSource.on("someevent", (user, test) => {
    console.log("Event Emitted..", user, test);
});

myEventSource.emit("someevent", "abc", "cvr");

const fs = require("node:fs");

console.log("START");

let data = fs.readFileSync("abc.txt","utf-8");
console.log(data);
console.log("END");
