const devBaseURL = "http://123.45.67.89:8000/";
const proBaseURL = "http://123.45.67.89:8000/";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
