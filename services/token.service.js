require("dotenv").config();
const jwt = require("jsonwebtoken");
const issService = require("./iss.service");


const secretKey = process.env.SECRET_KEY;

const create = (request,expiresIn) =>{
    const formData = request.body;
    const endPoint = request.get("origin");
    const api = request.originalUrl;
    const iss = endPoint+api;
    const token = jwt.sign({
        iss : iss,
        data : formData
    },secretKey,{expiresIn:expiresIn});
    return token;
}

const verify = (request) =>{
    let token = request.body.token;
    const tmp = jwt.verify(token,secretKey);
    const requestComingFrom = tmp.iss;
    if(issService.indexOf(requestComingFrom)!=-1){
        return {
            isVerified : true,
            data : tmp.data
        }
    }
    else{
        return {
            isVerified : false
        }
    }
}

module.exports = {
    createToken : create,
    verifyToken : verify
}