// console.log('hi from server routes.js');
var mongoose = require('mongoose');
var user = require('./../controllers/session.js');
var question = require('./../controllers/question.js');
var answer = require('./../controllers/answer.js');

module.exports = function(app){

    app.post('/questions/add', function(req, res){
        question.add(req, res);
    })

    app.get('/questions/getall', function(req, res){
        question.getall(req, res);
    })

//-----------------

     app.post('/answers/add', function(req, res){
        answer.add(req, res);
    })

    app.post('/answers/addlike', function(req, res){
        answer.addlike(req, res);
    })

    app.get('/answers/getall', function(req, res){
        answer.getall(req, res);
    })

//----------------

    app.post('/login', function(req, res){
        user.login(req, res);
    })
    
    app.get('/logout', function(req, res){
        user.logout(req, res);
    })
    
    app.get('/checkstatus', function(req, res){
        user.checkStatus(req, res);
    })
}