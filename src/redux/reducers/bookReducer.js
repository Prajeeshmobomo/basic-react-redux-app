import * as types from '../constants/actionTypes';
export default function reducer(state = {}, action = {}) {
  switch (action.type) {

    case types.ACTION_BOOK_LIST:
      //let books = action.result && action.result.data.response ? action.result.data.response.books : [];
      let books = [{"id":1,"title":"Book1","description":"This is the sample book1","created_at":"2018-11-23T00:00:00.000Z","updated_at":"2018-11-23T00:00:00.000Z"},{"id":2,"title":"Book2","description":"Book 2 description","created_at":"2018-11-23T00:00:00.000Z","updated_at":"2018-11-23T00:00:00.000Z"}]
      return {
        ...state,
        books
      };

    default:
      return state;
  }
}

