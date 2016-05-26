(function () {
    "use strict";
    
    var module = angular.module("persianDatePicker");
    
    function headerController() {
      var model = this;
      
        
    };
    
    module.component("calendarHeader", {
        require: {
            parent: '^persianDatePicker'
        },
        templateUrl: '/scripts/components/calendar-header.component.html',
        bindings: {
            month: "<"
        },
        controllerAs: "model",
        controller: headerController
    });
} ());