(function () {
    "use strict";
    var module = angular.module("persianDatePicker");

    function _buildMonth(model, start, month) {
        model.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.jMonth(), count = 0;
        while (!done) {
            console.log(`count: ${count} - monthIndex: ${monthIndex} - month: ${date.month()}`);
            model.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.jMonth();
            monthIndex = date.jMonth();
        }
        console.log(model.weeks);
    }
    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.jDate(),
                isCurrentMonth: date.jMonth() === month.jMonth(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            //console.log(`date: ${ date } - month: ${ month }`);
            //console.log(`number: ${ days[i].number } - isCurrentMonth: ${ days[i].isCurrentMonth } - name: ${ days[i].name } - today: ${ days[i].isToday } - date: ${ days[i].date }`);
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }


    function controller() {
        var model = this;

        model.select = function (day) {
          model.today = `تاریخ انتخاب شده: ${ day.date.format('jYYYY/jM/jDD') }`;  
        };
        
        model.next = function () {
            var next = model.month.clone();
            next.jMonth(next.jMonth() + 1).date(1);
            model.month.jMonth(model.month.jMonth() + 1).date(1);
            _buildMonth(model, next, model.month)
        };
        model.previous = function () {
            var next = model.month.clone();
            next.jMonth(next.jMonth() - 1).date(1);
            model.month.jMonth(model.month.jMonth() - 1).date(1);
            _buildMonth(model, next, model.month)
        };
            
        model.$onInit = function () {
            model.selected = moment();
            model.month = model.selected.clone();

            var start = model.selected.clone();
            start.date(1);
            start.day(0);
            model.days = ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'];

            _buildMonth(model, start, model.month);
        };
    }

    module.component("persianDatePicker", {
        templateUrl: "/scripts/components/calendar.component.html",
        controllerAs: "model",
        controller: controller
    });

} ());