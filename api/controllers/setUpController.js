var Todos = require('../models/todoModel');

module.exports = function (app) {

    app.get("/api/setupTodos", function (req, res) {
        // Setup seed data
        var seedTodos = [
            {
                text: "Học node js",
                isDone : false
            },
            {
                text: "Học React JS js",
                isDone : false
            },
            {
                text: "Viết một ứng dụng tuyệt vời",
                isDone : false
            },
        ];

        Todos.create(seedTodos, function (err, results) {
            res.send(results) ;
        });
    });

};