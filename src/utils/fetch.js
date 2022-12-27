import axios from "axios";
axios.defaults.baseURL = "https://6242cdd3b6734894c156b21f.mockapi.io/api/v1";

export async function getRollsApi() {
  const { data } = await axios.get("/roll");

  return data;
}
export async function getSetsApi() {
  const { data } = await axios.get("/set");

  return data;
}
