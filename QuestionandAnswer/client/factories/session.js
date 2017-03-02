// console.log('hello from the client session factory');

app.factory('sessionFactory', function($http, $location){
    var factory = {};

    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            if(output.data){
                $location.url('/dashboard');
            }
        })
    }

    factory.checkLoggedInStatus = function(callback){
        $http.get('checkstatus').then(function(output){
            if(!output.data){
                $location.url('/');
            }
            else
            {
                callback(output.data);
            }
        })
    }

    return factory;
})