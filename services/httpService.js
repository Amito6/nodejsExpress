const ajax = require("supertest");

const postRequest = async (requestInternal) =>{
    const response = await ajax(requestInternal.endPoint).post(requestInternal.api).send({token : requestInternal.data});
    return response;
}

module.exports = { 
    postRequest
}