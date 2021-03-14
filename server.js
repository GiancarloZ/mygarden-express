const express = require("express");
const cors = require("cors");
const db = require("./models");
// const Role = db.role;
// // console.log(Role)
// const OrderController = require("./app/controllers/order.controller");
// const ProductController = require("./app/controllers/product.controller");
const app = express();
app.disable('x-powered-by');
var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
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