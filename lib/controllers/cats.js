const { Router } = require('express');
// const { cats } = require('../../data/cats');
const app = require('../app');
const Cat = require('../models/cats');

app.get;

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const cat = await Cat.getByID(id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats = await Cat.getAll();
    const catsArray = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    res.json(catsArray);
  });
