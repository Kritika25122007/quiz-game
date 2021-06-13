class Contestant {
  constructor(){
    this.name = null
    this.distance=0
    this.index=null
  //  this. button = createButton('Submit');
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",function(data){
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount:count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer,
    });
  }
  static getcontestantInfo(){
     var contestantInfoRef=database.ref('contestants');
     contestantInfoRef.on("value",(data)=>{
     allcontestants = data.val()
     });

  }
  
}
