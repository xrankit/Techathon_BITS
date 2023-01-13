const User = require("../models/user")

const checkAdmin =  async (req, res, next) => {
     const currentUser =await User.find({ _id: req.params.id });
     console.log(currentUser)
     try {
          if (!currentUser) {
               return res.status(401).send({ message: "Invalid user" });
          }

          if (currentUser.isAdmin) {
               return res.status(200).send({ message: "Admin here!" })
          }
          next();
     } catch (err) {
          return res.status(401).send({message: "ACCESS_DENIED_ERR" });
     }
};

module.exports = checkAdmin;
