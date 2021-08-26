
import { createContext, useState, useEffect, Children } from "react";
import http from "./http-common";

const getAll = () => {
  return http.get("/allMonitoria");
};
const create = (title, data) => {
  return http.post(`/${title}?doc=${data.cedula}&email=${data.email}&name=${data.name}&lastName=${data.lastname}&id_program=${data.acaProgram}&semester=${data.semester}&contact=${data.contacto}`);
};
const update = (title, id, data) => {
  return http.put(`/${title}/${id}`, data);
};

const remove = (title, id) => {
  return http.delete(`/${title}/${id}`);
};

const removeAll = (title) => {
  return http.delete(`/${title}`);
};

const findByTitle = (title, dato) => {
  return http.get(`/${title}?title=${dato}`);
};
export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
