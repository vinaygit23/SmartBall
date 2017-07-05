
    angular.module('smartchart',['AngularChart'], function( $routeProvider, $locationProvider ){
        $routeProvider.when('/',{
            template: '<chart title="Smart Ball" xData="lineChartXData" yData="lineChartYData" xName="X" yName="Rotations" subtitle="Analysis of Number of Rotations of a Ball"></chart>',
            controller: 'MainCtrl'
            })
        
    })
 