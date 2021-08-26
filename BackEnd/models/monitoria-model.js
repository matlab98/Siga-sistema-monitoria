const sql = require("../db/db.js");

// constructor
// constructor
const Monitoria = function (Monitoria) {
  this.idMonitor = Monitor.idMonitor;
  this.idMonitoria = Monitor.idMonitoria;
  this.subject = Monitor.subject;
  this.salon = Monitor.salon;
  this.fecha = Monitor.fecha;
};

Monitoria.create = (idMonitor, idMonitoria, subject, salon, fecha, result) => {
  sql.query("call create_monitor_monitoria (?,?,?,?,?)", [idMonitor, idMonitoria, subject, salon, fecha], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Monitoria: ", { id: res.insertId, ...idMonitor, ...idMonitoria });
    result(null, { id: res.insertId, ...idMonitor, ...idMonitoria });
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
};

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

Monitoria.updateById = (id, Monitoria, result) => {
  sql.query(
    "update_monitor_monitoria (?, ?, ?, ?, ?)",
    [Monitoria.idMonitoria, Monitoria.idMonitor, Monitoria.subject, Monitoria.salon, Monitoria.fecha, id],
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

      console.log("Actualizada monitoria: ", { id: id, ...Monitoria });
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

    console.log("Monitoria eliminada id: ", id);
    result(null, res);
  });
};


module.exports = Monitoria;