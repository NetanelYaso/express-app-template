const flightCpompanies = require("../model/flights-company-model");

const getCompanies = (req, res) => {
    res.send({ message: "success", data: flightCpompanies });
}
const addCompany = (req, res) => {
    flightCpompanies.push(req.body.newCompany);
    res.send("company added");
}

const updateCompaniesById = (req, res) => {
    const flightCompanyIndex = findCompanyIndex(req);
    if (flightCompanyIndex > -1) {
        flightCpompanies[flightCompanyIndex] = req.body.newCompany;
        return res.send("success");
    }
    res.send("not found");
}

const deleteCompanyById = (req, res) => {
    const flightCompanyIndex = findCompanyIndex(req);
    const myCompany = flightCpompanies.splice(flightCompanyIndex, 1)
    myCompany ? res.send(flightCpompanies) : res.send("not found")
}

const getCompanyById = (req,res)=>{
res.send(flightCpompanies[req.params.id]);
}

const findCompanyIndex = (req) => {
    const flightIndex = flightCpompanies.find(company => company.id == req.params.id);
    const startIndex = flightCpompanies.indexOf(flightIndex);
    return startIndex;
}

module.exports = {
    getCompanies,
    addCompany,
    updateCompaniesById,
    deleteCompanyById,
    getCompanyById
}