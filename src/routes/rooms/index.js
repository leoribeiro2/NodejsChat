const express = require('express');
const router = express.Router();

const createRules = require('./../validator/rooms/create')
  ,editRules = require('./../validator/rooms/edit')
  ,updateRules = require('./../validator/rooms/update')
  ,removeRules = require('./../validator/rooms/remove');

router.get('/', require('./../../services/rooms/index'));
router.get('/new', require('./../../services/rooms/new'));
router.get('/edit/:id', editRules, require('./../../services/rooms/edit'));
router.get('/:id', require('./../../services/rooms/show'));
router.post('/', createRules,  require('./../../services/rooms/create'));
router.patch('/:id', updateRules, require('./../../services/rooms/update'));
router.put('/:id', updateRules, require('./../../services/rooms/update'));
router.delete('/:id', removeRules, require('./../../services/rooms/remove'));

module.exports = router;