

/// <reference path="../app.ts"/>



class myDirective {

   

    link = (scope, element, attribute) => {
        console.log(element);
        scope.directiveName = "directive";
        element.on('mousedown', () => {
            console.log('mouse is down');
        });
        element.on('mouseup', () => {
            console.log('mouse is up');
        });
    }
   
}

app.directive('myDirective', () => {
    return new myDirective();
});

