//console.log('hello from client answer controller');

app.controller('answerController', function($scope, answerFactory, questionFactory, $route, $routeParams){

    // runs when the controller is loaded, auto-populating $scope.topics
    answerFactory.getAll(function(data){
        $scope.answers = data;
    })

    $scope.answers = answerFactory.answers;

    // detect route parameter change for addAnswer
    if($routeParams.id){
        questionFactory.getAll(function(data){
        $scope.questions = data;
        $scope.addAnswerQuestion = null
        for (question in $scope.questions){
            if($scope.questions[question]['_id'] == $routeParams.id){
            $scope.addAnswerQuestion = $scope.questions[question]
            }
        }
        })
    }
    
     $scope.addAnswer = function(current_user_id, current_question_id, newAnswer){
            
        $scope.errors = [];
        
        if(!$scope.newAnswer ||!$scope.newAnswer.title){
            $scope.errors.push('Please enter an answer.');
        }
        else if($scope.newAnswer.title.length <5){
            $scope.errors.push('The answer must be at least 5 characters long.');
        }
        else if($scope.newAnswer.title.length >144){
            $scope.errors.push('The title is too long.');
        }else{

            $scope.newAnswer.user_id = current_user_id;
            $scope.newAnswer.question_id = current_question_id;

            //callback here to update topics - data coming from factory 
            answerFactory.addAnswer(newAnswer, function(data){
                $scope.answers.push(data);
            });

            $route.reload()
            
            // clearing/resetting client UI input values
            $scope.newAnswer = {};
        }
     }

    $scope.like = function(answer){

        answerFactory.addLike(answer), function(data){
            $scope.answers.push(data);
        }     
        $route.reload()
    }

 
})