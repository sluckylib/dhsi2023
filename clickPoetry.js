//Let's start by adapting our drawable text to fade
//To make it more readable, we'll just generate one word / click
//Try changing the lines, colors, and alphas!
//Again, changing lines is just like Tracery grammars
lines=["make a mark","and another one","no mistakes","this is easy","this is difficult","keep going","more","push the text","pull the code","press on"]
//We will use i to track which line we just showed
i=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
//Try changing the initial background color
	background(0);
}
function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	background(0,0,0,1);
}
//This draws the word with each mouse click
function mouseClicked() {
	//This sets the text size to random - try changing more properties
	textSize(random(10,50));
	//Try any web safe font
	textFont("Courier");
	//This centers the text on the click
	textAlign(CENTER, CENTER);
	//This sets the fill to a static color - can you make it random?
	fill("red");
	//This uses the next line at the mouse position
	text(lines[i], mouseX, mouseY);
	if (i<(lines.length-1)) {
		i++;
	}
	else {
		i=0;
	}
}