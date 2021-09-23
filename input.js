const { SIGINT, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGE_KEY_1, MESSAGE_KEY_2 } = require('./constants');
let connection;


const handleUserInput = function (key) {
  const messageMapping = {
    [MOVE_UP_KEY]: "Move: up",
    [MOVE_LEFT_KEY]: "Move: left",
    [MOVE_DOWN_KEY]: "Move: down",
    [MOVE_RIGHT_KEY]: "Move: right",
    [MESSAGE_KEY_1]: "Say: Hsssss",
    [MESSAGE_KEY_2]: "Say: 1 point to Slytherin House!"
  };
  
  //performs a lookup of the appropriate mapping of the key parameter in the messageMapping object
  if(Object.keys(messageMapping).includes(key)){
    connection.write(messageMapping[key])
  } else {
    console.log("invalid key - server not signalled");
  } 
  
  //SIGINT is ctrl+c input
  if (key === SIGINT) {
    process.exit();
  }
};

// setup interface to handle user input from stdin
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