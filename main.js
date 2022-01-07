leftWristx=0;
leftWristY=0;
rightWristx=0;
rightWristy=0;
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResult);
}


function preload(){
    song=loudsound("music.mp3");
    song=loudsound("music2.mp3");
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function draw(){
    image(video,0,0,500,400);
    fill("#ff0000");
    stroke("#ff0000");
    circle(leftWristx,leftWristY,20);
    fill("#ff0000");
    stroke("#ff0000");
    circle(rightWristx,rightWristy,20);
    if(scorerightWrist>0.2){


}
}
