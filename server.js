import express from "express";
const server = express();
const port = 3000; // port 80 and 443 might be blocked

// configure serving public from /
server.use("/", express.static("public"));
server.use("/library", express.static("node_modules/bootstrap/dist/"));

// configure a route to be served via javascript callback
server.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// actually begin serving
server.listen(port, () => {
  console.log("Server listening at http://localhost:" + port);
});
