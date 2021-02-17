const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
// const Role = db.role;
// // console.log(Role)
// const OrderController = require("./app/controllers/order.controller");
// const ProductController = require("./app/controllers/product.controller");
const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const run = async () => {

};

db.sequelize.sync()

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Giancarlo's application." });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/role.routes')(app);
require("./routes/garden.routes")(app)
require("./routes/seed.routes")(app)
require("./routes/plant.routes")(app)
require("./routes/plantImage.routes")(app)


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});