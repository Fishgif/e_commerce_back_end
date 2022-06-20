const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all categories
  Tag.findAll({
    // be sure to include its associated Products
    include: [
      {
        model: Product,
        as: "product_tags"
      }
    ]
  }).then((tags) => {

    res.json(tags);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findAll({
    include: [
      {
        model: Product,
        as: "product_tags"
      }
    ]
  }).then((results) => {
    res.json(results);
  // be sure to include its associated Product data
  });
});

router.post('/', (req, res) => {
  // create a new category
  Tag.create({
    name: req.body.name
  }).then((created) => {
    res.json(created);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  Tag.update({
    name: req.body.name  
  }, {
    where: {
      id: req.params.id,
    }
  }).then((updated) => {
    res.json(updated);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => {

    res.json({
      data: 'ok'
    })

  })

});

module.exports = router;
