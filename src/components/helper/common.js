import Cookies from "js-cookie";

export const setCookies = (key, value, options = { expires: 7 }) =>
  Cookies.set(key, value, options);

export const getCookies = (key) => Cookies.get(key);
