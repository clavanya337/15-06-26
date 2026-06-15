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
        console.log("Initial file content:", data);
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    try {
        await fs.writeFile(
            "abc.txt",
            "more data written in abc.txt document"
        );

        const data = await fs.readFile("abc.txt", "utf-8");
        console.log("Updated file content:", data);
    } catch (err) {
        console.log("Error occurred:", err);
    }
}

main();

console.log("END");