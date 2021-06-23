var express = require('express')

var stockItemRoute = express.Router()

// Getting the Controller 
var StockItemsController = require('../controllers/stockItems.controller');

// Map each API to the Controller FUnctions
stockItemRoute.get('/', StockItemsController.getStockItems)

stockItemRoute.get('/:id', StockItemsController.getStockItem)

stockItemRoute.post('/', StockItemsController.createStockItem)

stockItemRoute.put('/', StockItemsController.updateStockItem)

stockItemRoute.delete('/:id',StockItemsController.removeStockItem)

// Export the Router
module.exports = stockItemRoute;