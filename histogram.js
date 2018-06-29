var getPixels = require("get-pixels")
var ndarray = require("ndarray")

var fs = require('fs');


 
getPixels("my-image.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  console.log("got pixels", pixels.shape.slice())
 //scan from right to left for B
 var pixelB="";
 var pixelR="";
 var pixelG="";
 for(var j = 0; j< 1920; j++)
 {
   
        pixelR = pixelR + pixels.get(j,668,0);
        pixelR = pixelR + "\n";

        pixelG = pixelG + pixels.get(j,668,1);
        pixelG = pixelG + "\n";

        pixelB = pixelB + pixels.get(j,668,2);
        pixelB = pixelB + "\n";
   
    
  }
console.log(pixelB);

  fs.writeFile('redHistogram.txt', pixelR, function (err) {
    if (err) throw err;
    console.log('R Saved!');
  });

  fs.writeFile('greenHistogram.txt', pixelG, function (err) {
    if (err) throw err;
    console.log('G Saved!');
  });
    fs.writeFile('blueHistogram.txt', pixelB, function (err) {
        if (err) throw err;
        console.log('B Saved!');
      });
})