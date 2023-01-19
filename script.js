noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width And height of text will be = " + difference +"px";
        fill('#F90093'); 
        stroke('#F90093');
        textSize(difference);
        text('My name is Aryan and i love to code websites. I have a hobby of playing basketball and the worst part is i have to go to school #sadlife', noseX, noseY);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX+" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

    }
}
