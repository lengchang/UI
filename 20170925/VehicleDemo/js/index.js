//angularjs的代码不要写在$(document).ready()中
var vehicleModule=angular.module("VehicleApp",[]);
var vehicleController=vehicleModule.controller("VehicleController",function($scope){
	$scope.refresh=function(mainData){
		var codeQuerying=$("#id_code").val();
		var nameQuerying=$("#id_name").val();
		$.ajax({
			type:"POST",
			dataType:"text",
			url:"http://192.168.0.100:8081/testEnvironmentForMaven/query.do",
			data:{
				code:codeQuerying,
				name:nameQuerying
			},
			success:function(data){
				$scope.mainData=JSON.parse(data).result;
				$scope.$apply();
			}
		});
	}
});
