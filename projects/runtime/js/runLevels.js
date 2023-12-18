var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
   
function createSawBlade(x,y) {

  var hitZoneSize = 25;
    var damageFromObstacle = 1300;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
}
createSawBlade(1000,225);
createSawBlade(2000,210);
createSawBlade(350,230);
createSawBlade(1500,250);
createSawBlade(1700,280);
createSawBlade(1900,225);
createSawBlade(2100, 240);
createSawBlade(2400,210);
createSawBlade(900,240);
createSawBlade(3000,260);
function createEnemy(x,y) {var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "blue");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.rotationalVelocity = -1;
enemy.onPlayerCollision = function () {game.changeIntegrity(-34)};
enemy.onProjectileCollision = function () {game.increaseScore(100);
  enemy.fadeOut();
};
};
createEnemy(400, groundY - 10);
createEnemy(800, groundY - 100);
createEnemy(1200, groundY - 50);
function  createReward(x,y) {var reward = game.createGameItem("reward", 25);
var yellowSquare = draw.rect(50, 50, "green");
yellowSquare.x = -25;
yellowSquare.y = -25;
reward.addChild(yellowSquare);
reward.x = x;
reward.y = y;
game.addGameItem(reward);
reward.velocityX = -1;
reward.rotationalVelocity = -1;
reward.onProjectileCollision = function () {game.increaseScore(-100);
  reward.onProjectileCollision = reward.fadeOut();
  reward.fadeOut();
};
};
createReward(500, groundY);
createReward(700, groundY -  40);
createReward(1100, groundY- 100);
function  createMarker(x,y) {var marker = game.createGameItem("marker", 25);
var greenSquare = draw.rect(50, 50, "yellow");
greenSquare.x = -25;
greenSquare.y = -25;
marker.addChild(greenSquare);
marker.x = x;
marker.y = y;
game.addGameItem(marker);
marker.velocityX = -1;
marker.rotationalVelocity = -60;
marker.onProjectileCollision = function () {game.increaseScore(-100);
  marker.onProjectileCollision = startLevel ();
};
};
createMarker(2100,groundY - 50)
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
