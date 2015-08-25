<!DOCTYPE html>
<html>
<script src= "http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<body ng-app="F1FeederApp" ng-controller="driversController">
<table>
	<thead>
		<tr>	
			<th colspan="4"> Drivers Championship Standings</th>
		</tr>
	</thead>
	<tbody>
		<tr ng-repeat="driver in driversList">
			<td>{{ $index + 1 }}</td>
			<td>
			{{driver.Driver.givenName}}
			{{driver.Driver.familyName}}
			</td>
			<td>{{driver.Constructors[1].name}}</td>
			<td>{{driver.points}}</td>
		</tr>
	</tbody>
</table>




<script>
var app = angular.module('F1FeederApp', []);
app.controller('driversController', function($scope) {
$scope.driversList=[
	{
	Driver:
		{
			givenName:'Komal',
			familyName:'kok'
		},
		points:322,
		nationality:"indian",
		Constructors :[{name:"KR"},
		{name:"KRR2"}]
	},
	
	{
	Driver:
		{
			givenName:'AAKo',
			familyName:'kddok'
		},
		points:522,
		nationality:"American",
		Constructors :[{name:"AR"},
		{name:"ARR2"}]
	}
	
	
];

  
});
</script>

</body>
</html>
