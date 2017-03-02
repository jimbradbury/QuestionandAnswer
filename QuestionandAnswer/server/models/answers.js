var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    title:{type:String, required: true, minlength:3},
    content: {type:String, default: " "},
    likes: {type: Number, default:0}, 
    // associations
    _user:{type:Schema.Types.ObjectId, ref: 'User'},
    _question:{type:Schema.Types.ObjectId, ref: 'Question'}

})

mongoose.model('Answer', AnswerSchema);