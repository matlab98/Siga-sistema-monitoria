const sql = require("../db/db");

// constructor
const Monitor = function(Monitor) {
  this.email = Monitor.email;
  this.name = Monitor.name;
};

Monitor.create = (newMonitor, result) => {
  sql.query("INSERT INTO Monitors SET ?", newMonitor, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Monitor: ", { id: res.insertId, ...newMonitor });
    result(null, { id: res.insertId, ...newMonitor });
  });
};

Monitor.findById = (MonitorId, result) => {
  sql.query(`SELECT * FROM Monitors WHERE id = ${MonitorId}`, (err, res) => {
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

Monitor.getAll = result => {
  sql.query("SELECT * FROM Monitors", (err, res) => {
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
    "UPDATE Monitors SET email = ?, name = ?, active = ? WHERE id = ?",
    [Monitor.email, Monitor.name, Monitor.active, id],
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
  sql.query("DELETE FROM Monitors WHERE id = ?", id, (err, res) => {
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

Monitor.removeAll = result => {
  sql.query("DELETE FROM Monitors", (err, res) => {
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