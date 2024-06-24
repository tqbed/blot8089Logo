// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// Store drawings here

const finalLines = []
const t = new bt.Turtle();

// Random variables for gear + circle

const xstCircle = bt.randIntInRange(55, 75)
const xstGear = bt.randIntInRange(0, 10)
const ystCircle = bt.randIntInRange(45, 65)
const ystGear = bt.randIntInRange(0, 10)
const cRadius = bt.randIntInRange(10, 20)

// Draw the starting circle 

// Function to draw a circle

function drawCircle(startX, startY, radius) {
  t.jump([startX, startY - radius]); 
  t.down();
  t.arc(360, radius); 
}

drawCircle(xstCircle, ystCircle, cRadius)


// Draw the R (I know this code is horrifying) 

t.jump([90, 10]);

t.setAngle(90);

t.down();
t.forward(13);
t.right(90);
t.forward(5);
t.left(90);
t.forward(6);
t.left(90);
t.forward(5);
t.right(90);
t.forward(1);


t.right(180);
t.up();
t.forward(4);
t.left(90);
t.forward(8.25);
t.down();

t.forward(4.25);
t.arc(180, 7.5);

t.forward(12.5);

t.right(-90);
t.forward(11);

t.jump([98.25, 26]);

t.setAngle(310);
t.forward(21);

t.jump([90, 10]);
t.setAngle(180);
t.forward(5);

t.right(90);
t.forward(13);

t.left(90);
t.forward(5);
t.right(90);
t.forward(6);
t.right(90);
t.forward(5);
t.left(90);

// Draw the finished product 
drawLines(t.lines());
drawLines(finalLines);