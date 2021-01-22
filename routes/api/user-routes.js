const router = require('express').Router();
const { User } = require('../../models');

User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

router.get('/', (req, res) => {});


router.get('/:id', (req, res) => {});


router.post('/', (req, res) => {});


router.put('/:id', (req, res) => {});


router.delete('/:id', (req, res) => {});

module.exports = router;