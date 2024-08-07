const express = require('express');
const router = express.Router();
const passport = require('passport');

// Ruta de autenticación de GitHub
router.get('/github', passport.authenticate('github', {
  scope: ['profile', 'email']
}));

// Ruta de callback de GitHub
router.get('/github/callback', passport.authenticate('github', {
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/');
});

router.get('/user', (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;
