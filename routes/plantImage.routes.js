module.exports = app => {
    const plantImages = require("../controllers/plantImage.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", plantImages.create);
  
    // Retrieve all plants
    router.get("/", plantImages.findAll);
  
    // Retrieve all published plants
    // router.get("/published", plants.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", plantImages.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", plantImages.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", plantImages.delete);
  
    // Create a new Tutorial
    router.delete("/", plantImages.deleteAll);
  
    app.use('/api/plantimages', router);
  };