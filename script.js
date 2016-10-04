  // Create a Paper.js Path to draw a line into it:
  // var path = new Path();
  // // Give the stroke a color
  // path.strokeColor = 'green';
  // var start = new Point(0, 0);
  // // Move to start and draw a line from there
  // path.moveTo(start);
  // // Note the plus operator on Point objects.
  // // PaperScript does that for us, and much more!
  // path.lineTo(start + [ 10000, 10000 ]);


//   Create a circle shaped path with its center at the center
// of the view and a radius of 30:
// var path = new Path.Circle({
//   center: view.center,
//   radius: 30,
//   strokeColor: 'black'
// });

// function onResize(event) {
//   // Whenever the window is resized, recenter the path:
//   path.position = view.center;
// }


// var myPoint = new Point();
// console.log(myPoint); // { x: 0, y: 0 }

// // Now let's change the x coordinate to 10...
// myPoint.x = 10;

// // ...and the y coordinate to x + 10
// myPoint.y = myPoint.x + 10;
// console.log(myPoint); // { x: 10, y: 20 }


// var mySize = new Size();
// console.log(mySize); // { width: 0, height: 0 }

// mySize.width = 10;
// mySize.height = mySize.width + 10;
// console.log(mySize); // { width: 10, height: 20 }

// We start by creating a rectangle of dimension and
// location set to 0
// var rect = new Rectangle();
// console.log(rect); // { x: 0, y: 0, width: 0, height: 0 }

// // Now we can for example define its size...
// rect.size = new Size(100, 200);

// // and its center
// rect.center = new Point(100, 100);
// console.log(rect); // { x: 50, y: 0, width: 100, height: 200 }

// var rect = new Rectangle();
// rect.point = { width: 100, height: 200 };
// console.log(rect); // { x: 100, y: 200, width: 0, height: 0 }

// rect.size = { x: 200, y: 400 };
// console.log(rect); // { x: 100, y: 200, width: 200, height: 400 }

// var point1 = new Point(50, 50);
// var point2 = new Point(110, 200);

// var x = point2.x - point1.x;
// // = 110 - 50 = 60
// var y = point2.y - point1.y;
// // = 200 - 50 = 150;

// var vector = point2 - point1;
// // = { x: 110, y: 200 } - { x: 50, y: 50 }
// // = { x: 60, y: 150 }

// console.log(vector.length);
// // 161.55494
// console.log(vector.angle);
// 68.19859

// var vector = new Point(24, 60);
// console.log(vector.length);
// // 64.62198

// vector.length = vector.length * 3;
// console.log(vector.length);
// // 193.86593

// var myPath = new Path();
// myPath.strokeColor = 'black';
// myPath.add(new Point(0, 0));
// myPath.add(new Point(100, 50));


// window.myPath = myPath;

// var myPath = new Path();
// myPath.strokeColor = 'black';
// myPath.add(new Point(0, 0), new Point(100, 50));

// // insert a segment between the two existing
// // segments in the path:
// myPath.insert(2, new Point(200, 300));

// var path = new Path();
// path.strokeColor = 'black';
// path.add(new Point(30, 75)); 
// path.add(new Point(30, 25)); 
// path.add(new Point(80, 25));
// path.add(new Point(80, 75));
// path.closed = true;

// path.fullySelected = true;

// var copy = path.clone();
// copy.fullySelected = true;
// copy.position.x += 100;
// copy.smooth();

// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.strokeColor = 'black';
// myCircle.selected = true;

// var myCircle = new Path.Circle(new Point(100, 70), 50);
// myCircle.strokeColor = 'black';
// myCircle.selected = true;

// myCircle.removeSegment(0);

// Create a triangle shaped path 
// var triangle = new Path.RegularPolygon(new Point(80, 70), 3, 50);
// triangle.fillColor = '#e9e9ff';
// triangle.selected = true;

// // Create a decagon shaped path 
// var decagon = new Path.RegularPolygon(new Point(200, 70), 5, 50);
// decagon.fillColor = '#e9e9ff';
// decagon.selected = true;

// var myPath = new Path({
//   segments: [[40, 115], [80, 180], [200, 20]]
// });

// myPath.strokeColor = '#ff0000';

// myPath.strokeWidth = 20;

// var myPath = new Path({
//   segments: [[40, 115], [80, 180], [200, 20]],
//   selected: true
// });

// myPath.strokeColor = '#ff0000';
// myPath.strokeWidth = 20;

// myPath.strokeCap = 'square';


// var myPath = new Path({
//   segments: [[40, 115], [80, 180], [200, 20]],
//   selected: true
// });

// myPath.strokeColor = '#ff0000';
// myPath.strokeWidth = 10;

// myPath.strokeJoin = 'round';

// var firstPath = new Path.Circle({
//   center: [80, 50],
//   radius: 35
// });

// firstPath.strokeColor = '#ff0000';
// firstPath.fillColor = 'blue';

// // secondPath doesn't have a strokeColor yet:
// var secondPath = new Path.Circle({
//   center: [160, 50],
//   radius: 35
// });

// // Apply the style of firstPath to that of secondPath:
// secondPath.style = firstPath.style;

// Change the current style of the project:
// project.currentStyle = {
//   strokeColor: '#000000',
//   fillColor: '#ff0000',
//   strokeWidth: 3
// };

