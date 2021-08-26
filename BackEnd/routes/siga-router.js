module.exports = app => {
    const sistema = require("../controllers/siga-controller.js");
  
    // Create a new monitor
    app.post("/monitor", sistema.create);
  
    // Retrieve all monitors
    app.get("/allMonitor", sistema.findAll);
  
    // Update a Monitor with monitorId
    app.put("/monitor/:monitorId", sistema.update);
  
    // Delete a Monitor with monitorId
    app.delete("/monitor/:monitorId", sistema.deleteM);
  
    // Create a new monitoria
    app.post("/monitoria", sistema.createMonitoria);

    // Retrieve all Monitoria
    app.get("/allMonitoria", sistema.getMonitoria);

    // Update a Monitoria with monitoriaId
    app.put("/monitoria/:monitoriaId", sistema.updateMonitoria);
  
    // Delete a Monitoria with monitoriaId
    app.delete("/monitoria/:monitoriaId", sistema.deleteMonitoria);
  };