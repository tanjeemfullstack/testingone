const express = require("express")

const app = express()
const mymod = require("./conn")
require("./conn")

app.use(express.json())

app.get("/", async (req, res) => {
   
    const data = await mymod.find()
    res.send(data)
    console.log(data)
})


app.post("/", async (req, res) => {
    try {
        const data = new mymod(req.body)
    await data.save()
    .then(() => {
       
        console.log("Data Sent")
        res.send(req.body)
        console.log(req.body)

    })  
    } catch (err) {
        console.log("Data Didn't Sent!")
    }
  
})

app.listen(3000, () => {
    console.log("server on")
})
