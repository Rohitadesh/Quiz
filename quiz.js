let question=document.querySelector(".question");
let choice=document.querySelectorAll(".answer");
let number=document.getElementsByTagName("h1");
let user={
    Q1:"Q1.what is National animal of india?",
    options:{A:"Tiger",
    B:"Lion",
    c:"cheetah",
    D:"cheetah"}
}

let Answerq1="Tiger";
let score=0;
let btn=document.querySelector(".button");
question.innerHTML=`${user.Q1}`

btn.addEventListener("click",inc=>{
    for ( const i in user.options){
        if(user.options[i] == Correctq1){
            let res=user.options[i];
            number++;
        }
    }
});