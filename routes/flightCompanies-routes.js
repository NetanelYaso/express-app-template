const router = require("express").Router();

const {
    getCompanies,
    addCompany,
    updateCompaniesById,
    deleteCompanyById,
    getCompanyById
} = require("../controllers/filghtCompanies-ctrl");

router.get("/", getCompanies);
router.post("/addCompany",addCompany)
router.put("/addCompanyById/:id", updateCompaniesById);
router.delete("/deleteCompanyById/:id",deleteCompanyById);
router.get("/getById/:id",getCompanyById);

module.exports = router;