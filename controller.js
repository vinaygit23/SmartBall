       angular.module('smartchart').controller('MainCtrl',function($scope, $http)
        {
         $http.get('https://ambh7sjqg3.execute-api.us-west-2.amazonaws.com/prod/getsensordata').then(function(data){
                               
    //Y-Axis Data
                            var Data = data.data.status;
                             $scope.yData =[
                                    {
                                    name:"Rotation",
                                    data:[]
                                    }
                                ]  
                            
                              for (var i = 0 ; i < Data.length -2; i++)
                                 {
                                        $scope.yData[0].data.push(Data[i].roll); 
                                 }  
                                         $scope.lineChartYData = $scope.yData;


    //Count-Cycle

                                   $scope.cycle=0;
                                    for (var i = 0 ; i < Data.length - 2; i++) 
                                    {
                                        if((Data[i].roll)<0)
                                        {
                                            console.log("First If"+Data[i].roll);
                                            flag=0;

                                        }
                                        else{
                                            flag=1;
                                            console.log("Second If"+Data[i].roll);

                                        }
                                        if(flag)
                                        {

                                            for(var j=i+1;j<Data.length-2;j++)
                                            {
                                                if(Data[j].roll<0){
                                                     console.log("J"+Data[j].roll);
                                                    $scope.cycle++;
                                                    i=j;
                                                    break;

                                                }
                                            }     
                                            console.log("Cycle Count "+$scope.cycle);
                                        }
                                    
                                 } 

// X-Axis Data     
                                var Data1 = data.data.status;
                                $scope.xData =[];
                                for (var j = 0 ; j < Data1.length - 2; j++)
                                 {
                                       $scope.xData[j]=Data1[j].elapsed_time
                                 }
                                   $scope.lineChartXData = $scope.xData;
      
         }), function(err){
                        console.log(err);
            }
		
        });




// // Manual Checker

//         function MainCtrl($scope, $http){
    

//             $http.get('https://ambh7sjqg3.execute-api.us-west-2.amazonaws.com/prod/getsensordata').then(function(data){
//                                 console.log(data);
//                                 var Data = data.data.status;
//                                 //var mydata = JSON.parse(Data);
//                                 console.log(Data);
//                                 console.log(Data.length);
//                               /*  $scope.yData ={
//                                     name:"Y-axis",
//                                     data:[]
//                                 }  */
//                                  $scope.yData =[
//                                     { name:"Y-axis",
//                                     data:[] 
//                                     }
//                                 ]    
//                                 for (var i = 0 ; i < Data.length - 2; i++) {
//                                     console.log(Data[i].roll);
//                                     $scope.yData[0].data.push(Data[i].roll)
//                                 }

//                                Data[0].roll=2;
//                                Data[1].roll=1;
//                                Data[2].roll=1;
//                                Data[3].roll=4;
//                                Data[4].roll=3;
//                                Data[5].roll=2;
//                                Data[6].roll=2;
//                                Data[7].roll=2;
//                                Data[8].roll=1;
//                                Data[9].roll=3;
//                                Data[10].roll=3;
                                  // Data[11].roll=3;
                                  // Data[12].roll=3;
                                  // Data[13].roll=3;
                                  // Data[14].roll=3;
//                                     var cycle=0;
//                                     for (var i = 1 ; i < Data.length - 2; i++) {
//                                         if((Data[i].roll)<0)
//                                         {
//                                             flag=0;

//                                         }
//                                         else{
//                                             flag=1
//                                         }
//                                         if(flag){

//                                             for(var j=i+1;j<Data.length-2;j++){
//                                                 if(Data[j].roll<0){
//                                                     cycle++;
//                                                     i=j;
//                                                     break;

//                                                 }
//                                             }
//                                             console.log("count "+cycle);

//                                         }
                                    
//                                 }

//                                /* for (var i = 0 ; i < Data.length - 2; i++) {
//                                     console.log(Data[i].gyrox);
//                                     $scope.yData[1].data.push(Data[i].gyrox)
//                                 }*/
//                                 console.log($scope.yData);
//                                 $scope.lineChartYData = $scope.yData;
//                                 console.log($scope.lineChartYData);
//                                 //$scope.lineChartXData = [1,2,3,4,5,6,7,8,9,10];
//                 }), function(err){
//                         console.log(err);
//             }
            
        
//         }
