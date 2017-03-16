/**
  * @desc controller for agenda page
  * @author Guilherme and LeonB on 03/02/2017
  * @required jquery and jquery-ui
*/

angular.module('starter')

.controller('agendaCtrl', function($scope, $compile, $timeout, uiCalendarConfig) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        defaultView : 'month',
        header:{
          left: 'month, agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        firstDay : 1, //first day of the week displayed is the monday (1)
        weekends : false, //does not display weekend days
        businessHours: {
          // days of week. an array of zero-based day of week integers (0=Sunday)
          dow: [ 1, 2, 3, 4, 5 ], // Monday - Friday
          start: '9:00', // a start time (9am in this example)
          end: '18:00', // an end time (6pm in this example)
        },
        scrollTime : '09:00:00', //The display of the day start at 9 am (the begining of a work day)
        /* You can limit the view to the worked hours only
        minTime : '09:00:00',
        maxTime : '18:00:00', */
      }
    };

    //Feed $scope.eventSources with an array, but this array must contain an object called events that needs an other array with your events
    $scope.eventSources = [{
      events: [
        {title: 'All Day Event',start: new Date(y, m, 1)},
        {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
        {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
        {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
        {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
      ],
      color: '#008DC8',   // Set the color of one event
      textColor: 'white'
    }];
});
