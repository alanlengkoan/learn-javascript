import { EventEmitter } from "events";

const emit = new EventEmitter();

emit.addListener("event", (name, age) => {
    console.info(`Halo, nama saya ${name} umur saya ${age}`);
});

emit.addListener("event", (name, age) => {
    console.info(`Halo, nama saya ${name} umur saya ${age}`);
});

// emit.addListener("test", (name) => {
//     console.info(`ini untuk test ${name}`);
// });

emit.emit("event", "alan", 24);
// emit.emit("test", "alan");