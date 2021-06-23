const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema;

// Define the StockItem collection and schema
let StockItem = new Schema({
    regNumber: {
        type: String
    },
    make: {
        type: String
    },
    model: {
        type: String
    },
    modelYear: {
        type: Number
    },
    kms: {
        type: Number
    },
    colour: {
        type: String
    },
    vin: {
    type: String
    },
    retailPrice: {
    type: Number
    },
    costPrice: {
    type: Number
    },
    accessories: [{ 
        name: String, 
        description: String 
    }],
    images: [{ 
        name: String, 
        data: Buffer,
        contentType: String 
    }],
    dtCreated: {
        type: Date, 
        default: Date.now
    },
    dtUpdated: {
        type: Date, 
        default: Date.now
     }
}, {
   collection: 'stockItems'
})

StockItem.plugin(mongoosePaginate)
module.exports = mongoose.model('StockItem', StockItem)