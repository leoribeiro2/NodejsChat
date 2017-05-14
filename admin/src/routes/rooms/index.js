const express = require('express');
const router = express.Router();

const isLoggedIn = require('./../middleware/isloggedin');

const createRules = require('./../validator/rooms/create')
  ,editRules = require('./../validator/rooms/edit')
  ,updateRules = require('./../validator/rooms/update')
  ,removeRules = require('./../validator/rooms/remove');

router.get('/', isLoggedIn, require('./../../services/rooms/index'));
router.get('/new',isLoggedIn, require('./../../services/rooms/new'));
router.get('/edit/:slug',isLoggedIn, require('./../../services/rooms/edit'));
router.get('/:id',isLoggedIn, require('./../../services/rooms/show'));
router.post('/',isLoggedIn, createRules,  require('./../../services/rooms/create'));
router.patch('/:id',isLoggedIn, require('./../../services/rooms/update'));
router.put('/:id',isLoggedIn, require('./../../services/rooms/update'));
router.delete('/:id',isLoggedIn, require('./../../services/rooms/remove'));

module.exports = router;