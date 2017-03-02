// console.log('hi from the answer factory');

app.factory('answerFactory', function($http, $location){
    var factory = {};
    factory.answers = [];
    
    factory.getAll = function(callback){
        $http.get('/answers/getall').then(function(output){
            callback(output.data);
        })
    }

    // added the callback to dynamically refresh the data on the page
    factory.addAnswer = function(answer){

        $http.post('/answers/add', answer).then(function(new_answer){
           $location.url('/dashboard');
        })
    }

     // added the callback to dynamically refresh the data on the page
    factory.addLike = function(answer){

        $http.post('/answers/addlike', answer).then(function(new_answer){
           $location.url('/dashboard');
        })
    }
    
    return factory;
})
