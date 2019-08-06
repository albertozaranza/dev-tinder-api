import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
import cors from "cors";

const server = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${
    process.env.DB_PASSWORD
  }@cluster0-ykxxn.gcp.mongodb.net/${
    process.env.DB_NAME
  }?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3001);
