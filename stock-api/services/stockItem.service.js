// StockItem model
var StockItem = require('../models/StockItem')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the  List
exports.getStockItems = async function(query, page, limit){
    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    try {
        var stockItems = await StockItem.paginate(query, options)
        // Return the  list that was retured by the mongoose promise
        return stockItems;

    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while fetching Stock Items')
    }
}

// Async function to get the item
exports.getStockItem = async function(id){
    
    // Try Catch the awaited promise to handle the error 
    try {
        var stockItem = await StockItem.findById(id);
        // Return the  object that was retured by the mongoose promise
        return stockItem;

    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while fetching Stock Item')
    }
}

exports.createStockItem = async function(stockItem){
    // Creating a new Mongoose Object by using the new keyword
    var newStockItem = new StockItem({
        regNumber: stockItem.regNumber,
        make: stockItem.make,
        model: stockItem.model,
        modelYear: stockItem.modelYear,
        kms: stockItem.kms,
        colour: stockItem.colour,
        vin: stockItem.vin,
        retailPrice: stockItem.retailPrice,
        costPrice: stockItem.costPrice,
        accessories: stockItem.accessories,
        images: stockItem.images,
        dtCreated: new Date(),
        dtUpdated: new Date()
    })

    try{
        // Saving
        var savedStockItem = await newStockItem.save()
        return savedStockItem;
    }catch(e){
        // return a Error message describing the reason     
        throw Error("Error while Creating Stock Item")
    }
}

exports.updateStockItem = async function(stockItem){
    var id = stockItem.id

    try{
        //Find Object by Id
        var oldStockItem = await StockItem.findById(id);
    }catch(e){
        throw Error("Stock Item not found")
    }

    // If no Object exists return false
    if(!oldStockItem){
        return false;
    }

    console.log(oldStockItem)

    //Edit the stock Item Object
    oldStockItem.regNumber = stockItem.regNumber,
    oldStockItem.make = stockItem.make,
    oldStockItem.model = stockItem.model,
    oldStockItem.modelYear = stockItem.modelYear,
    oldStockItem.kms = stockItem.kms,
    oldStockItem.colour = stockItem.colour,
    oldStockItem.vin = stockItem.vin,
    oldStockItem.retailPrice = stockItem.retailPrice,
    oldStockItem.costPrice = stockItem.costPrice,
    oldStockItem.accessories = stockItem.accessories,
    oldStockItem.images = stockItem.images,
    oldStockItem.dtUpdated = new Date()


    console.log(oldStockItem)

    try{
        var savedStockItem = await oldStockItem.save()
        return savedStockItem;
    }catch(e){
        throw Error("And Error occured while updating the Stock Item");
    }
}

exports.deleteStockItem = async function(id){
    // Delete 
    try{
        var deleted = await StockItem.deleteOne({_id: id})
        if(deleted.result.n === 0){
            throw Error("Stock Item Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Stock Item")
    }
}