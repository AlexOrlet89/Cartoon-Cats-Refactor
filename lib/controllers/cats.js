const { Router } = require('express');
// const { cats } = require('../../data/cats');
const app = require('../app');
const Cat = require('../models/cats');

app.get;

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const cat = cats.find((cat) => cat.id === id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const catsArray = await Cat.getAll();
    res.json(catsArray);
  });
