import express from "express";

// setup the express route
const sampleRoute = express.Router();

// set out each method for the route
sampleRoute.get("/", async (req, res) => {
    try {
        
        const task = await taskData.find({});
        if(task === null) {
            res.status(404).json({
                message: "No tasks found"
            })
        } else if (task){
            res.status(200).send({data: task})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
        
})




export default sampleRoute;