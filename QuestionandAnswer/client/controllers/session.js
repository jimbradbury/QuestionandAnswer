// console.log('hello from client session controller');

app.controller('sessionController', function($scope, sessionFactory){

    sessionFactory.checkLoggedInStatus(function(data){
        $scope.currentUser = data;
    });

    $scope.login = function(){
        // Since no credential validation, only doing basic error checking here.
        // Setting a somewhat arbitrary max value of 64 (length might need to be larger for full name, email, etc ...). 
        // This would be much more robust in a real app, likely following internal guidance/standards.
        if(!$scope.user || !$scope.user.name || $scope.user.name.length < 3 || $scope.user.name.length > 64){
            alert('Please enter a valid name (3 characters or more).')
        }
        else{
            sessionFactory.login($scope.user)
        }
    }

        $scope.logout = function(){
        //destroy session
    }
})