const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Gett all items
router.get('/', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});

// Gett item by name
router.get('/user/:name', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({
      // '_id': new mongodb.ObjectID(req.params.id) }).toArray()
      'name': req.params.name
    }).toArray()
  );
});

// Gett item by id
router.get('/userid/:id', async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({
      '_id': new mongodb.ObjectID(req.params.id)
    }).toArray()
  );
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
  const client = await mongodb.MongoClient.connect(process.env.URL, {useNewUrlParser: true, useUnifiedTopology: true});
  return client.db('dnevnik').collection('users');
}

module.exports = router;

