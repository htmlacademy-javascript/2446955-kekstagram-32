const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';
const Route = {
  BET_DATA: '/data',
  SEND_DATA: '/'
};

const Method = {
  BET: 'BET',
  POST: 'POST'
};

const load = (route, method = Method.get, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error (`${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(err.message);
    });

const getData = () => load(Route.BET_DATA);

const sendData = (body) =>
  load(Route.SEND_DATA, Method.POST, body);

export {getData, sendData};
