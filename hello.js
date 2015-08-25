
<!DOCTYPE html>
<html>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<body>

<!-- IT must bedeclare here -->
<div ng-app="">
 
<p>Input something in the input box:</p>


<p>Name: <input type="text" ng-model="name"></p>

<!-- Here Binding is done -->
<div ng-bind="name"></div>
</div>

</body>
</html>
