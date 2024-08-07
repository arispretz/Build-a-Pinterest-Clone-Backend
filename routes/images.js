const express = require('express');
const router = express.Router();
const Image = require('../models/Image');
const passport = require('passport');

// Crear un nuevo enlace de imagen
router.post('/link', passport.authenticate('jwt', { session: false }), async (req, res) => {
  const newImage = new Image({ url: req.body.url, user: req.user.id });
  await newImage.save();
  res.json(newImage);
});

// Eliminar una imagen
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  await Image.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// Obtener imágenes de un usuario
router.get('/user/:id', async (req, res) => {
  const images = await Image.find({ user: req.params.id });
  res.json(images);
});

module.exports = router;
