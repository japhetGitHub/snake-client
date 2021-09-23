const { SIGINT, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE_KEY_1, MESSAGE_KEY_2 } = require('./constants');
let connection;


// setup interface to handle user input from stdin

const handleUserInput = function (key) {
  if (key === SIGINT) {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === MESSAGE_KEY_1) {
    connection.write("Say: Hahahahahahah");
  }
  if (key === MESSAGE_KEY_2) {
    connection.write("Say: yeee boii");
  }
  

};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};

module.exports = setupInput;