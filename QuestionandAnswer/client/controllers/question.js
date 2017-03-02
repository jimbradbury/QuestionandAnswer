//console.log('hello from Question controller');

app.controller('questionController', function($scope, questionFactory, $route, $routeParams){

    // runs when the controller is loaded, auto-populating $scope.topics
    questionFactory.getAll(function(data){
        $scope.questions = data;
    })

    // detect route parameter change for showquestion
    if($routeParams.id){
        questionFactory.getAll(function(data){
        $scope.questions = data;
        $scope.showQuestion = null
        for (question in $scope.questions){
            if($scope.questions[question]['_id'] == $routeParams.id){
            $scope.showQuestion = $scope.questions[question]
            }
        }
        })
    }


     $scope.addQuestion = function(current_user_id, newQuestion){

        $scope.errors = [];
        
        if(!$scope.newQuestion ||!$scope.newQuestion.title){
            $scope.errors.push('Please enter a question.');
        }
        else if($scope.newQuestion.title.length <10){
            $scope.errors.push('The title must be at least 10 characters long.');
        }
        else if($scope.newQuestion.title.length >144){
            $scope.errors.push('The title is too long.');
        }else{
            
            $scope.newQuestion.user_id = current_user_id;
            $scope.newQuestion.likes = 0;
            
            //callback here to update topics - data coming from factory 
            questionFactory.addQuestion($scope.newQuestion, function(data){
                $scope.questions.push(data);
            });

            // clearing/resetting client UI input
            $scope.newQuestion = {};
        }

    }
    
})