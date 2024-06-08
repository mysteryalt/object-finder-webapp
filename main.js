status = "";
objects = [];

function setup() {
canvas = createCanvas(380 , 380)
video = createCapture(VIDEO)
canvas.center();
video.size(380,380);
video.hide()

}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detetcting Object";
   name = document.getElementById("input").value;

}

function modelLoaded() {
    console.log("model Loaded")
    status = true;
}

function draw() {
    image(video, 0, 0, 380 , 380);
    if (status != "") {
        objectDetector.detect(video , gotResult)
        for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";
        document.getElementById("objectfound").innerHTML = "No. of Objects Detetcted Are : " + objects.length;
        
        }
    }
    
}

function gotResult(error, results) {
    
    if (error) {
        console.log(error);
    }
    
    console.log(results);
    objects = results;
}