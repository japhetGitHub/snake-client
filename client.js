const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write('Name: JKE');
  });
  conn.on("connect", () => {
    // setTimeout(()=> {
    //   conn.write('Move: up');
    //   setTimeout(()=> {
    //     conn.write('Move: up');
        
    //   }, 50);
    // }, 50);
    // setInterval(()=> {
    //   conn.write('Move: up');
    // }, 250);
    // conn.write('Move: up');
    // conn.write('Move: up');
    // conn.write('Move: up');
  });
  conn.on("data", (data) => {
    // code that does something when receiving data
    console.log("incoming data:", data);
  });

  return conn;
};

module.exports = connect;