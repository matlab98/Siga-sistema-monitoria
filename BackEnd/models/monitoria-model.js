const sql = require("../db/db.js");

// constructor
const Monitoria = function(Monitoria) {
  this.email = Monitoria.email;
  this.name = Monitoria.name;
};
/*
Monitoria.create = (newMonitoria, result) => {
  sql.query("INSERT INTO Monitorias SET ?", newMonitoria, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Monitoria: ", { id: res.insertId, ...newMonitoria });
    result(null, { id: res.insertId, ...newMonitoria });
  });
};

Monitoria.findById = (MonitoriaId, result) => {
  sql.query(`SELECT * FROM monitoria WHERE id = ${MonitoriaId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Monitoria: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Monitoria with the id
    result({ kind: "not_found" }, null);
  });
};*/

Monitoria.getAll = result => {
  sql.query("call allMonitoria()", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Monitorias: ", res);
    result(null, res);
  });
};
/*
Monitoria.updateById = (id, Monitoria, result) => {
  sql.query(
    "UPDATE onitoria SET email = ?, name = ?, active = ? WHERE id = ?",
    [Monitoria.email, Monitoria.name, Monitoria.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Monitoria with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Monitoria: ", { id: id, ...Monitoria });
      result(null, { id: id, ...Monitoria });
    }
  );
};

Monitoria.remove = (id, result) => {
  sql.query("DELETE FROM monitoria WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Monitoria with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Monitoria with id: ", id);
    result(null, res);
  });
};

Monitoria.removeAll = result => {
  sql.query("DELETE FROM Monitorias", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Monitorias`);
    result(null, res);
  });
};*/

module.exports = Monitoria;