angular.module('passlistApp')
.directive('addclassdays', function(){
	return {
		restrict: 'E',
		template: '<button type="button" addbuttons class="mdl-button mdl-js-button mdl-button--primary">Nuevo dia de clase</button>'
	}
})
.directive("addbuttons", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
      var html = '<div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input" type="text" ng-model="groupData.classdays_attributes['+ scope.count + '].day"><label class="mdl-textfield__label">Dia</label></div><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input" type="text" ng-model="groupData.classdays_attributes['+ scope.count + '].begin_time"><label class="mdl-textfield__label">hora de inicio</label></div><div class="mdl-textfield mdl-js-textfield"><input class="mdl-textfield__input" type="text" ng-model="groupData.classdays_attributes['+ scope.count + '].end_time"><label class="mdl-textfield__label">Hora de fin</label></div>';
			angular.element(document.getElementById('classdays')).append($compile(html)(scope));
			scope.count++;
		});
	};
});
