/* HTTP MODULE */

const http = require("http"); //create http server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my pg!, I am learning Node");
    return;
  }

  if (req.url === "/about") {
    res.end("About pg!");
    return;
  }

  res.end("Oops! try again later");
});

server.listen(3000);