// // This path will inherit the styles we just set:
// var firstPath = new Path.Circle({
//   center: [100, 100],
//   radius: 50
// });

// var secondPath = new Path.Circle({
//   center: [250, 100],
//   radius: 50
// });

// // Change the current stroke width and fill color of the project:
// project.currentStyle.strokeWidth = 8;
// project.currentStyle.fillColor = 'green';

// // This path will have a green fill and have a strokeWidth of 8pt:
// var thirdPath = new Path.Circle({
//   center: [500, 100],
//   radius: 50
// });

// var forthPath = new Path.Circle({
//   center: [700, 200],
//   radius: 50
// });

// Create a circle shaped path at { x: 80, y: 50 }
// with a radius of 35:
// var path = new Path.Circle({
//   center: [80, 50],
//   radius: 35
// });

// // Select the path, so we can inspect its segments:
// path.selected = true;

// // Create a copy of the path and move it by 150 points:
// var copy = path.clone();
// copy.position.x += 150;

// // Flatten the copied path, with a maximum error of 4 points:
// copy.flatten(11);

// Create a new path once, when the script is executed:
// var myPath = new Path();
// myPath.strokeColor = 'black';

// // This function is called whenever the user
// // clicks the mouse in the view:
// function onMouseDrag(event) {
//   // Add a segment to the path at the position of the mouse:
//   myPath.add(event.point);
// }

// var path = new Path.Circle({
//   center: view.middlePoint,
//   radius: 30,
//   strokeColor: 'black'
// });


// The amount of circles we want to make:
// var count = 150;

// // Create a symbol, which we will use to place instances of later:
// var path = new Path.Circle({
//   center: [0, 0],
//   radius: 10,
//   fillColor: 'white',
//   strokeColor: 'black'
// });

// var symbol = new Symbol(path);

// // Place the instances of the symbol:
// for (var i = 0; i < count; i++) {
//   // The center position is a random point in the view:
//   var center = Point.random() * view.size;
//   var placedSymbol = symbol.place(center);
//   placedSymbol.scale(i / count);
// }

// // The onFrame function is called up to 60 times a second:
// function onFrame(event) {
//   // Run through the active layer's children list and change
//   // the position of the placed symbols:
//   for (var i = 0; i < count; i++) {
//     var item = project.activeLayer.children[i];
    
//     // Move the item 1/20th of its width to the right. This way
//     // larger circles move faster than smaller circles:
//     item.position.x += item.bounds.width / 20;

//     // If the item has left the view on the right, move it back
//     // to the left:
//     if (item.bounds.left > view.size.width) {
//       item.position.x = -item.bounds.width;
//     }
//   }
// }

// // The amount of segment points we want to create:
// var amount = 5;

// // The maximum height of the wave:
// var height = 60;

// // Create a new path and style it:
// var path = new Path({
//   // 80% black:
//   strokeColor: [0.8],
//   strokeWidth: 30,
//   strokeCap: 'square'
// });

// // Add 5 segment points to the path spread out
// // over the width of the view:
// for (var i = 0; i <= amount; i++) {
//   path.add(new Point(i / amount, 1) * view.size);
// }

// // Select the path, so we can see how it is constructed:
// path.selected = true;

// function onFrame(event) {
//   // Loop through the segments of the path:
//   for (var i = 0; i <= amount; i++) {
//     var segment = path.segments[i];

//     // A cylic value between -1 and 1
//     var sinus = Math.sin(event.time * 3 + i);
    
//     // Change the y position of the segment point:
//     segment.point.y = sinus * height + 100;
//   }
//   // Uncomment the following line and run the script again
//   // to smooth the path:
//   path.smooth();
// }

// Create a circle shaped path at {x: 80, y: 50}
// with a radius of 35:

// var first = new Path.Circle(new Point(80, 50), 35);
// first.fillColor = "blue";

// var second = new Path.Circle(new Point(150, 50), 35);

// project.activeLayer.lastChild.fillColor = 'red';

// window.project = project;

// var center = new Point(160, 80);
// var circle = new Path.Circle(center, 50);

// // Select the second segment point of the path
// circle.segments[1].selected = true;

// // Select the third segment point of the path
// circle.segments[2].selected = true;

// // Create a circle path 140pt to the right:
// var circle2 = new Path.Circle(center + [140, 0], 50);
// circle2.fillColor = 'red';

// // Select it:
// circle2.selected = true;

// var circle = new Path.Circle(new Point(80, 50), 35);
// circle.fillColor = 'red';

// var circle2 = new Path.Circle(new Point(120, 50), 35);
// circle2.style = {
//   fillColor: 'blue',
//   strokeColor: 'green',
//   strokeWidth: 10
// };

// // Make circle2 50% transparent:
// circle2.opacity = 0.5;


// Create a white rectangle in the background
// with the same dimensions as the view:
var background = new Path.Rectangle(view.bounds);
background.fillColor = 'white';

var circle = new Path.Circle(new Point(80, 50), 35);
circle.fillColor = 'red';

var circle2 = new Path.Circle(new Point(120, 50), 35);
circle2.fillColor = 'blue';

// Set the blend mode of circle2:
circle2.blendMode = 'multiply';