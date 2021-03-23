const db = require("../models");
const plantImage = db.plantImage;
const User = db.user; 
const Op = db.Sequelize.Op;

// Create and Save a new PlantImage
exports.create = (req, res) => {
  console.log(req, res)
  // Validate request
  if (!req.body.plantId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a PlantImage
  const plantImage = {
    img: req.body.img,
    title: req.body.title,
    plantId: req.body.plantId,
    stage: req.body.stage,
  };

  // Save PlantImage in the database
  plantImage.create(plantImage)
    .then(data => {
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      console.log(res, err)
      err.status(500).send({
        message:
          err.message || "Some error occurred while creating the PlantImage."
      });
    });
};

// Retrieve all PlantImages from the database.
exports.findAll = (req, res) => {
    // const name = req.body.name;
    // var condition = name ? { name: `%${name}%`} : null;
    console.log("hitting this")
    plantImage.findAll( 
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
            err.message || "Some error occurred while retrieving PlantImages."
        });
      });
};

// Find a single PlantImage with an id
exports.findOne = (req, res) => {
  console.log(req.params)
    const id = req.params.id;

    plantImage.findByPk(id, {
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

// Update a PlantImage by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    plantImage.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "PlantImage was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update PlantImage with id=${id}. Maybe PlantImage was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 
          err.message || "Error updating PlantImage with id=" + id
        });
      });
};

// Delete a PlantImage with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    plantImage.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "PlantImage was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete PlantImage with id=${id}. Maybe PlantImage was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 
          err.message || "Could not delete PlantImage with id=" + id
        });
      });
};

// Delete all PlantImages from the database.
exports.deleteAll = (req, res) => {
    plantImage.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} PlantImages were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all PlantImages."
          });
        });
};

// exports.addPlantImage = (PlantImageId, userId) => {
//   return plantImage.findByPk(PlantImageId)
//     .then((PlantImage) => {
//       if (!PlantImage) {
//         console.log("PlantImage not found!");
//         return null;
//       }
//       return User.findByPk(userId).then((user) => {
//         if (!user) {
//           console.log("User not found!");
//           return null;
//         }

//         PlantImage.addPlantImage(user);
//         console.log(`>> added user id=${User.id} to PlantImage id=${PlantImage.id}`);
//         return PlantImage;
//       });
//     })
//     .catch((err) => {
//       console.log(">> Error while adding PlantImage to PlantImage: ", err);
//     });
// };

// Find all published PlantImages
exports.findAllPublished = (req, res) => {
    // plantImage.findAll({ where: { published: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving PlantImages."
    //   });
    // });
};