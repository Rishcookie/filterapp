nose_x=0;
nose_y=0;
function preload(){
colwn_nose=loadImage('https://i.postimg.cc/VvJb0s5w/mustache.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}


function modelloaded(){
    console.log('poseNet is initialized');
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x-30;
    nose_y=results[0].pose.nose.y-13;
    console.log("nose x="+nose_x);
    console.log("nose y="+nose_y);
}

}

function draw(){
image(video,0,0,300,300);
//fill(255,0,0);
//stroke(255,0,0);
//circle(nose_x,nose_y,30);
image(colwn_nose,nose_x,nose_y,70,60);
}

function take_snapshot(){
    save('myfilterimage.png');
}