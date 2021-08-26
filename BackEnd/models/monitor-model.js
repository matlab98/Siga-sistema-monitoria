const sql = require("../db/db");

// constructor
const Monitor = function (Monitor) {
  this.doc = Monitor.doc;
  this.email = Monitor.email;
  this.name = Monitor.name;
  this.lastName = Monitor.lastName;
  this.id_program = Monitor.id_program;
  this.semester = Monitor.semester;
  this.contact = Monitor.contact;
};

Monitor.create = (newMonitor, result) => {
  sql.query(
    "call create_monitor (?,?,?,?,?,?,?)",
    [
      newMonitor.doc,
      newMonitor.email,
      newMonitor.name,
      newMonitor.lastName,
      newMonitor.id_program,
      newMonitor.semester,
      newMonitor.contact,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Monitor: ", { id: res.insertId, ...newMonitor });
      result(null, { id: res.insertId, ...newMonitor });
    }
  );
};

Monitor.findById = (MonitorId, result) => {
  sql.query(`SELECT * FROM monitor WHERE id = ${MonitorId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Monitor: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Monitor with the id
    result({ kind: "not_found" }, null);
  });
};

Monitor.getAll = (result) => {
  sql.query("call allMonitor()", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Monitors: ", res);
    result(null, res);
  });
};

Monitor.updateById = (id, Monitor, result) => {
  sql.query(
    "UPDATE monitor SET doc = ?, email = ?, name = ?, lastname = ?, id_program = ?, semester = ?, contact = ? WHERE id = ?",
    [Monitor.doc, Monitor.email, Monitor.name, Monitor.lastName, Monitor.id_program, Monitor.semester, Monitor.contact, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Monitor with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Monitor: ", { id: id, ...Monitor });
      result(null, { id: id, ...Monitor });
    }
  );
};

Monitor.remove = (id, result) => {
  sql.query("DELETE FROM monitor WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Monitor with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Monitor with id: ", id);
    result(null, res);
  });
};

Monitor.removeAll = (result) => {
  sql.query("DELETE FROM monitor", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Monitors`);
    result(null, res);
  });
};

module.exports = Monitor;
