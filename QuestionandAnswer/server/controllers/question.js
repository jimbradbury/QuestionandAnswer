var mongoose = require('mongoose');
var User = mongoose.model('User');  
var Question = mongoose.model('Question'); 

module.exports = (function(){
    return{
        
    add:function(req, res) {
        
        var new_question = new Question({title:req.body.title, content:req.body.content, _user:req.body.user_id, _answer:req.body.answer_id});
        
        new_question.save(function(err, new_question_result) {

            if(!err)
            {
                res.json(new_question_result);
            }
            else{
                console.log(err);
            }
       
        })
    },
   
   

    getall:function(req, res) {
        Question.find({})
        .populate('_answers')
        .populate('_user')
        .exec(function(err, questions){
            res.json(questions);
        })
    },
        

    }
})()