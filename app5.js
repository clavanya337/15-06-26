const events = require("events");
let myEventSource = new events.EventEmitter();

myEventSource.on("someevent", (user, test) => {
    console.log("Event Emitted..", user, test);
});

myEventSource.emit("someevent", "abc", "cvr");

const fs = require("node:fs/promises");

console.log("START");

fs.readFile("abc.txt", "utf-8")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

console.log("END");