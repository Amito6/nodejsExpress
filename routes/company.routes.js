const express = require("express");
const { createCompany } = require("../controller/company.controller");
const router = express.Router();


router.post("/",(request,response)=>{
    createCompany(request,response)
});

module.exports = router;