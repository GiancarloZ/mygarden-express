const db = require("../models");
const Seed = db.seed;
const Garden = db.garden; 
const Op = db.Sequelize.Op;
const User = db.user;
const Plant = db.plant;
// Create and Save a new Seed
exports.create = (req, res) => {
  console.log(req, res)
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Title can not be empty!"
    });
    return;
  }

  // Create a Seed
  const seed = {
    title: req.body.title,
    scientificName: req.body.scientificName,
    images: req.body.images,
    summary: req.body.summary,
    daysToSprout: req.body.daysToSprout,
    daysToMaturity: req.body.daysToMaturity,
    heightAtMaturity: req.body.heightAtMaturity,
    rowSpacing: req.body.rowSpacing,
    plantSpacing: req.body.plantSpacing,
    plantingDepth: req.body.plantingDepth,
    description: req.body.description,
    howToGrow: req.body.howToGrow,
    company: req.body.company,
    UserId: req.body.userId
  };

  // Save Seed in the database
  Seed.create(seed)
    .then(data => {
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      console.log(res, err)
      err.status(500).send({
        message:
          err.message || "Some error occurred while creating the Seed."
      });
    });
};

// Retrieve all Seeds from the database.
exports.findAll = (req, res) => {
    // const name = req.body.name;
    // var condition = name ? { name: `%${name}%`} : null;
   
    Seed.findAll( 
      { 
        include: User
          // {
          //   model: User,
          //   attributes: ["email"],
          //   through: {
          //     attributes: [],
          //   }
          // },
      }
      )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Seeds."
        });
      });
};

// Find a single Seed with an id
exports.findOne = (req, res) => {
  console.log(req.params)
    const id = req.params.id;

    Seed.findByPk(id, {
      // include: User
      // {
      //   model: User,
      //   attributes: ["email"],
      //   through: {
      //     attributes: [],
      //   }
      // },
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

// Update a Seed by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Seed.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Seed was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Seed with id=${id}. Maybe Seed was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 
          err.message || "Error updating Seed with id=" + id
        });
      });
};

// Delete a Seed with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Seed.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Seed was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Seed with id=${id}. Maybe Seed was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: 
          err.message || "Could not delete Seed with id=" + id
        });
      });
};

// Delete all Seeds from the database.
exports.deleteAll = (req, res) => {
    Seed.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Seeds were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Seeds."
          });
        });
};

// exports.addSeed = (SeedId, userId) => {
//   return Seed.findByPk(SeedId)
//     .then((Seed) => {
//       if (!Seed) {
//         console.log("Seed not found!");
//         return null;
//       }
//       return User.findByPk(userId).then((user) => {
//         if (!user) {
//           console.log("User not found!");
//           return null;
//         }

//         Seed.addSeed(user);
//         console.log(`>> added user id=${User.id} to Seed id=${Seed.id}`);
//         return Seed;
//       });
//     })
//     .catch((err) => {
//       console.log(">> Error while adding Seed to Seed: ", err);
//     });
// };

// Find all published Seeds
exports.findAllPublished = (req, res) => {
    // Seed.findAll({ where: { published: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving Seeds."
    //   });
    // });
};