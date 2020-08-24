let song;
let amplitude;
let cT;
let cD;
let r = 255;
let g = 255;
let b = 255;
function setup() {
  createCanvas(windowWidth, windowHeight);
  soundFormats("mp3");
  //console.log("loading song");
  song = loadSound("AshaPasham.mp3", songReady);
  amp = new p5.Amplitude();
}
function songReady() {
  console.log("ready");
}
function draw() {
  background(r, g, b);
  let vol = amp.getLevel();
  noiseHeight = map(vol, 0, 1, 0, height);

  noiseWidth = map(vol, 0, 1, 0, width);

  let noiseVal = noise(noiseHeight, noiseWidth);
  //background(noiseVal,noiseVal,noiseVal);

  //bg colur
  if (song.isPlaying()) {
    r = map(noiseWidth, 0, width, 0, 255);
    g = map(noiseHeight, 0, width, 0, 255);
    b = map(noiseWidth, 0, width, 0, 255);
    noStroke();
    let col = color(98, 225, 215);
    fill(col);
    //let noiseVal = noise(noiseHeight,nosieWidth);
    cT = song.currentTime();
    cD = song.duration();
    arcStart = map(song.currentTime(), 0, song.duration(), 0, 2 * PI);
    fill(col);
    strokeWeight(20);
    arc(width / 2, height / 2, height / 2, height / 2, arcStart, 2 * PI, PIE);

    //ellipse(mouseX,mouseY,noiseWidth,noiseWidth);

    //triangle(0,height,width/2,noiseHeight,width,height);
  } else {
    let r = map(noiseWidth, 0, width, 0, 255);
    let g = map(noiseWidth, 0, width, 0, 255);
    let b = map(noiseWidth, 0, width, 0, 255);
    noStroke();
    let col = color(255, 255, 255);
    fill(col);
    //let noiseVal = noise(noiseHeight,nosieWidth);
    arcStart = map(cT, 0, cD, 0, 2 * PI);
    fill(col);
    strokeWeight(20);
    arc(width / 2, height / 2, height / 2, height / 2, arcStart, 2 * PI, PIE);

    //ellipse(mouseX,mouseY,noiseWidth,noiseWidth);
  }

  song.setVolume(1);
}
function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
