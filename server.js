const express = require("express");
const cors = require("cors");
const countriesRouter = require("./routes/travel-routes");
const flightsCompanies = require("./routes/flightCompanies-routes");
const app = express();
const port = 6060;

app.use(express.json({ extened: true }));
app.use(express.urlencoded({ extened: true }));
app.use(cors());
app.use("/countries", countriesRouter);
app.use("/flightCompanies",flightsCompanies);

app.get("/", (req, res) => {
    res.send({ message: "it's up my brother" });
})

app.listen(port, () => {
    console.log(`server is up ${port}`);
})