// importing required packages
import "dotenv/config";
import express, { Request, NextFunction } from "express";
import cors from "cors";
import routes from "./routes";

//ENV
const PORT = process.env.PORT || 8000;

//express server instance
const app = express();
const httpServer = require("http").Server(app);
const io = require("socket.io")(httpServer, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use(
	"/",
	(req: Request, res: any, next: NextFunction) => {
		res.io = io;
		next();
	},
	routes
);
app.use("/uploads", express.static(`${__dirname}/uploads`));

//socket event handlers
io.on("connection", function (socket: any) {
	console.log("a user connected");
});

httpServer.listen(PORT, () => {
	console.log("server is starting on port", PORT);
});
