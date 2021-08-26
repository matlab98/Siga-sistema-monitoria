const Monitor = require("../models/monitor-model");
const Monitoria = require("../models/monitoria-model");

// Create and Save a new Monitor
create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "¡Contenido no puede estar vacio!"
    });
  }
 console.log(req.body)
 const monitor = new Monitor({
  doc: req.query.doc,
  email: req.query.email,
  name: req.query.name,
  lastName: req.query.lastName,
  id_program: req.query.id_program,
  semester: req.query.semester,
  contact: req.query.contact
});

  // Save Monitoria in the database
  Monitor.create(monitor, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error."
      });
    else res.send(data);
  });
};

// Retrieve all Monitors from the database.
findAll = (req, res) => {
  Monitor.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving info."
      });
    else res.send(data);
  });
  };

// Find a single Monitor with a monitorId

// Update a Monitor identified by the monitorId in the request
update = (req, res) => {
  // Validate Request
  if (!req.query) {
    res.status(400).send({
      message: "¡Contenido no puede estar vacio!"
    });
  }

  Monitor.updateById(
    req.params.monitorId,
    new Monitor(req.query),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No encontrada monitor con id ${req.params.monitorId}.`
          });
        } else {
          res.status(500).send({
            message: "Error actualizando monitor con id " + req.params.monitorId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Monitor with the specified monitorId in the request
deleteM = (req, res) => {
  Monitor.remove(req.params.monitorId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No encontrado monitor con id ${req.params.monitorId}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo eliminar monitor con id " + req.params.monitorId
        });
      }
    } else res.send({ message: `¡Monitor fue eliminado exitosamente!` });
  });
};

// Delete all Monitors from the database.
deleteAll = (req, res) => {
  Monitor.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error."
      });
    else res.send({ message: `¡Todos los monitores fueron eliminados exitosamente!` });
  });
};

//Monitorias

createMonitoria = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "¡Contenido no puede estar vacio!"
    });
  }
  // Save Monitoria in the database
  Monitoria.create(req.query.id_Monitor, req.query.id_Monitoria, req.query.subject, req.query.salon, req.query.fecha, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Error."
      });
    else res.send(data);
  });
};

updateMonitoria = (req, res) => {
// Validate Request
if (!req.query) {
  res.status(400).send({
    message: "¡Contenido no puede estar vacio!"
  });
}

Monitoria.updateById(
  req.params.monitoriaId,
  new Monitoria(req.query),
  (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No monitoria encontrada con id ${req.params.monitoriaId}.`
        });
      } else {
        res.status(500).send({
          message: "Error actualizando monitoria con id " + req.params.monitoriaId
        });
      }
    } else res.send(data);
  }
);
};

deleteMonitoria = (req, res) => {
  Monitoria.remove(req.params.monitoriaId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No encontrado monitoria con id ${req.params.monitoriaId}.`
        });
      } else {
        res.status(500).send({
          message: "No se pudo eliminar monitoria con id " + req.params.monitoriaId
        });
      }
    } else res.send({ message: `¡Monitoria fue eliminado exitosamente!` });
  });
};

getMonitoria = (req, res) => {
    Monitoria.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Error."
          });
        else res.send(data);
      });
};

module.exports = {
  createMonitoria,
  updateMonitoria,
  deleteMonitoria,
  getMonitoria,
  create,
  findAll,
  update,
  deleteM,
  deleteAll,
};
