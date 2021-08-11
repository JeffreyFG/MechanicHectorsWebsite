const mongoose  = require('mongoose');
    const reviewSchema = new mongoose.Schema({
        title:{
        type :String,
        required: true
    },
    description:{
        type :String,
        required: true
    },
    date :{
        type:Date,
        default:Date.now
    },
    Stars:
    {
        type:String,
        required:true
    }
})
module.exports =  mongoose.model('reviewData',reviewSchema);