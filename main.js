difference=0;
leftwristX=0;
rightwristX=0;

function setup() 
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 500);
    canvas.position(580 , 80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}
function draw() 
{
    background('#4AAA1A');
    text('Yurii',10,455);
    textSize(difference);
    fill('#EE59B6');
    stroke('#000000')
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftWristX = " + leftwristX + "rightWristX =  " + rightwristX + "difference = " + difference);
    }
}