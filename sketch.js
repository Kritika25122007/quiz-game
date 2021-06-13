var canva,backgroundImg;
var gameState=0,contestantCount;
var database;
var quiz,contestant,question,answer;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
 // database = firebase.database();
  if(contestantCount===2){
    quiz.update(1)
  }
if(gameState===1){
  clear()
  quiz.play()
}
  
}
