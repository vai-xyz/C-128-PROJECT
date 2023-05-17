music_1="";
music_2= "";
LeftWristX="";
LeftWristY="";
RightWristX="";
RightWristY="";

function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(500,200);

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is intialized");
}
function draw(){
    image(video,0,0,500,400);
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        RightWristX=results[0].pose.rightWrist.x;
        RightWristY=results[0].pose.rightWrist.y;
        console.log("RightWristX="+RightWristX+"RightWirstY="+RightWristY);

        LeftWristX=results[0].pose.leftWrist.x;
        LeftWristY=results[0].pose.leftWrist.y;
        console.log("LeftWristX="+LeftWristX+"LeftWristY= "+LeftWristY);
        }
}