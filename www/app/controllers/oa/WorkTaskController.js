define(['app'], function (app) {
app.controller('WorkTaskCtrl', function($ionicLoading,$scope,$rootScope,$ionicPopup,$http,$cordovaSQLite,$state) {
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  //每次进入页面执行
  $scope.$on('$ionicView.enter',function(){

    var arr=new Array();
    $rootScope.tasktext='';
    $rootScope.files=arr;
    $rootScope.personone=arr;
    $rootScope.personmore=arr;
  });
	//页头跳转

    $scope.GoPage = function (target,param) {
    	//$rootScope.files=;

      	//$rootScope.tasktext='';
      	//$scope.files={};
      	//console.log('===='+$rootScope.tasktext)
        $state.go(target,{});
    }
	//var appElement = document.querySelector('[ng-controller=NewTaskCtrl]');//获得绑定controllerdom节点
	//var $scope = angular.element(appElement).scope(); //获得$scope对象
	//$scope.apply();//刷新数据

    $scope.doSomething = function() {
		$state.go('app');
    }
	var arr=[{
	                    "username":'张三',
	                    "sex":'09:26',
	                    "say":'反对法激动ifjfdfjsdifjdiofhdfoihd',
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl',
	                    "st":'ssss'
	                } ,
	                {
	                    "username":'李四',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'王五',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'功六',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                } ,
	                {
	                    "username":'雪七',
	                    "sex":'09:26',
	                    "say":15,
	                    "zan":708,
	                    "saycount":20,
	                    "outconunt":1,
	                    "saylink":'imgurl'
	                }];
	    $scope.runtimeImageSrc="img/ionic.png";
	   // var arr1=[{"manid":12,"st":23,"spu":3,"svu":4,"ssu":5,"sbj":6,"zan":0,"random":0.505913405213505}];
       // $scope.title   = "工作任务";
       // $scope.list = arr1;
        // pull to refresh
        $scope.onRefresh = function() {

			$http({
			   url:window.siteurl+'sms/QueryWorkTask',
			   method:"POST",
			   headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
			   },
			   data: {
	           // map: params,
	            //test: 'test_lwp'
			   }
			}).success(function(data){
				//$scope.list=data.concat($scope.list);
        $ionicLoading.hide();
				$scope.list=data;
				//alert(data);
				//console.log($scope.list);
				//alert(JSON.stringify(data));
	            //window.location.href = "Gulugulus/subMenu";
	        }).error(function(error){
				alert(error);
	        }).finally(function() {
	                    $scope.$broadcast('scroll.refreshComplete');
	        })
        };




   });
});
