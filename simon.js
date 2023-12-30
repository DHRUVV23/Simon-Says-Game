let gamseq=[];
let userseq=[];
let colors=["yellow","green","red","purple"];

let start=false;
let level=0;

document.addEventListener("keypress",function() {
    if(start==false){
        console.log("Let the game begin");
        start=true;
        levelup();
        
    }
});

function btnflsh(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },200);
}

h3=document.querySelector("h3");
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let ind=Math.floor(Math.random()*4);
    let rancol=colors[ind];
    console.log(`${rancol}`);
    gamseq.push(rancol);
    console.log(gamseq);
    let ranbtn=document.querySelector(`.${rancol}`);
    // console.log(`${ranbtn}`);
    btnflsh(ranbtn);

}

function  check(idn){
    // let idn=level-1;
    if(userseq[idn]===gamseq[idn]){
        if(userseq.length==gamseq.length){
            setTimeout(levelup,1000);
        }
        // console.log("matched");
    }else{
        h3.innerHTML=`GAME OVER! Your score is <b> ${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}
 
function btnpress(){
    // console.log("This button is pressed");
    btn=this;
    let col=btn.getAttribute("class");
    // console.log(col);
    userseq.push(col);
    btnflsh(btn);

    check(userseq.length-1);
}
let all=document.querySelectorAll("#b");
for(btn of all){
    btn.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    gamseq=[];
    userseq=[];
    level=0;
}