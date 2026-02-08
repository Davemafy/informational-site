const http = require("http");
const fs = require("fs");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url === "/" || req.url === "index.html") {
    res.end(fs.readFileSync("index.html", "utf8"));
  } else if (req.url === "/about" || req.url === "about.html") {
    res.end(fs.readFileSync("about.html", "utf8"));
  } else if (req.url === "/contact" || req.url === "contact.html") {
    res.end(fs.readFileSync("contact.html", "utf8"));
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(fs.readFileSync("404.html", "utf8"));
  }
});

server.listen(8000);
