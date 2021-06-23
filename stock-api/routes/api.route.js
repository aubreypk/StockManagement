var express = require('express')

var router = express.Router()
var stockItemsRoute = require('./stockItem.route')

router.use('/stockitems', stockItemsRoute);

module.exports = router;