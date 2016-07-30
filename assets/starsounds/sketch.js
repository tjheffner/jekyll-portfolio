var m0, m1, m2, m3, m4, m5, maps;
var star, x, y, S, z;
var playing = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);

  m0 = loadImage("img/map1.jpg");
  m1 = loadImage("img/map2.gif");
  m2 = loadImage("img/map3.gif");
  m3 = loadImage("img/map4.jpg");
  m4 = loadImage("img/map5.jpg");
  m5 = loadImage("img/map6.jpg");

  maps = [m0, m1, m2, m3, m4, m5];

  star = new p5.Oscillator();
    star.setType('sine');
    star.freq(240);
    star.amp(0);
    star.start();
}

function draw(){
}

function mouseClicked() {
    x = mouseX;
    y = mouseY;
    S = get(x, y);
    z = red(S)+green(S)+blue(S);

  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (z >= 25) {
      if (!playing) {
        // ramp amplitude to 0.5 over 0.1 seconds
        star.freq(z + 100);
        star.amp(0.5, 0.05);
        playing = true;
        star.amp(0, 0.5);
      } else {
        // ramp amplitude to 0 over 0.5 seconds
        star.amp(0, 0.5);
        playing = false;
      }
    }
  }
}

/* ANY KEYPRESS CHANGES BG IMAGE */
function keyPressed(){

  var randMap = int(random(maps.length));
  image(maps[randMap], 0, 0, windowWidth, windowHeight);
}
