const db = require("../models");
const Role = db.role;
const User = db.user; 
const Op = db.Sequelize.Op;
// Create and Save a new Role
exports.create = (req, res) => {
  console.log(req, res)
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Role
  const role = {
    name: req.body.name,
  };

  // Save Role in the database
  Role.create(role)
    .then(data => {
      console.log(data)
      res.send(data);
    })
    .catch(err => {
      console.log(res, err)
      err.status(500).send({
        message:
          err.message || "Some error occurred while creating the Role."
      });
    });
};

// Retrieve all Roles from the database.
exports.findAll = (req, res) => {
    // const name = req.body.name;
    // var condition = name ? { name: `%${name}%`} : null;
  
    Role.findAll( 
      {
      include: [
        {
          model: User,
          as: "Users",
          attributes: ["id", "firstName", "lastName", "email"],
          through: {
            attributes: [],
          }
        },
      ],
      }
      )
      .then(data => {
        console.log(data)
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Roles."
        });
      });
};

// Find a single Role with an id
exports.findOne = (req, res) => {
  console.log(req.params)
    const id = req.params.id;

    Role.findByPk(id, {
      include: [
        {
          model: User,
          as: "Users",
          attributes: ["id", "firstName", "lastName", "email"],
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
          message: err.message
        });
      });
};

// Update a Role by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Role.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Role was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Role with id=${id}. Maybe Role was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Role with id=" + id
        });
      });
};

// Delete a Role with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Role.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Role was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Role with id=${id}. Maybe Role was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Role with id=" + id
        });
      });
};

// Delete all Roles from the database.
exports.deleteAll = (req, res) => {
    Role.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Roles were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Roles."
          });
        });
};

// exports.addRole = (RoleId, userId) => {
//   return Role.findByPk(roleId)
//     .then((role) => {
//       if (!role) {
//         console.log("Role not found!");
//         return null;
//       }
//       return User.findByPk(userId).then((user) => {
//         if (!user) {
//           console.log("User not found!");
//           return null;
//         }

//         Role.addRole(user);
//         console.log(`>> added user id=${User.id} to Role id=${role.id}`);
//         return Role;
//       });
//     })
//     .catch((err) => {
//       console.log(">> Error while adding Role to Role: ", err);
//     });
// };

// Find all published Roles
exports.findAllPublished = (req, res) => {
    // Role.findAll({ where: { published: true } })
    // .then(data => {
    //   res.send(data);
    // })
    // .catch(err => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while retrieving Roles."
    //   });
    // });
};