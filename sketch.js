
let song;
let amplitude;
function setup() {
  createCanvas(windowWidth,windowHeight);
  soundFormats('mp3');
  //console.log("loading song");
  song= loadSound("AshaPasham.mp3",songReady);
  amp = new p5.Amplitude();

}
function songReady()
{
  song.play();
}
function draw() {
  background(0);
   let vol=amp.getLevel();
  noiseHeight=map(vol,0,1,0,height);
    
    noiseWidth=map(vol,0,1,0,width);
    
  let noiseVal = noise(noiseHeight,noiseWidth);
 //background(noiseVal,noiseVal,noiseVal);
 
  //bg colur
  if(song.isPlaying()){

 
    let r=map(noiseWidth,0,width,0,255);
     let g=map(noiseWidth,0,width,0,255);
     let b=map(noiseWidth,0,width,0,255);
   noStroke();
    let col=color(255, 255, 0, 1);
    fill(255, 255, 0, 1);
    //let noiseVal = noise(noiseHeight,nosieWidth);
    arcStart=map(song.currentTime(),0,song.duration(),0,2*PI);
    fill(255);
    strokeWeight(20);
    arc(height/2, width/2, height/2,height/2, arcStart, 2*PI,PIE);

    //ellipse(mouseX,mouseY,noiseWidth,noiseWidth);
    
    //triangle(0,height,width/2,noiseHeight,width,height);
  
  }
  
  song.setVolume(1);
}
function mousePressed() {
if (song.isPlaying())
    {
      song.pause();
    }
  else
  {
    song.play();
  }
    }
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
