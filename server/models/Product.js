var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    product_name: { type: String, unique: true, index: true },
    product_link: String,
    product_pic: String,
    product_category: String,
    farmer_ID: String
});

module.exports = mongoose.model('Product', ProductSchema);