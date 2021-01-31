class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here");
      this.input2 = createInput("Enter Correct Option letter");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      this.title.html("The gamer quiz 😀");
      this.title.position(350, 0);
  
      this.question.html("Question:- Best car in forza motorsport 7? " );
      this.question.position(150, 80);
      this.option1.html("a: the games showcar (Porsche 911 gt2 rs) " );
      this.option1.position(150, 100);
      this.option2.html("b: Subaru brz forza edition" );
      this.option2.position(150, 120);
      this.option3.html("c: Porsche 918 spyder " );
      this.option3.position(150, 140);
      this.option4.html("d: Bugatti Chiron" );
      this.option4.position(150, 160);
  
      this.input1.position(150, 230);
      this.input2.position(350, 230);
      this.button.position(290, 300);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  