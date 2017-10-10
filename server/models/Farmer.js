var mongoose = require('mongoose');

var FarmerSchema = new mongoose.Schema({
    farmer_ID: { type: String, unique: true, index: true },
    farmer_address : {type: String},
    farmer_lat : {type: Number},
    farmer_lng : {type: Number},
    farmer_name : {type: String},
    farmer_pic : {type: String},
    farmer_website : {type: String},
    farmer_website : {type: String},
	farmer_description : {type: String}    
});

module.exports = mongoose.model('Farmer', FarmerSchema);