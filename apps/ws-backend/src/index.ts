import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080});

console.log("server started")

wss.on("connection" , (ws) => {
    ws.on("message", (message)=> {
        ws.send("message from the server.")
    })
})