export let API_BASE_URL = process.env.NODE_ENV === 'production' ? 'http://xx.x.x.xxx:xxxx/api' : 'http://xx.x.x.xxx:xxxx/api';
export let API_VERSION =  'v1';

export let API_URL = `${API_BASE_URL}/${API_VERSION}/`;

export const API_URL_BOOKS = `${API_URL}books`;

export const ACTION_BOOK_LIST = 'BOOK_LIST';