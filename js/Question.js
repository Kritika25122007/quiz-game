class Question {
    constructor() {
      this. input1= createInput("Enter Your Name");
     
      this. input2= createInput('Enter Correct Option No.');
      this.button= createButton("Sumit");
      this.question= createElement('h3')
      this.option1= createElement('h4')
      this.option2= createElement('h4')
      this.option3= createElement('h4')
      this.option4= createElement('h4')
    }
   hide(){
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.title.hide();
   }
    display(){
      
     this. title.html("My Quiz Game");
     this. title.position(350, 0);

      this.question.html("Question:- Which of the following has no Skeleton at all?")
      this.question.position(150,80) 

      this.option1.html("1: Star fish")
      this.option1.position(150,100)

      this.option2.html("2: Sponge")
      this.option2.position(150,120)

      this.option3.html("3: Jelly fish")
      this.option3.position(150,140)

      this.option4.html("4: Silver fish")
      this.option4.position(150,160)
      
     console.log("I am in Question.js") 
      
     this.input.position(150, 230);
     this.input2.position(350,230);
     this.button.position(290, 300);
  
      this.button.mousePressed(()=>{
        this.title.hide()
        this.input1.hide()
        this.input2.hide()
        this.button.hide()

        contestant.name=this.input1.value()
        contestant.answer=this.input2.value()
        contestantCount+=1
        contestant.index=contestantCount
        contestant.update()
        contestant.updateCount(contestantCount)
      });
  
    }
  }
  