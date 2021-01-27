module.exports = app => {
    const gardens = require("../controllers/garden.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", gardens.create);
  
    // Retrieve all gardens
    router.get("/", gardens.findAll);
  
    // Retrieve all published gardens
    // router.get("/published", gardens.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", gardens.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", gardens.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", gardens.delete);
  
    // Create a new Tutorial
    router.delete("/", gardens.deleteAll);
  
    app.use('/api/gardens', router);
  };