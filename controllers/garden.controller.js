const db = require("../models");
const Garden = db.Garden;
const Seed = db.seed; 
const Op = db.Sequelize.Op;
const Plant = db.plant;
// Create and Save a new Garden
exports.create = (req, res) => {
  console.log(req, res)
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Garden
  const garden = {
    name: req.body.name,
    images: req.body.images,
    userId: req.body.userId,
  };

  // Save Garden in the database
  Garden.create(garden)
    .then(data => {
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      console.log(res, err)
      err.status(500).send({
        message:
          err.message || "Some error occurred while creating the Garden."
      });
    });
};

// Retrieve all Gardens from the database.
exports.findAll = (req, res) => {
    // const name = req.body.name;
    // var condition = name ? { name: `%${name}%`} : null;
  
    Garden.findAll( 
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
            err || "Some error occurred while retrieving Gardens."
        });
      });
};

// Find a single Garden with an id
exports.findOne = (req, res) => {
  console.log(req.params)
    const id = req.params.id;

    Garden.findByPk(id, {
      include: [
        {
          model: Seed,
        //   as: "Seeds",
          attributes: ["title"],
          through: {
            attributes: [],
          }
        },
      ],
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err
        });
      });
};

// Update a Garden by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Garden.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Garden was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Garden with id=${id}. Maybe Garden was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Garden with id=" + id
        });
      });
};

// Delete a Garden with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Garden.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Garden was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Garden with id=${id}. Maybe Garden was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Garden with id=" + id
        });
      });
};

// Delete all Gardens from the database.
exports.deleteAll = (req, res) => {
    Garden.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Gardens were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Gardens."
          });
        });
};

// exports.addGarden = (GardenId, userId) => {
//   return Garden.findByPk(GardenId)
//     .then((Garden) => {
//       if (!Garden) {
//         console.log("Garden not found!");
//         return null;
//       }
//       return User.findByPk(userId).then((user) => {
//         if (!user) {
//           console.log("User not found!");
//           return null;
//         }

//         Garden.addGarden(user);
//         console.log(`>> added user id=${User.id} to Garden id=${Garden.id}`);
//         return Garden;
//       });
//     })
//     .catch((err) => {
//       console.log(">> Error while adding Garden to Garden: ", err);
//     });
// };

// Find all published Gardens
exports.findAllPublished = (req, res) => {
    // Garden.findAll({ where: { published: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving Gardens."
    //   });
    // });
};