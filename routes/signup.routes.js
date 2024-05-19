const express = require("express");
const { createToken } = require("../services/token.service");
const { postRequest } = require("../services/httpService");
const router = express.Router();


router.post("/", async (request,response)=>{
    let expiresIn = 120;
        const createTokenRes = createToken(request,expiresIn);
        const companyRes = await postRequest({
            endPoint : request.get("origin"),
            api : "/api/private/company",
            data : createTokenRes
        });

        console.log(companyRes);
        
});

module.exports = router;