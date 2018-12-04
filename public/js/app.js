var app = angular.module("app.todos", ["xeditable"]);

app.controller('todoController', ['$scope', 'svTodos', function ($scope, svTodos) {
    $scope.appName = "Node todos !!!!";
    $scope.formData = {};
    $scope.loading = true;

    $scope.todos = [];

    // Load data from api
    svTodos.get().then(function (response){
        $scope.todos = response.data;
        $scope.loading = false;
    },function (error){
        console.log({"List" : error});
    });

    $scope.createTodo = function (e) {
        e.preventDefault();
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };

        svTodos.create(todo).then(function (response) {
            $scope.todos = response.data;
            $scope.loading = false;
        }, function (error) {
            console.log({"Create" : error});
        });
        $scope.formData.text = "";
    };

    $scope.updateTodo = function (todo) {
        $scope.loading = true;
        console.log("Update todo", todo)
        svTodos.update(todo).then(function (response) {
            $scope.todos = response.data;
            $scope.loading = false;
            console.log(response.data);
        }, function (error) {
            console.log({"Update" : error});
        });
    };

    $scope.deleteTodo = function (todo) {
        $scope.loading = true;
        console.log("delete todo", todo);
        svTodos.delete(todo._id).then(function (response) {
            $scope.todos = response.data;
            $scope.loading = false;
        }, function (error) {
            console.log({"Delete :" : error})
        });
    };

    $scope.myStopFunction = function (todos) {
        $scope.loading = true;
        if (todos.length == 0) {
            $scope.loading = false;
        } else {
            todos.forEach(function (todo) {
                svTodos.delete(todo._id).then(function (response) {
                    $scope.todos = response.data;
                    $scope.loading = false;
                }, function (error) {
                    console.log({"Delete :" : error})
                });
            });
        }

        console.log("delete all todo");
    };

}]);