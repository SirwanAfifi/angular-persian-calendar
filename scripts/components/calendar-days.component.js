(function () {
    "use strict";
    
    var module = angular.module("persianDatePicker");
    
    function calendarDaysController() {
        var model = this;
        
    };
    
    module.component("calendarDays", {
        require: {
            parent: '^persianDatePicker'
        },
        templateUrl: "/scripts/components/calendar-days.component.html",
        bindings: {
            days: "<",
            weeks: "<"
        },
        controllerAs: "model",
        controller: calendarDaysController
    });
} ());