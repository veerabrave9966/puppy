noseX=0;
noseY=0;
leftW=0;
rightW=0;
difference=0;

function setup (){
    canvas = createCanvas(550, 500);
    canvas.position(560, 70);
    
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("teal")

    document.getElementById("square_side").innerHTML = "Width and Height of a Square will be = " + difference +"px"
    fill('#42f598');
    stroke('#42f98');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log('PoseNet is initialized!')
}

function gotPoses(result)
{
    if(result.length>0)
    {
    console.log(result);
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y;
    console.log("noseX = " +"noseY = " + noseY);
    leftW = results[0].pose.leftWrist.x;
    rightW = results[0].pose.rightWrist.x;
    difference = leftW - rightW;
}}


