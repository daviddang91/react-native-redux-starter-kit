import axios from "axios/index";
import humps from "humps";
import { AUTH_URL } from "../constants/apis";

const authClient = (baseUrl) => (
  axios.create({
    baseURL: baseUrl,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    transformResponse: [
      data => humps.camelizeKeys(JSON.parse(data)),
    ],
  })
);

const clients = {
  default: {
    client: authClient(AUTH_URL),
  },
};

export default clients;
