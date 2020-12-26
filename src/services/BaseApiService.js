import axios from "axios";
import * as appUtils from "../config/AppUtils";

export const BASE_URL = "http://localhost:8080/api/";
const eventEmitter = appUtils.getEventEmitter();

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export function get(payload) {
  
  return axios
    .get(BASE_URL + payload.restUrl, {
      params: (payload || {}).params || {},
      headers: headers
    })
    .then(function(response) {
      return responseHandler(response);
    })
    .catch(function(error) {
      return errorHandler(error);
    });
}

export function post(payload) {

  return axios
    .post(BASE_URL + payload.restUrl, (payload || {}).data || {}, {
      headers: headers
    })
    .then(function(response) {
      return responseHandler(response);
    })
    .catch(function(error) {
      return errorHandler(error);
    });
}

const responseHandler = response => {
  //eventEmitter.emit("handleLoading", false);
  return response.data;
};

const errorHandler = error => {
  //eventEmitter.emit("handleLoading", false);

  switch (((error || {}).response || {}).status || "") {
    case 401:
      eventEmitter.emit("handleLogout");
      break;
    case 404:
      // window.location.href = '/#/';
      break;
    default:
    // window.location.href = '/';
  }

  return {
    data: null,
    responseCode: error.response ? error.response.status: "",
    responseType: "FAILURE",
    responseMsg: error.response ? 
                  typeof error.response.data !== "string"
                  ? (error.response.data || {}).responseMsg ||
                    (error.response.data || {}).message
                  : error.response.statusText 
                : ''
  };
};
