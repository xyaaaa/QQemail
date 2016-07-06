var app = angular.module('myApp',['ui.router']);


app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'pages/main.html',
	}).state('dingyue',{
		url:'/dingyue',
		templateUrl:'pages/dingyue.html',
	}).state('yuedu',{
		url:'/yuedu',
		templateUrl:'pages/yuedu.html',
	}).state('w-email',{
		url:'/w-email',
		templateUrl:'pages/w-email.html',
	}).state('s-email',{
		url:'/s-email',
		templateUrl:'pages/s-email.html',
	}).state('address',{
		url:'/address',
		templateUrl:'pages/address.html',
	});
	$urlRouterProvider.otherwise('/main');
});












