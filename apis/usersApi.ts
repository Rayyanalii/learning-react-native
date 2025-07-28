import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  let { data } = await axios.get(`${BASE_URL}/users`);
  if (Array.isArray(data)) return data;
  return [data];
};

export const fetchUserById = async (id: number) => {
  const { data } = await axios.get(`${BASE_URL}/users/${id}`);
  return data;
};
