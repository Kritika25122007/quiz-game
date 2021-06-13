class Quiz {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCount.exists()){
        contestantCount=contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  
}
play(){
  question.hide()
  background("yellow")
  fill(0)
  textSize(30)
  text("Result Of Quiz",340,50)
  text('________________________',320,65)
  Contestant.getPlayerInfo();
  if(allContestant !==undefined){
    debugger;
    var display_Answers=230
    fill("blue")
    textSize(20)
    text("contestant who gave the correct answer are highlighted in green color",130,230)

    for(var plr in allContestant){
      debugger;
      var correctAns="2";
      if(correctAns=== allContestant[plr].answer)
        fill('green')
        else
        fill('red')
        display_Answers+=30
        textSize(20)
        text(allContestant[plr].name + ":" + allContestant[plr].answer,250,display_Answers)
      }
    }
  }
}

