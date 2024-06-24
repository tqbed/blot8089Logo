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

t.jump([50, 10]);

t.setAngle(90);

t.down();
t.forward(20);

t.right(90);
t.forward(15);

t.arc(180, 7.5);

t.forward(15);

t.right(-90);
t.forward(15);

t.jump([50, 30]);

t.setAngle(315);
t.forward(27.5);

drawLines(t.lines());

drawLines(finalLines);