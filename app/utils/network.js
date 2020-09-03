import {env} from './environment';
import Toast from 'react-native-root-toast';

export function post(affix, data) {
  return fetch(env.server + affix, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(function (res) {
      return res.json();
    })
    .catch(function (res) {
      Toast.show(
        'Something wents wrong, please try again later.',
        env.toastConfig,
      );
      console.error('error', res);
    });
}

export function get(affix) {
  return fetch(env.server + affix, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(function (res) {
      return res.json();
    })
    .catch(function (res) {
      Toast.show(
        'Something wents wrong, please try again later.',
        env.toastConfig,
      );
      console.error('error', res);
    });
}

export function _delete(affix, data) {
  return fetch(env.server + affix, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
    body: JSON.stringify(data),
  })
    .then(function (res) {
      return res.json();
    })
    .catch(function (res) {
      Toast.show(
        'Something wents wrong, please try again later.',
        env.toastConfig,
      );
      console.error('error', res);
    });
}

export function put(affix, data) {
  return fetch(env.server + affix, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(data),
  })
    .then(function (res) {
      return res.json();
    })
    .catch(function (res) {
      Toast.show(
        'Something wents wrong, please try again later.',
        env.toastConfig,
      );
      console.error('error', res);
    });
}

export function patch(affix, data) {
  return fetch(env.server + affix, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(data),
  })
    .then(function (res) {
      return res.json();
    })
    .catch(function (res) {
      Toast.show(
        'Something wents wrong, please try again later.',
        env.toastConfig,
      );
      console.error('error', res);
    });
}
