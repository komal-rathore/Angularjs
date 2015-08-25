
<!DOCTYPE html>
<html>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<body>

<!-- It must bedeclare here ng-app -->
<!-- using ng-init we can initialize our model object -->
<div ng-app="" ng-init="name='John'">
 
<p>Input something in the input box:</p>

ng-model is used with the input tag in html5.
<p>Name: <input type="text" ng-model="name"></p> 

<!-- Here Binding is done -->
<div ng-bind="name"></div>
This is also work like this.
{{name}}
</div>

Angular js expression
{{5+2}}
{{'ds'+"dfsd"}}
{{dsf+'45'}}
{{5s+'56'}}


Points on Controller
1. We can have many controller in one html
2. Every Controller should have one unique name.
3. If we assign controller to a tag then it access only those variable which are within the scope.

</body>
</html>
