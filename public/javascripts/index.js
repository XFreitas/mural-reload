import { io } from "/socket.io-client/dist/socket.io.esm.min.js";

const socket = io(`ws://${location.hostname}:3100`);