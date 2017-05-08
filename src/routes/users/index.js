const express = require('express');
const router = express.Router();

const createRules = require('./../validator/users/create')
  ,editRules = require('./../validator/users/edit')
  ,updateRules = require('./../validator/users/update')
  ,removeRules = require('./../validator/users/remove');

router.get('/', require('./../../services/users/index'));
router.get('/new', require('./../../services/users/new'));
router.get('/edit/:id', editRules, require('./../../services/users/edit'));
router.get('/:id', require('./../../services/users/show'));
router.post('/', createRules,  require('./../../services/users/create'));
router.patch('/:id', updateRules, require('./../../services/users/update'));
router.put('/:id', updateRules, require('./../../services/users/update'));
router.delete('/:id', removeRules, require('./../../services/users/remove'));

module.exports = router;