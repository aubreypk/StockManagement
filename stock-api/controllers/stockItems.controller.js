// Accessing the Service
var StockItemService = require('../services/stockItem.service')

// Saving the context of this module inside _this
_this = this

// Async Controller function to get the List
exports.getStockItems = async function(req, res, next){
    // Check the query parameters
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
        var stockItems = await StockItemService.getStockItems({}, page, limit)
        // Return the list with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: stockItems, message: "Succesfull"});
    }catch(e){
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

// Async Controller function to get the List
exports.getStockItem = async function(req, res, next){
    // Check the query parameters
    var id = req.params.id;

    try{
        var stockItem = await StockItemService.getStockItem(id);
        // Return the object with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: stockItem, message: "Succesfull"});
    }catch(e){
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createStockItem = async function(req, res, next){
    // Req.Body contains the form submit data
    var stockItem = {
        regNumber: req.body.regNumber ? req.body.regNumber : null,
        make: req.body.make,
        model: req.body.model,
        modelYear: req.body.modelYear,
        kms: req.body.kms,
        colour: req.body.colour,
        vin: req.body.vin,
        retailPrice: req.body.retailPrice,
        costPrice: req.body.costPrice,
        accessories: req.body.accessories,
        images: req.body.images,
        dtCreated: new Date(),
        dtUpdated: new Date()
    }

    try{
        // Calling the Service function with the new object from the Request Body
        var createdStockItem = await StockItemService.createStockItem(stockItem)
        return res.status(201).json({status: 201, data: createdStockItem, message: "Succesfully Created"})
    }catch(e){
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Creation was Unsuccesfull"})
    }
}

exports.updateStockItem = async function(req, res, next){
    // Id is required for update
    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Could not find Id"})
    }

    var id = req.body._id;

    console.log(req.body)

    var stockItem = {
        id,
        regNumber: req.body.regNumber ? req.body.regNumber : null,
        make: req.body.make ? req.body.make : null,
        model: req.body.model ? req.body.model : null,
        modelYear: req.body.modelYear ? req.body.modelYear : null,
        kms: req.body.kms ? req.body.kms : null,
        colour: req.body.colour ? req.body.colour : null,
        vin: req.body.vin ? req.body.vin : null,
        retailPrice: req.body.retailPrice ? req.body.retailPrice : null,
        costPrice: req.body.costPrice ? req.body.costPrice : null,
        accessories: req.body.accessories ? req.body.accessories : null,
        images: req.body.images ? req.body.images : null,
        //dtCreated,
        dtUpdated: new Date()
    }

    try{
        var updatedStockItem = await StockItemService.updateStockItem(stockItem)
        return res.status(200).json({status: 200, data: updatedStockItem, message: "Succesfully Updated"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeStockItem = async function(req, res, next){
    var id = req.params.id;

    try{
        var deleted = await StockItemService.deleteStockItem(id)
        return res.status(204).json({status:204, message: "Succesfully Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}