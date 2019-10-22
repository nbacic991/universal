const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Gett all items
router.get('/', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});

// Adding new item
router.post('/', async (req, res) => {
  const posts = await loadPostCollection();
  await posts.insertOne({
    id: req.body.id
  });
  res.status(201).send();
});

// Delete item

router.delete('/:id', async (req, res) => {
  const posts = await loadPostCollection();
  await posts.deleteOne({
      _id: new mongodb.ObjectID(req.params.id)
    });
  res.status(200).send();
});

async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/nekretnine', {useNewUrlParser: true, useUnifiedTopology: true});

  return client.db('nekretnine').collection('nekretnine');
}

module.exports = router;
