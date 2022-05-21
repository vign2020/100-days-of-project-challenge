const time=document.querySelector(".btn1")
// const time2=document.querySelector(".text")
const time2=document.querySelector(".showtime")

const container=document.querySelector(".mainsec")
const question=document.querySelector(".question")
const op1=document.querySelector(".op1")
const op2=document.querySelector(".op2")
const op3=document.querySelector(".op3")
const op4=document.querySelector(".op4")
const ans=document.querySelector(".answer")
const viewscore=document.querySelector(".viewscore")
const showhighscore=document.querySelector(".showscore")
const name=document.querySelector(".area")
const submit=document.querySelector(".submit")
const finalscore=document.querySelector(".finalscore")
const buttons=document.querySelector(".buttons")
const people=document.querySelector(".people")
const goback=document.querySelector(".goback")


var Highscores= new Map();

const questions=[
    {
    ques:"what is 1+1",
    opt1:2,
    opt2:3,
    opt3:4,
    opt4:5,
    answer:"opt1"
    
    },
    {
    ques:"what is 2+2",
    opt1:10,
    opt2:9,
    opt3:4,
    opt4:8,
    answer:"opt3"
    },
    {
    ques:"what is 3+3",
    opt1:12,
    opt2:19,
    opt3:24,
    opt4:6,
    answer:"opt4"
    
    },
    {
    ques:"what is 4-4",
    opt1:0,
    opt2:12,
    opt3:9,
    opt4:6,
    answer:"opt1"
    
    },
    {
    ques:"what is 8+3",
    opt1:121,
    opt2:129,
    opt3:11,
    opt4:6,
    answer:"opt3"
    
    },
    {
    ques:"what is 3*3*0",
    opt1:0,
    opt2:3,
    opt3:4,
    opt4:5,
    answer:"opt1"
    
    },
    {
    ques:"what is 2 square",
    opt1:10,
    opt2:9,
    opt3:4,
    opt4:8,
    answer:"opt3"
    },
    {
    ques:"what is root 36",
    opt1:12,
    opt2:19,
    opt3:24,
    opt4:6,
    answer:"opt4"
    
    },
    {
    ques:"what is 9+9-18",
    opt1:0,
    opt2:12,
    opt3:9,
    opt4:6,
    answer:"opt1"
    
    },
    {
    ques:"what is 8+3-22 (write abs value)",
    opt1:121,
    opt2:129,
    opt3:11,
    opt4:6,
    answer:"opt3"
    
    },



];

const timer=50
var i=timer
score=0
currques=0;

const showtime=()=>{


// var i=timer
// score=0
// currques=0;


    const interval=setInterval(() => {
    
            
      

        if(i>0 && currques<=9){
            i=i-1;
            time2.innerHTML=`Time: ${i}`;
        }
       
        else{
            
            clearInterval(interval);
            Showscore();
        }
    }, 1000);
 

}



  //to show the next question
  const loadNext=()=>{
    question.style.display="block";
    op1.style.display="block";
    op2.style.display="block";
    op3.style.display="block";
    op4.style.display="block";

    question.textContent=questions[currques].ques;
    op1.textContent=questions[currques].opt1
    op2.textContent=questions[currques].opt2
    op3.textContent=questions[currques].opt3
    op4.textContent=questions[currques].opt4
      
  }

  const show=()=>{
    time.style.display="none"
    container.style.display="none" 
}



const Showscore=()=>{
    question.style.display="none";
    op1.style.display="none";
    op2.style.display="none";
    op3.style.display="none";
    op4.style.display="none";
    ans.style.display="none";

    //display the highscore window 
    viewscore.style.display="block";
    showhighscore.textContent=`Your final score is ${score}`
    time2.textContent="time over!!"
    console.log(score)

    // get the name
    
    submit.addEventListener("click",()=>{
 
        Highscores.set(name.value,score)
       
 

        viewscore.style.display="none"

        finalscore.style.display="block"
        buttons.style.display="block"
        console.log(Highscores)


        // people.textContent=name.value
        for (const [key, value] of Highscores.entries()) {

            let createnew2=document.createElement('li');
            createnew2.textContent=value;

            people.appendChild(createnew2);

            let createnew=document.createElement('li');
            createnew.textContent=key;

            // people.appendChild(`${createnew} ${createnew2}`);
            people.textContent=`${value} ${key}`

      

            // console.log(key)

          }
     



    })
    goback.addEventListener("click",()=>{
        time.style.display="block"
        container.style.display="block" 

        finalscore.style.display="none"
        people.style.display="none"
        buttons.style.display="none"

        some();



    })

}
  //to check if the answer is right
  const checkans=(op)=>{
        if(op===questions[currques].answer){
            ++score;
            console.log("correct!")
            ans.textContent="correct!!"

        }
        else{
            i-=10;
            // wrong();
           
            console.log("incorrect!")
            ans.textContent="incorrect!!"
        }
        currques+=1
       if(currques<=9 && i>0){
           loadNext()
       }
       else{
           Showscore()
       }
  }

      //to allow the clcicking of options for the questions
      const seeques=()=>{
         

        op1.addEventListener("click",()=>{
          checkans("opt1");
      })
      op2.addEventListener("click",()=>{
          checkans("opt2");
      })
      
      op3.addEventListener("click",()=>{
          checkans("opt3");
      })
      
      op4.addEventListener("click",()=>{
          checkans("opt4");
      })
      }



const some=()=>time.addEventListener('click', e=>{
   
    showtime();
    show();
    loadNext();
    seeques();

        });

        some();
