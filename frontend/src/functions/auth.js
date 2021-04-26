import axios from "axios";

import { BASE_URL } from "./constants";

const Authenticate = async (email, password) => {
  const authResponse = await axios.post(`${BASE_URL}/user/login`, {
    email,
    password,
  });
  if (authResponse && authResponse.data) return authResponse.data;
  return null;
};

export { Authenticate };
