var url_base;

if (process.env.NODE_ENV === 'production') {
  // url_base = put the base of your API here
} else {

}

export const APIUrlBase = url_base;
export const serializeGet = (obj, prefix) => {
  var str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + '[' + p + ']' : p, v = obj[p];

      str.push(typeof v === 'object' ?
        serializeGet(v, k) :
      encodeURIComponent(k) + '=' + encodeURIComponent(v));
    }
  }
  return str.join('&');
};

// Internal Helper
const sendAPIRequest = (method = 'POST', data = null) => {
  var RequestData = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    dataType: 'json'
  };

  if (data !== null && method.toLowerCase() !== 'get' && method.toLowerCase() !== 'head') {
    RequestData.body = JSON.stringify(data);
  }

  return RequestData;
};

export const PostAPI = (URL, data, token = null) => {
  return fetch(url_base + URL, sendAPIRequest('POST', data, token)).then(
    res => res.json(),
    err => {
      throw Error('(POST) API Returned Malformed JSON');
    }
  );
};

export const PatchAPI = (URL, data, token = null) => {
  return fetch(url_base + URL, sendAPIRequest('patch', data, token)).then(
    res => res.json(),
    err => {
      throw Error('(POST) API Returned Malformed JSON');
    }
  );
};

export const GetAPI = (URL, data= null) => {
  return fetch(url_base + URL + '?' + serializeGet(data), sendAPIRequest('GET', null)).then(
    res => res.json(),
    err => {
      throw Error('API Returned Malformed JSON');
    }
  );
};

export const DeleteAPI = (URL, token = null) => {
  return fetch(url_base + URL, sendAPIRequest('DELETE', null, token, null, null)).then(
    res => res.json(),
    err => {
      throw Error('API Returned Malformed JSON');
    }
  );
};

