//Tracery example by Allison Parrish
//But we'll also create a box to hold our lines as they move
particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(1);
}

function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
	background(20,20,20,100);
}

//This draws the word with each mouse click
function mouseClicked() {
	var grammar = tracery.createGrammar(grammarSource); //set up tracery library
	grammar.addModifiers(tracery.baseEngModifiers); //set up English grammer properly (capitals and a/an)
	var output = grammar.flatten("#origin#"); //creates sentence from grammar source
	let p = new Particle(mouseX,mouseY,output);
    particles.push(p);

}

// grammerSource is generated using:
// http://tracery.io/ 
// See the tutorial here: http://www.crystalcodepalace.com/traceryTut.html
var grammarSource = {
	"origin": [
		"#suggestion# #action# #thing# to #move#.\n If that doesn't work, you could #alsotry# #action# #thing#\n or I could #supportaction# #thing# to #resaction# #resobject#."
	],
	"suggestion": [
		"Have you tried",
		"You should try",
		"May I suggest",
		"What could work is"
	],
	"action": [
		"rebooting",
		"cycling",
		"googling",
		"submitting",
		"updating",
		"meditating on",
		"power cycling",
		"adjusting",
		"reinstalling"
	],
	"thing": [
		"your ticket",
		"your consciousness ",
		"the appropriate forms",
		"your attitude",
		"the hard drive",
		"all of your files",
		"your expectations",
		"all of your work"
	],
	"move": [
		"the most recent version",
		"a more stable version",
		"the original format",
		"the admin approvals queue",
		"a redundant copy",
		"a new repository",
		"a shared drive"
	],
	"alsotry": [
		"also try",
		"pivot to",
		"look into",
		"maybe",
		"resort to",
		"consider"
	],
	"supportaction": [
		"escalate",
		"transfer",
		"take control of",
		"disregard",
		"overlook"
	],
	"resaction": [
		"close",
		"timeout",
		"pass off",
		"resolve",
		"forget about",
		"indefinitely pause"
	],
	"resobject": [
		"this ticket",
		"your request",
		"your problem"
	]
};

class Particle {
  constructor(x,y,text) {
		//This sets the x value to mouse position
    this.x = x;
		//This keeps the y at mouse position
    this.y = y;
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try limiting it to + or -
    this.vy = random(-1, 1);
		//This sets the text size to be consistent
		this.size = 30;
		//This sets the current line to the particle
		this.text = text;
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return (this.width < 0 || this.width > windowWidth);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    noStroke();
		textSize(this.size);
		//Try any web safe font
		textFont("Console");
		//This centers the text on the click
		textAlign(CENTER, CENTER);
		//This sets the fill to a static color - can you make it random?
		//You can also add the outline
    //stroke(255);
		//This keeps R and G values at 255 to allow for yellows
		//Try changing it!
    fill("white");
		//This positions the text
    text(this.text, this.x, this.y);
  }
}
