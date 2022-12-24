import { api } from "../api";

async function getUsers() {
  return api.get("/Users");
}

export default getUsers;
