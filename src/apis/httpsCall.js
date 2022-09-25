import axios from "axios";
import { handleError } from "reduxstate/error.js";
import { store } from "../index";
const urlPrefix = process.env.REACT_APP_BACKEND_API_BASE_URL;

export const httpCall = async (type, url, data) => {
  const requestParams = {
    method: type,
    url: `${urlPrefix}/${url}`,
  };

  if (data) {
    requestParams[type === "get" ? "params" : "data"] = data;
  }

  try {
    const response = await axios(requestParams);
    return response;
  } catch (e) {
    console.log(e.response);
    if (!url.includes("meetings/")) {
      return;
    }
    const statusCode = e.response.status;
    switch (statusCode) {
      case 400:
        store.dispatch(handleError({ status: true, message: "Bad Request" }));
        break;
      case 401:
        store.dispatch(handleError({ status: true, message: "Unauthorized" }));
        window.location.href = "/login";
        break;
      case 403:
        store.dispatch(handleError({ status: true, message: "Forbidden" }));
        break;
      case 404:
        store.dispatch(
          handleError({ status: true, message: "Resource not found" })
        );
        break;
      case 408:
        store.dispatch(
          handleError({ status: true, message: "Request Time out" })
        );
        break;
      case 500:
        store.dispatch(
          handleError({ status: true, message: "Internal Server error" })
        );
        break;
      case 503:
        store.dispatch(
          handleError({ status: true, message: "Service Unavailable" })
        );
        break;
      default:
    }
  }
};
