module.exports = app => {
    const seeds = require("../controllers/seed.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", seeds.create);
  
    // Retrieve all seeds
    router.get("/", seeds.findAll);
  
    // Retrieve all published seeds
    // router.get("/published", seeds.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", seeds.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", seeds.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", seeds.delete);
  
    // Create a new Tutorial
    router.delete("/", seeds.deleteAll);
  
    app.use('/api/seeds', router);
  };