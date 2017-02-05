import fetch from "isomorphic-fetch";

let url_base;

export const TESTING_URL = "http://localhost:8000/";

if (process.env.NODE_ENV === "production") {
  url_base = "prod_api.com"; //
} else {
  url_base = "http://localhost:8000/";
}

export const APIUrlBase = url_base;

export const serializeGet = (obj, prefix) => {
  var str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];

      str.push(typeof v === "object" ?
        serializeGet(v, k) :
      encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
};

// Internal Helper
export const sendAPIRequest = (method = "POST", data = null, token = null) => {
  var RequestData = {
    method: method.toUpperCase(),
    headers: {
      client: "{\"platform\": \"Web\"}",
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    dataType: "json"
  };

  if (token !== null) {
    RequestData.headers.Authorization = "JWT " + token;
  }

  if (data !== null && method.toLowerCase() !== "get" && method.toLowerCase() !== "head") {
    RequestData.body = JSON.stringify(data);
  }

  return RequestData;
};

const apiFetch = (url, method, data, token) => {
  return fetch(url_base + url, sendAPIRequest(method, data, token))
    .then(
      res => {
        if (res.status === 401) {
          location.reload();
        } else if (res.status >= 400) {
          return res.json();
        } else {
          return res.json();
        }
      },
      err => {
        console.log("(" + method + ") API Returned Malformed JSON");
        throw Error(err); //";
      }
    );
};

export const PostAPI = (URL, data, token = null) => {
  return apiFetch(URL, "POST", data, token);
};

export const PatchAPI = (URL, data = null, token = null) => {
  return apiFetch(URL, "PATCH", data, token);
};

export const PutAPI = (URL, data, token = null) => {
  return apiFetch(URL, "PUT", data, token);
};

export const GetPureAPI = (URL, token = null) => {
  return apiFetch(URL, "GET", null, token);
};

export const GetAPI = (URL, token = null, data = null) => {
  return fetch(url_base + URL + "?" + serializeGet(data), sendAPIRequest("get", null, token)).then(
    res => {
      if (res.status === 401) {
        location.reload();
      } else if (res.status >= 400) {
        return res.json();
      } else {
        return res.json();
      }
    },
    err => {
      throw Error(err);
    }
  );
};

export const DeleteAPI = (URL, token = null, data = null) => {
  return apiFetch(URL, "DELETE", data, token);
};