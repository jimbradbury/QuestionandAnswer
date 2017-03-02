var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    title:{type:String, required: true, minlength:3},
    content: {type:String},
    // associations
    _user:{type:Schema.Types.ObjectId, ref: 'User'},
    _answers:[{type:Schema.Types.ObjectId, ref: 'Answer'}]
})

mongoose.model('Question', QuestionSchema);