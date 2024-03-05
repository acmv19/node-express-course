const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greeting", (name, age) => {
  //event saludo
  console.log(`hi my name is ${name} my age is ${age}`);
});

emitter.on("bye", (name) => {
  console.log(`bye ${name} see you soon!!`);
});
//after a time...
setInterval(() => {
  emitter.emit("greeting", "anamaria", 29);
}, 2000);
setInterval(() => {
  emitter.emit("bye", "anamaria");
}, 3000);
