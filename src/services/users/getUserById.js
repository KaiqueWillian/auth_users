import { api } from "../api";

async function getUserById(id) {
  return api.get(`/Users/${id}`);
}

export default getUserById;
