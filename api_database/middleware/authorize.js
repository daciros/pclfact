const User = require("../models/userModel");
const Role = require("../models/roleModel");
const Permission = require("../models/permissionModel");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

const authorize = (req, res, next)  => {
  try {
    const token = req.headers['authorization']?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, config.SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Failed to authenticate token" });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error authorizing user" });
  }
};

const authorizeRole = (roleName) => async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).populate("role");
        if (!user) {
            return res.status(404).json({ message: "User not found in role" });
        }

        const role = user.role.name;
        console.log(role)

        if (role !== roleName) {
            return res.status(403).json({ message: "Access denied" });
        }

        next();
    } catch (error) {
        console.error(error);

        return res.status(500).json({ message: "Error authorizing user" });
    }
};

const authorizePermission = (permissionName) => {
    return async (req, res, next) => {
        const permission = await Permission.findOne({ name: permissionName });
        if (!permission) {
            return res.status(403).json({ message: 'Access denied' });
        }

        next();
    };
};
module.exports = { authorize, authorizeRole, authorizePermission };

