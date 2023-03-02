import api from "../useFetch";

const getAll = () => {
  return api.get("/customer/");
};
const get = (id) => {
  return api.get(`/customer/${id}`);
};
const create = (data) => {
  return api.post("/customer/", data);
};
const update = (id, data) => {
  return api.put(`/customer/${id}`, data);
};
const remove = (id) => {
  return api.delete(`/customer/${id}`);
};
const removeAll = () => {
  return api.delete(`/customer`);
};
const findByTitle = (title) => {
  return api.get(`/customer?title=${title}`);
};
const customerService = {
  getAll,
  get,
  create,
  remove,
  update,
  removeAll,
  findByTitle,
};
export default customerService;
