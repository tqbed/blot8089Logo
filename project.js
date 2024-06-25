// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

// Store drawings here

const finalLines = [];
const t = new bt.Turtle();

// Random variables for gear + circle

const xstCircle = bt.randIntInRange(45, 65);
const xstGear = xstCircle;
const ystCircle = bt.randIntInRange(55, 75);
const ystGear = ystCircle;

const cRadius = bt.randIntInRange(15, 25);

const gIRadius = bt.randIntInRange(30, 40);
const gORadius = bt.randIntInRange(30, 40);
const gNumTeeth = bt.randIntInRange(6, 16);

// Random Variables for flames

const xstFlames = xstCircle - 40;
const ystFlames = ystCircle + 70;
const fNumPoints = bt.randIntInRange(3, 10);
const flameHeight = bt.randIntInRange(60, 70);

// Function to draw the flames

// Function to draw the flames
function drawFlames(startX, startY, numPoints, flameHeight) {
  const flameWidth = 60; // Fixed width for flames
  t.jump([startX, startY]);
  t.down();

  for (let i = 0; i < numPoints; i++) {
    const x = startX + (i * flameWidth) / numPoints;
    const y = startY - Math.random() * flameHeight;
    t.goTo([x, y]);
  }

  t.goTo([startX + flameWidth, startY]);
  t.up();
}

// Function to draw a circle

function drawCircle(startX, startY, radius) {
  t.jump([startX, startY - radius]); 
  t.down();
  t.arc(360, radius); 
}

// Function to draw a gear

function drawGear(startX, startY, innerRadius, outerRadius, numTeeth) {
  const gear = [];
  const step = Math.PI / numTeeth;

  let path = [];

  for (let i = 0; i < numTeeth; i++) {
    const angle1 = i * 2 * step;
    const angle2 = angle1 + step / 2;
    const angle3 = angle1 + step;
    const angle4 = angle1 + 3 * step / 2;

    // Point 1: Inner radius
    const x1 = startX + innerRadius * Math.cos(angle1);
    const y1 = startY + innerRadius * Math.sin(angle1);
    path.push([x1, y1]);

    // Point 2: Outer radius, start of flat top
    const x2 = startX + outerRadius * Math.cos(angle2);
    const y2 = startY + outerRadius * Math.sin(angle2);
    path.push([x2, y2]);

    // Point 3: Outer radius, end of flat top
    const x3 = startX + outerRadius * Math.cos(angle3);
    const y3 = startY + outerRadius * Math.sin(angle3);
    path.push([x3, y3]);

    // Point 4: Inner radius
    const x4 = startX + innerRadius * Math.cos(angle4);
    const y4 = startY + innerRadius * Math.sin(angle4);
    path.push([x4, y4]);
  }

  path.push(path[0]); // Close the gear shape
  gear.push(path);
  return gear;
}

// Draw the Circle 
drawCircle(xstCircle, ystCircle, cRadius);

// Draw the Flames
drawFlames(xstFlames, ystFlames, fNumPoints, flameHeight);

// Create and add gear to final lines
const gearDrawing = drawGear(xstGear, ystGear, gIRadius, gORadius, gNumTeeth);
finalLines.push(...gearDrawing);

// Draw the R (I know this code is horrifying)
t.jump([90 + (xstCircle - 60), 10 + (ystCircle - 60)]);

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

t.jump([98.25 + (xstCircle - 60), 26 + (ystCircle - 60)]);

t.setAngle(310);
t.forward(21);

t.jump([90 + (xstCircle - 60), 10 + (ystCircle - 60)]);
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
