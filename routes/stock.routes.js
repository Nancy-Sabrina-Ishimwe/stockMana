const express = require('express');
const stockRoutes = express.Router();
const { create,list, remove, update  } = require('../controllers/stock.controller');

stockRoutes.get('/list', list);
stockRoutes.post('/add', create);
stockRoutes.put('/update', update);
stockRoutes.delete('/delete', remove);

module.exports = stockRoutes;