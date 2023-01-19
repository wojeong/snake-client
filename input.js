let connection;
let interval;

const handleUserInput = function(key) {

  const setIntFunc = (execution) => {
    clearInterval(interval);
    interval = setInterval(execution, 50);
  };

  if (key === '\u0003') process.exit();
  if (key === "w") setIntFunc(() => connection.write("Move: up"));
  if (key === "s") setIntFunc(() => connection.write("Move: down"));
  if (key === "a") setIntFunc(() => connection.write("Move: left"));
  if (key === "d") setIntFunc(() => connection.write("Move: right"));
  if (key === "y") connection.write("Say: Sup!");
  if (key === "u") connection.write("Say: War!");
  if (key === "i") connection.write("Say: Battle?");
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};