const express = require('express');
const router = express.Router();

const isLoggedIn = require('./../middleware/isloggedin');

const createRules = require('./../validator/users/create')
  ,editRules = require('./../validator/users/edit')
  ,updateRules = require('./../validator/users/update')
  ,removeRules = require('./../validator/users/remove');

router.get('/',isLoggedIn, require('./../../services/users/index'));
router.get('/new',isLoggedIn, require('./../../services/users/new'));
router.get('/edit/:id',isLoggedIn, require('./../../services/users/edit'));
router.get('/:id',isLoggedIn, require('./../../services/users/show'));
router.post('/', createRules,  require('./../../services/users/create'));
router.patch('/:id',isLoggedIn, require('./../../services/users/update'));
router.put('/:id',isLoggedIn, require('./../../services/users/update'));
router.delete('/:id',isLoggedIn, require('./../../services/users/remove'));

module.exports = router;