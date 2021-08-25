const Monitor = require("../models/monitoria-model");
const Monitoria = require("../models/monitoria-model");

// Create and Save a new Monitor
create = (req, res) => {};

// Retrieve all Monitors from the database.
findAll = (req, res) => {
    
  };

// Find a single Monitor with a monitorId
findOne = (req, res) => {};

// Update a Monitor identified by the monitorId in the request
update = (req, res) => {};

// Delete a Monitor with the specified monitorId in the request
deleteM = (req, res) => {};

// Delete all Monitors from the database.
deleteAll = (req, res) => {};

//Monitorias

createMonitoria = (req, res) => {};

updateMonitoria = (req, res) => {};

deleteMonitoria = (req, res) => {};

getMonitoria = (req, res) => {
    Monitoria.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving info."
          });
        else res.send(data);
      });
};

getMonitoriaById = (req, res) => {};

module.exports = {
  createMonitoria,
  updateMonitoria,
  deleteMonitoria,
  getMonitoria,
  getMonitoriaById,
  create,
  findAll,
  findOne,
  update,
  deleteM,
  deleteAll,
};
