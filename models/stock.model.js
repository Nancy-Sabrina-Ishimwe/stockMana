const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    itemNames: { required: true, type: 'string'},
    itemId:{ required: true, type: 'string' },
    itemMadeDate:{ required: true, type: 'string' },
    itemExpireDate:{ required: true, type: 'string' },
    itemMadeProducts:{ required: true, type: 'string' },
    itemPrices:{ required: true, type: 'string' },
    itemRole:{
        enum:{ 
            value:["fruits", "Breads","vegetables","oil "],
            message:"{value} is not a valid in the store",
        }
    },
createExpireDate:{ required: true, type: Date, default:new Date()},
createUpdateDate:{ required: true, type: Date},

})
module.exports = mongoose.model('stock,stockSchema');