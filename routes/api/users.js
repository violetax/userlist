const express = require('express');

// Import our User model
const User = require('../../models/user');

const router = express.Router();


// GET User List.
router.get('/list', (req, res, next) => {
  // Find all matching users, which in this case is all of 'em
  User.find((err, users) => {
    if (err) {
    // if something's broken, send an error
      return res.send(err);
    } // Otherwise, send the array of users
    return res.json(users);
  });
});

module.exports = router;
