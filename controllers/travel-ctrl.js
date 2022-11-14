const countries = require("../model/countries-model");

const getCountries = (req, res) => {
    res.send({ message: "success", data: countries })
};
const createCountries = (req, res) => {

};
const getCountriesById = (req, res) => {
    res.send(countries[req.params.id]);
};
const deleteCountry = (req, res) => {
    const countryIndex = findCountriesIndex(req);
    const myCountry = countries.splice(countryIndex, 1);
    myCountry ? res.send(countries) : res.send("error");
};
const updateCountry = (req, res) => {

};
function findCountriesIndex(req) {
    const countryItem = countries.find(country => country.id == req.params.id);
    const startIndex = countries.indexOf(countryItem);
    return startIndex;
}
module.exports = {
    getCountries,
    createCountries,
    getCountriesById,
    deleteCountry,
    updateCountry
};