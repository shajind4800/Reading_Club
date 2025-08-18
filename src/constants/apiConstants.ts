const HOST = "localhost"
const PORT = "8080";

export const BASE_URL = `http://${HOST}:${PORT}`;
export const MEMBERS_URL = '/members';
export const BOOKS_URL = '/books';
export const PATH_SEPARATOR = '/';
export const HTTP_METHODS = {
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  };
export const APPLICATION_JSON = "application/json";
export const getMembersApiQuery = (page: number, perPage: number) =>
    `?_sort=membershipStart&_order=asc&_page=${page}&_per_page=${perPage}`;