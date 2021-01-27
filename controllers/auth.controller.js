const db = require("../models");
const User = db.user;
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config/passport')(passport);
const Role = db.role; 
const userRole = db.userRole;
const Op = db.Sequelize.Op;
// Create and Save a new User
exports.signup = (req, res) => {
    console.log(req.body)
  
    // Validate request
    if (!req.body.email) {
      res.status(400).send({
        message: "Email can not be empty!"
      });
      return;
    }
  
    // Create a User
    const user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      // published: req.published ? req.published : false
    };
  
    // Save User in the database
    User.create(user)
      .then(data => {
        if (req.body.roleId){
            userRole.create({userId: data.id, roleId: req.body.roleId})
            User.findByPk(data.id)
            .then(data => {
                var token = jwt.sign(JSON.parse(JSON.stringify(data)), 'nodeauthsecret', {expiresIn: 86400 * 30});
                jwt.verify(token, 'nodeauthsecret', function(err, data){
                    console.log(err, data);
                    })
                res.json({success: true, user: data, token: 'JWT ' + token});  
            })
            .catch(err => {
                res.status(500).send({
                message: "Error retrieving User with id=" + data.id
                });
            });        
        } else {
          userRole.create({userId: data.id, roleId: 3})
          User.findByPk(data.id)
          .then(data => {
                var token = jwt.sign(JSON.parse(JSON.stringify(data)), 'nodeauthsecret', {expiresIn: 86400 * 30});
                jwt.verify(token, 'nodeauthsecret', function(err, data){
                    console.log(err, data);
                })
                res.json({success: true, user: data, token: 'JWT ' + token});  
            })
            .catch(err => {
                res.status(500).send({
                message: "Error retrieving User with id=" + data.catchid
                });
            });
        }
      })
      .catch(err => {
        console.log(res, err)
        err.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };
  
  exports.signin = (req, res) => {
    // console.log(req.body)
    User
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      if (!user) {
        return res.status(401).send({
          message: 'Authentication failed. User not found.',
        });
      }
      user.comparePassword(req.body.password, (err, isMatch) => {
        if(isMatch && !err) {
          var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 86400 * 30});
          jwt.verify(token, 'nodeauthsecret', function(err, data){
            console.log(err, data);
          })
          res.json({success: true, user: user, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      })
    })
    .catch((error) => res.status(400).send(error));
  };
  
  exports.persist = async (req, res) => {
     if (!!req.headers.authorization){
       console.log(req.headers.authorization)
        let encodedToken = req.headers.authorization.split(' ')[2]
        console.log(encodedToken)
        if (!!encodedToken && encodedToken.length > 1 && encodedToken !== undefined && encodedToken !== null){
          let token = jwt.decode(encodedToken, 'nodeauthsecret')
          console.log(token)
          console.log("here")
          let userId = token["id"]
          console.log(userId)
          await User.findByPk(userId, {
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
            })
            .catch(err => {
              res.status(500).send({
                message: "Error retrieving User with id=" + id
              });
            });
        } else {
            console.log("error happened")
        }
     }
  }