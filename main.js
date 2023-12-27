function preload() {

}


function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

   
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("cyan")
    stroke("green")
    circle(30, 30, 50);
    circle(600, 30, 50);
    circle(30, 450, 50);
    circle(600, 450, 50);

    rect(35, 15, 550, 30);
    rect(15, 50, 30, 385);
    rect(589, 50, 30, 385);
    rect(45, 420, 530, 30);


  

}


function take_snapshots() {
    save('student_name.png');
}


