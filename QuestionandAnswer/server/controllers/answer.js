var mongoose = require('mongoose');
var Answer = mongoose.model('Answer'); 
var Question = mongoose.model('Question');

module.exports = (function(){
    return{
        
    add:function(req, res) {

        var answer = new Answer({title:req.body.title, content:req.body.content, _user:req.body.user_id, _question:req.body.question_id});
        answer.save(function(err, answer_result) {
            if(!err)
            {
                Question.findOne({_id:req.body.question_id}, function(err, question){
                    question._answers.push(answer._id);
                    question.save(function(err){
                        if(err){console.log(err);}
                    })
                })
                res.json(answer_result);
            }
            else{
                console.log(err);
            }
       
        })
    },

    addlike:function(req, res) {
        
        req.body.likes+=1;

        Answer.findById({ _id: req.body._id }, function (err, answer){
            answer.likes+=1;
            answer.save(function(err){       
                if(!err)
                {
                    res.json(answer);
                }
                else{
                    console.log(err);
                }
            })
        })
    },

    getall:function(req, res) {
        Answer.find({})
        .populate('_user')
        .populate('_question')
        .exec(function(err, answers){
            res.json(answers);
        })
    }
        
  
    }
})()