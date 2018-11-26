import * as types from '../constants/actionTypes';
// export function getBooks() {
//   const api = types.API_URL_BOOKS;
//   return dispatch => {
//     return dispatch({
//       type: types.ACTION_BOOK_LIST,
//       promise: client => client.get(api).then((data) => {
//         return data;
//       }),
//     });
//   };
// }

export function getBooks() {
  return dispatch => {
    return dispatch({
      type: types.ACTION_BOOK_LIST,
    });
  };
}
