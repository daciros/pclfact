// middleware/authorize.js

const User = require('../models/userModel');
const Role = require('../models/roleModel');
const Permission = require('../models/permissionModel');

const authorizeRole = (roleName) => async (req, res, next) => {
  const user = await User.findById(req.user.id).populate('roles');
  if (!user) return res.status(404).json({ message: 'User not found' });

  const role = user.roles.find(r => r.name === roleName);
  if (!role) return res.status(403).json({ message: 'Access denied' });

  next();
};

const authorizePermission = (permissionName) => async (req, res, next) => {
  const user = await User.findById(req.user.id).populate('permissions');
  if (!user) return res.status(404).json({ message: 'User not found' });

  const permission = user.permissions.find(p => p.name === permissionName);
  if (!permission) return res.status(403).json({ message: 'Access denied' });

  next();
};

module.exports = {
  authorizeRole,
  authorizePermission
};
