module.exports = app => {
    const auth = require("../controllers/auth.controller.js");
  
    var router = require("express").Router();

    //signin and signup
    router.post("/signin", auth.signin);
    router.post("/signup", auth.signup);

    //persist user by token
    router.get("/auth", auth.persist);
  
    app.use('/api', router);
  };