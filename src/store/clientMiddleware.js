import axios from 'axios';

// axios.defaults.headers.common['x-client-access-token']  = 'xxxxxxxxxx';
// axios.defaults.headers.common['Content-Type']  = 'application/json';

// axios.defaults.transformRequest.splice(0, -1, function(data, header) {
//   let accessToken =  123;
//   if(accessToken) {
//     header['x-access-token'] =  accessToken;
//   }
//   return data;
// });


function apiMiddlewareCreator(client) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, client);
    }

    const { promise, type, hideLoader, ...rest } = action;

    if (!promise) {
      return next(action);
    }

    next({ ...rest, type: `${type}` });

    const actionPromise = promise(client);

    actionPromise
      .then(result => {
        return next({ ...rest, result, type: `${type}`, originalType: type })
      })

    return actionPromise;
  };
}

const apiMiddleware = apiMiddlewareCreator(axios);

export default apiMiddleware;
