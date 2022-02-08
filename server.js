const SerialPort = require("serialport");

const port = new SerialPort("COM1", { baudRate: 9600 });

// Open errors will be emitted as an error event
port.on("error", function (err) {
  console.log("Error -", err.message);
});

// The open event is always emitted
port.on("open", function () {
  console.log("PORT opened");
});

// Read data that is available but keep the stream in "paused mode"
port.on("readable", function () {
  console.log("Data -", port.read());
});

// Switches the port into "flowing mode"
port.on("data", function (data) {
  console.log("Data -", data);
});
