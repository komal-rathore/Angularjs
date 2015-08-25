
<!DOCTYPE html>
<html>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<body>

<!-- It must bedeclare here ng-app -->
<!-- using ng-init we can initialize our model object -->
<div ng-app="" ng-init="name='John'">
 
<p>Input something in the input box:</p>


<p>Name: <input type="text" ng-model="name"></p>

<!-- Here Binding is done -->
<div ng-bind="name"></div>
This is also work like this.
{{name}}
</div>

</body>
</html>
