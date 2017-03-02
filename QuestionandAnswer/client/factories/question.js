// console.log('hi from the question factory');

app.factory('questionFactory', function($http, $location){
    var factory = {};
    factory.questions = [];
    
    factory.getAll = function(callback){
        $http.get('/questions/getall').then(function(output){
            callback(output.data);
        })
    }

    // added the callback to dynamically refresh the data on the page
    factory.addQuestion = function(question){
       $http.post('/questions/add', question).then(function(new_question){
           $location.url('/dashboard');
        })
    }

    return factory;
})
