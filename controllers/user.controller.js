const db = require("../models");
const User = db.user;
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config/passport')(passport);
const Role = db.role; 
const userRole = db.userRole;
const Op = db.Sequelize.Op;


// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    // const name = req.body.name;
    // var condition = name ? { name: `%${name}%`} : null;
  
    User.findAll( {
      include: [
        {
          model: Role,
          attributes: ["name"],
          through: {
            attributes: [],
          }
        },
      ],
    }
      )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
};

// Find a single User with an id
exports.findOne = (req, res) => {
  console.log(req.params)
    const id = req.params.id;

    User.findByPk(id, {
      include: [
        {
          model: Role,
          as: "Roles",
          attributes: ["name"],
          through: {
            attributes: [],
          }
        },
      ],
    })
      .then(data => {
        res.send(data);
        // console.log(data.getGardens())
        // console.log(data.getSeeds())
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Users were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Users."
          });
        });
};

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
// exports.addRole = (UserId, RoleId) => {
//   return User.findByPk(UserId)
//     .then((User) => {
//       if (!User) {
//         console.log("User not found!");
//         return null;
//       }
//       return Role.findByPk(RoleId).then((Role) => {
//         if (!Role) {
//           console.log("Role not found!");
//           return null;
//         }

//         User.addRole(Role);
//         console.log(`>> added Role id=${Role.id} to User id=${User.id}`);
//         return User;
//       });
//     })
//     .catch((err) => {
//       console.log(">> Error while adding Role to User: ", err);
//     });
// };

// Find all published Users
exports.findAllPublished = (req, res) => {
    // User.findAll({ where: { published: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving Users."
    //   });
    // });
};