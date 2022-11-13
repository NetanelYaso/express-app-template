const express = require("express");
const cors = require("cors");

const app = express();
const port = 5050;

app.use(express.json({ extened: true }))
app.use(express.urlencoded({ extened: true }))
app.use(cors());

app.get("/", (req, res) => {
    res.send({ message: "it's up my brother" });
})

app.listen(port,()=>{
    console.log(`server is up ${port}`);
})