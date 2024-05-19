require("dotenv").config();
const jwt = require("jsonwebtoken");


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

module.exports = {
    createToken : create
}