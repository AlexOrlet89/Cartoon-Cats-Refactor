const { Router } = require('express');
const { cats } = require('../../data/cats');
const app = require('../app');

app.get;

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const cat = cats.find((cat) => cat.id === id);
    res.json(cat);
  })
  .get('/', (req, res) => {
    const catsArray = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    res.json(catsArray);
  });
