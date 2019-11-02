import axios from "axios";

export function getToken() {
  return localStorage.getItem("item");
}
export default function() {
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: getToken()
    }
  });
}
