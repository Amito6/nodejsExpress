const express = require("express");
const router = express.Router();

//get request

router.get("/",(request,response)=>{
    response.render("index");
})

module.exports = router;