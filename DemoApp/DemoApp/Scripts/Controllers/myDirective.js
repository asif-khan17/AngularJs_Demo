var myDirective = (function () {
    function myDirective() {
        this.link = function (scope, element, attribute) {
            console.log(element);
            scope.directiveName = "directive";
            element.on('mousedown', function () {
                console.log('mouse is down');
            });
            element.on('mouseup', function () {
                console.log('mouse is up');
            });
        };
    }
    return myDirective;
}());
app.directive('myDirective', function () {
    return new myDirective();
});
