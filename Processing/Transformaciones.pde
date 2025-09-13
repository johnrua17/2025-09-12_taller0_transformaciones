void setup() {
  size(600, 600);
  rectMode(CENTER);
}

void draw() {
  background(240);
  
  float t = millis() / 1000.0; // tiempo en segundos

  pushMatrix();
  
  // Traslación oscilante
  float tx = width/2 + sin(t) * 100;
  float ty = height/2 + cos(t) * 100;
  translate(tx, ty);
  
  // Rotación en el tiempo
  rotate(t);
  
  // Escalado dinámico
  float s = 1 + 0.5 * sin(t*2);
  scale(s);
  
  // Figura
  fill(200, 100, 255);
  stroke(50);
  strokeWeight(2);
  rect(0, 0, 100, 100);
  
  popMatrix();
}
