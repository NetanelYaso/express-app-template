const router = require("express").Router();

const {
    getCountries,
    createCountries,
    getCountriesById,
    deleteCountry,
    updateCountry
} = require("../controllers/travel-ctrl");

router.get("/",getCountries);
router.get("/byId/:id",getCountriesById);
router.post("/saveData",createCountries);
router.delete("/delete/:id",deleteCountry);
router.put("update/:id",updateCountry);

module.exports = router;


