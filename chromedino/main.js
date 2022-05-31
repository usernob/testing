/*
  * credit https://dev.to/official_fire/making-the-chrome-dino-game-play-itself-using-javascript-2j8n
  * I just edited it a bit to make it interesting in my opinion.
*/

function autoplay() {
  setTimeout(function () {
    this.Runner.prototype.gameOver = () => {
      console.log('Ouch')
    };
    myinstance = this.Runner.instance_;
    myinstance.setSpeed(5);
    myobstacles = myinstance.horizon.obstacles;
    if (myinstance.tRex.ducking) {
      myinstance.tRex.setDuck(true);
    }
    if (myobstacles.length > 0) {
      action = "JUMP";
      obstacle_type = myobstacles[0].typeConfig.type;
      if (obstacle_type == "CACTUS_SMALL" || obstacle_type == "CACTUS_LARGE") {
        action = "JUMP";
      } else if (obstacle_type == "PTERODACTYL") {
        console.log("Pterodactyl");
        console.log(myobstacles[0].yPos);
        if (myobstacles[0].yPost >= 50)
          action = "DUCK";
      }
      if (myobstacles[0].xPos <= 100) {
        if (action == "JUMP") {
          curr_speed = myinstance.currentSpeed;
          myinstance.tRex.startJump(curr_speed);
        } else if (action == "DUCK") {
          myinstance.tRex.setDuck(true);
        }
      }
    }
    autoplay();
  }, 10);
}
