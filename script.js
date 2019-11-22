/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, y, x, size) {
  this.image = image;
  this.top = top;
  this.x = x;
  this.y = y;
  this.size = size;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.y + 'px; left:' + this.x + 'px;position:absolute;" />';
  }

  this.moveRight = function (speed) {
    this.x += speed;
   
  }

}

var hero = new Hero('handsome.png', 20, 30, 200);

document.addEventListener('keydown', function (event) {
  console.log('KEY DOWN');
  console.log(event);

  if (event.keyCode == 37) {
    hero.x -= (speed + 20);
  }
  if (event.keyCode == 39) {
    hero.x += speed;
  }
  if (event.keyCode == 38) {
    hero.y -=speed;
  }
  if (event.keyCode == 40) {
  hero.y += speed; 
  }
  if (event.keyCode == 70) {
    speed +=speed;
    console.log('đẹp hơn nữa a ơiiiiii!')
  }
  if (event.keyCode == 65) {
    speed -=1;
    console.log('bớt đẹp lại em chết mất!!!')

  }
 } );
let speed = 2;

function start() {
  
  if (hero.x < window.innerWidth - hero.size)  {
    hero.moveRight(speed);
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  requestAnimationFrame(start);
}

start();