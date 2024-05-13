const WebSocket = require("ws");
const axios = require("axios");

const wsServer = new WebSocket.Server({ noServer: true });

const init = (request, socket, head) => {
  const wsClient = new WebSocket("ws://localhost:8082/v1/stream");

  wsClient.on("open", () => {
    wsServer.handleUpgrade(request, socket, head, (ws) => {
      wsServer.emit("connection", ws, request);
    });
  });

  wsServer.on("connection", (ws) => {    
    ws.on("message", (prompt) => {
      console.log("Received prompt: ", prompt);
  
      wsClient.send(prompt);
  
      wsClient.on("message", (value) => {
        ws.send(String(value));
      });
  
      wsClient.on("close", () => {
        ws.close();
      });
    });
  });
}

async function getRichieRichResponse(prompt) {
  try {
    const response = await axios.post(
      "http://localhost:8082/v1/chat/completions",
      {
        prompt,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getRichieRichResponse,
  init
};
