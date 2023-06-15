var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema({
  brand: { type: String, required: true, maxlength: 100 },
  model: { type: String, required: true, maxlength: 100 },
  color: { type: String, required: true },
  year: { type: Number, required: true },
});

//Export model
module.exports = mongoose.model('Car', CarSchema);
