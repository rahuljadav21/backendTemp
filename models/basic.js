const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String
});
ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
  });
const opts = { toJSON: { virtuals: true } };
const basicSchema = new Schema({
 title :{
     type : String,
     required : true
 } 
},opts)


module.exports = mongoose.model('Basic',basicSchema)