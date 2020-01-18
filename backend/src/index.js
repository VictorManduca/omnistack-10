const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const port = 3333;

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-vpqt4.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, _ => {
  console.info(`Listen on port: ${ port }`);
});