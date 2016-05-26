(function () {
    "use strict";
    
    var module = angular.module("persianDatePicker");
    
    function calendarWeekNameController() {
        var model = this;
        
    };
    
    module.component("calendarWeekName", {
        templateUrl: "/scripts/components/calendar-week-name.component.html",
        bindings: {
            days: "<"
        },
        controllerAs: "model",
        controller: calendarWeekNameController   
    });
    
} ());