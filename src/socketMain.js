//Node - Http Core Module
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

//Import Our Express Application
const app = express();

//Express Config
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Create an Http Server onTop of the Express App
const server = http.createServer(app);

//Trip Data
// Data from the Trip           -    [cordinates and stuff]
// Start Time                   -    9:00am
// End Time                     -    5:00pm
// Number of Stops              -    5 stops
// Trip Date                    -    12/10/2023
// Trip Notes                   -    "test Notes"
// Planned Activities           -    ["phoneCall", "sales"]

//Create Server Connection
const io = socketio(server, {
  cors: {
    // origin: ["http://127.0.0.1:3001"],
    origin: ["http://192.168.218.145:3001", "http://127.0.0.1:3001"],
    // credentials: true,
    // methods: ["GET", "POST"],
    // transports: ["websocket", "polling"],
  },
});

const PORT = process.env.PORT || 3001;

// "http://127.0.0.1:3001"


console.log(PORT, "test");

server.listen(PORT, () => {
  console.log(`Socket.io Server is running on port ${PORT}`);
});

//1--- Server opened connection --- listen for socket connection
io.on("connection", (socket) => {
  console.log("Connected", socket.id);

  //2 ---- A socket finally connected --
  // We now have a "server-Socket" connection to a "client-Socket"

  //3 -- "Server-Socket" listen for "clientAuth" Event emmited from  "client-socket"
  socket.on("clientAuth", (token) => {
    if (token === "w7y7y7yey2ey2e7y2ye") {
      console.log("mobile connected");
      //4 if Token belongs to Mobile, connect to mobile Room
      socket.join("mobile_agents");
    } else if (token === "dy72y32yy2dy2") {
      console.log("web connected");
      //4b if Token belongs to wen, connect to Web Room
      socket.join("web_ui");
    } else {
      //4C An Unknown CLient has joined
      socket.disconnect(true);
    }
  });

  //Server-Socket listen for "TripData" Event emitted from "client-socket"
  socket.on("tripData", (data) => {
    io.to("web_ui").emit("data", data);
  });

  socket.on("disconnect", () => {
    console.log("User Has diconnected");
  });
});

// function socketMain(io, socket) {
//   //3 -- "Server-Socket" listen for "clientAuth" Event emmited from  "client-socket"
//   socket.on("clientAuth", (token) => {
//     if (token === "w7y7y7yey2ey2e7y2ye") {
//       console.log("mobile connected");
//       //4 if Token belongs to Mobile, connect to mobile Room
//       socket.join("mobile_agents");
//     } else if (token === "dy72y32yy2dy2") {
//       console.log("web connected");
//       //4b if Token belongs to wen, connect to Web Room
//       socket.join("web_ui");
//     } else {
//       //4C An Unknown CLient has joined
//       socket.disconnect(true);
//     }
//   });

//   //Server-Socket listen for "TripData" Event emitted from "client-socket"
//   socket.on("tripData", (data) => {
//     io.to("web_ui").emit("data", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Has diconnected");
//   });
// }

// module.exports = socketMain;
