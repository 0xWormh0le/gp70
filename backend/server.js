const express = require("express");
const cors = require("cors");
const http = require("http");
const url = require("url");
const { getRichieRichResponse, init } = require("./clients/richieRich");
const RRML2HTML = require("./utils/RRML2HTML");

const PORT = 8081;
const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const requestPrompt = req.body.prompt;
  const response = await getRichieRichResponse(requestPrompt);
  const responseHTML = RRML2HTML(response);
  res.send(responseHTML);
});

server.on("upgrade", (request, socket, head) => {
  const pathname = url.parse(request.url).pathname;

  if (pathname === "/v1/richie-rich") {
    init(request, socket, head)
  } else {
    socket.destroy();
  }
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
