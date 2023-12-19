const StockModel = require('../models/stock.model'); 

const create = async (req, res, next) => { 
    try {
        const newStock = new StockModel(req.body);
        const savedStock = await newStock.save();
        
        console.log(savedStock);

        res.status(201).json({
            message: 'Stock created',
            Stock: savedStock
        })
    } catch (error) {
        res.status(500).send("Failed to save!!");
    }
}

const list = async (req, res, next) => { 
    try {
        var stock = await StockModel.find({});
        res.status(200).json({ stock });
    } catch (error) {
        res.status(500).send("Error fetching a furniture!!");
    }
}

const update = async (req, res, next) => { 
    
}

const remove = async (req, res, next) => { 
    
}


module.exports = {
    create, update, remove, list
}