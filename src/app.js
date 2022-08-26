// 1 - initialize a server object with express
// 1 - export the server object
import sampleRoute from "./services/sampleRoute/index.js";
import cors from "cors";
import express from "express";
import dotenv from "dotenv/config";

const app = express();


app.use(cors("*"))
app.use(express.json())

app.get('/test', (req, res) => {
    res.status(200).send({ message: "Test successful" });
})

app.use("/sampleRoute", sampleRoute);


export { app }
