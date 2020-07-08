const axios = require("axios");
const projectConfig = require("../util/projectConfigResolver");

const hostBaseUrl = projectConfig.hostBaseUrl;

const methods = ["PUT", "POST", "DELETE"]

exports.doGetHttpRequest = function doGetHttpRequest(ctx, requestUrl, param){
    return this.doHttpRequest(ctx, requestUrl, param, "GET");
}

exports.doPutHttpRequest = function doPutHttpRequest(ctx, requestUrl, param){
    return this.doHttpRequest(ctx, requestUrl, param, "PUT");
}


exports.doPostHttpRequest = function doPostHttpRequest(ctx, requestUrl, param){
    return this.doHttpRequest(ctx, requestUrl, param, "POST");
}

exports.doDeleteHttpRequest = function doDeleteHttpRequest(ctx, requestUrl, param){
    return this.doHttpRequest(ctx, requestUrl, param, "DELETE");
}



exports.doHttpRequest = function doHttpRequest(ctx, requestUrl, params, method) {
    if ("GET" === method){
        return axios({
            baseURL: hostBaseUrl,
            url: requestUrl,
            method: method,
            params: params
        });
    } else if (methods.includes(method)){
        return axios({
            baseURL: hostBaseUrl,
            url: requestUrl,
            method: method,
            data: params
        });
    }
};
