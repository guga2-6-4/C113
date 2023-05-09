function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    circle(400, 400, 100);
    circle(264, 300, 200);
    circle(600, 400, 50);
    rect(60, 160, 90, 90);
    rect(300, 30, 244, 50);
    rect(100, 100, 55, 200);
    ellipse(66, 66, 55, 100);
    ellipse(100, 254, 55, 500);
    ellipse(400, 500, 55, 600);
    circle(464, 486, 90);
    circle(240, 258, 275);
    circle(621, 413, 50);
    rect(134, 240, 34, 53);
    rect(341, 235, 244, 50);
    rect(226, 703, 754, 600);
    ellipse(408, 99, 55, 100);
    ellipse(200, 254, 55, 500);
    ellipse(500, 500, 55, 600);
}

function takeSnapshot(){
    save('studentName.png')
}