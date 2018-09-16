console.log("javascript is go.");
$(".testDiv").html("jquery works!");

//import GyroNorm from 'gyronorm';
var GyroNorm = require('gyronorm');


var gn = new GyroNorm();

gn.init().then(function(){
  gn.start(function(data){
    $(".testDiv").html("this is the device orientation absolute value? :"+data.do.absolute);
    console.log("We got insite the callback of GyroNorm");
    // Process:
    // data.do.alpha	( deviceorientation event alpha value )
    // data.do.beta		( deviceorientation event beta value )
    // data.do.gamma	( deviceorientation event gamma value )
    // data.do.absolute	( deviceorientation event absolute value )

    // data.dm.x		( devicemotion event acceleration x value )
    // data.dm.y		( devicemotion event acceleration y value )
    // data.dm.z		( devicemotion event acceleration z value )

    // data.dm.gx		( devicemotion event accelerationIncludingGravity x value )
    // data.dm.gy		( devicemotion event accelerationIncludingGravity y value )
    // data.dm.gz		( devicemotion event accelerationIncludingGravity z value )

    // data.dm.alpha	( devicemotion event rotationRate alpha value )
    // data.dm.beta		( devicemotion event rotationRate beta value )
    // data.dm.gamma	( devicemotion event rotationRate gamma value )
  });
}).catch(function(e){
  $(".testDiv").html("apparently deviceOrientation and DeviceMotion are not supported by your browser");
  // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
});
