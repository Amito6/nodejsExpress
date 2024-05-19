const { verifyToken } = require("../services/token.service")



const createCompany = (request,response) =>{
    const tokenRes = verifyToken(request);
    if(tokenRes){
        const data = token.data;
        
    }
};

module.exports = {
    createCompany
}