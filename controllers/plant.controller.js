const db = require("../models");
const Plant = db.plant;
const User = db.user; 
const Op = db.Sequelize.Op;

// Create and Save a new Plant
exports.create = (req, res) => {
  console.log(req, res)
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Plant
  const plant = {
    gardenId: req.body.gardenId,
    seedId: req.body.seedId,
    plantDate: req.body.plantDate,
    images: req.body.images,
  };

  // Save Plant in the database
  Plant.create(plant)
    .then(data => {
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      console.log(res, err)
      err.status(500).send({
        message:
          err.message || "Some error occurred while creating the Plant."
      });
    });
};

// Retrieve all Plants from the database.
exports.findAll = (req, res) => {
    // const name = req.body.name;
    // var condition = name ? { name: `%${name}%`} : null;
  
    Plant.findAll( 
      {
    //   include: [
    //     {
    //       model: User,
    //       as: "Users",
    //       attributes: ["id", "firstName", "lastName", "email"],
    //       through: {
    //         attributes: [],
    //       }
    //     },
    //   ],
      }
      )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Plants."
        });
      });
};

// Find a single Plant with an id
exports.findOne = (req, res) => {
  console.log(req.params)
    const id = req.params.id;

    Plant.findByPk(id, {
    //   include: [
    //     {
    //       model: Garden,
    //       as: "Gardens",
    //       attributes: ["id", "name", "lastName", "email"],
    //       through: {
    //         attributes: [],
    //       }
    //     },
    //   ],
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
      });
};

// Update a Plant by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Plant.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Plant was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Plant with id=${id}. Maybe Plant was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 
          err.message || "Error updating Plant with id=" + id
        });
      });
};

// Delete a Plant with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Plant.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Plant was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Plant with id=${id}. Maybe Plant was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 
          err.message || "Could not delete Plant with id=" + id
        });
      });
};

// Delete all Plants from the database.
exports.deleteAll = (req, res) => {
    Plant.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Plants were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Plants."
          });
        });
};

// exports.addPlant = (PlantId, userId) => {
//   return Plant.findByPk(PlantId)
//     .then((Plant) => {
//       if (!Plant) {
//         console.log("Plant not found!");
//         return null;
//       }
//       return User.findByPk(userId).then((user) => {
//         if (!user) {
//           console.log("User not found!");
//           return null;
//         }

//         Plant.addPlant(user);
//         console.log(`>> added user id=${User.id} to Plant id=${Plant.id}`);
//         return Plant;
//       });
//     })
//     .catch((err) => {
//       console.log(">> Error while adding Plant to Plant: ", err);
//     });
// };

// Find all published Plants
exports.findAllPublished = (req, res) => {
    // Plant.findAll({ where: { published: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving Plants."
    //   });
    // });
};