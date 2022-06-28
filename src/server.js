import express  from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import sampleRoute from "./services/sampleRoute/index.js";
// import sampleRoute from "./services/sampleRoute"

const server = express();

server.use(cors("*"))
server.use(express.json())

// Routes
server.use("/sampleRoute", sampleRoute )


// PORT
const port = 3001;


server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`Server is running on port ${port}`);
});


// connect to database
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/test");

/* MONGODB VERSION
mongoose.connection.on("connected", () => {
    //checks if the connection is established
  console.log("Mongo Connected!")

  server.listen(port, () => {
    console.table(listEndpoints(server))

    console.log(`Server running on port ${port}`)
  })
})

mongoose.connection.on("error", err => {
  console.log(err)
}) 
*/