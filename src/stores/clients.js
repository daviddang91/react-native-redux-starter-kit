import axios from "axios/index";
import humps from "humps";
import { APPOINTMENT_X_API_KEY } from "../constants/apis";

const interCME = {
  request: [{
    success: ({ getState }, req) => {
      req.baseURL = getState().env.cmeUrl;
      req.headers.Authorization = getState().auth.token;
      return req;
    },
  }],
};

const interAppointment = {
  request: [{
    success: ({ getState }, req) => {
      req.baseURL = getState().env.appointmentUrl;
      return req;
    },
  }],
};

const cmeClient = () => (
  axios.create({
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    transformResponse: [
      data => humps.camelizeKeys(JSON.parse(data)),
    ],
  })
);

const appointmentClient = () => (
  axios.create({
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "X-Api-Key": APPOINTMENT_X_API_KEY,
    },
    transformResponse: [
      data => humps.camelizeKeys(JSON.parse(data)),
    ],
  })
);

const clients = {
  cme: {
    client: cmeClient(),
    options: {
      interceptors: interCME,
    },
  },
  appointment: {
    client: appointmentClient(),
    options: {
      interceptors: interAppointment,
    },
  },
};

export default clients;
