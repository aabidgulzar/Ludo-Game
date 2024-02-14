const bp1 = document.getElementById('bp1');
const bp2 = document.getElementById('bp2');
const bluedice = document.getElementById('bluedice');
const gp1 = document.getElementById('gp1');
const gp2 = document.getElementById('gp2');
const greendice = document.getElementById('greendice');
greendice.style.transform='scale(0)';
let blueno = 0;
let blueattack = 0;
let blueno2 = 0;
let targetElement = 0;
let rect = 0;
let st = 0;
let bst2 = 0;
let savemove = 0;
bluedice.addEventListener('click', handleBlue)
function handleBlue(){
    let rec = document.getElementById('one');
    rec.style.display='none';
    
    bp1.style.animation= 'glow 1s infinite alternate';
    bp2.style.animation= 'glow 1s infinite alternate';
    gp1.style.animation= 'no';
    gp2.style.animation= 'no';
    greendice.style.transform = 'scale(0)'
    let add = Math.round(Math.random()*6);
    if(add==0){
        add=1;
    }
    bluedice.textContent = add;
    savemove = add;
    if(add==6){
    bluedice.removeEventListener('click',handleBlue);
    greendice.removeEventListener('click',handleGreen);
    greendice.style.transform='scale(0)';
    }
    if(add!=6){
    bluedice.removeEventListener('click',handleBlue);
    greendice.addEventListener('click',handleGreen);
    }
    if(blueno>=1 && blueno+add<57){
        greendice.removeEventListener('click',handleGreen);
    }
    if(blueno2>=1 && blueno2+add<57){
        greendice.removeEventListener('click',handleGreen);
    }
    if(blueno+add>57){
        greendice.addEventListener('click',handleGreen);
        bluedice.style.transform = 'scale(1)'
    }
    if(blueno2+add>57){
        greendice.addEventListener('click',handleGreen);
        bluedice.style.transform = 'scale(1)'
    }

    if(blueno<1 && blueno2<1){
        greendice.style.transform = 'scale(1)'
    }
    if(blueno+add>57 && blueno2+add>57){
        greendice.style.transform = 'scale(1)'
    }

    if(blueno<1 || blueno+add>57){
        if(add!=6)
        bp2f();
        if(blueno==57)
        bp2f();
        if(add==6 && blueno+add>57)
        bp2f();
    }
    if(blueno2<1 || blueno2+add>57){
        if(add!=6)
        bp1f();
        if(blueno2==57)
        bp1f();
        if(add==6 && blueno2+add>57)
        bp1f();
    }
    if(add==6){
        greendice.style.transform = 'scale(0)'
    }


}

bp1.addEventListener('click',bp1f)

function bp1f(){
    bp1.style.animation= 'no';
    bp2.style.animation= 'no';
    blueattack=1;
    let add = savemove;
    blueno+=add;

    if(blueno<=56){
    targetElement = document.getElementById(`bluep${blueno}`);
    }
    else if(blueno>57)
        blueno=blueno-add;

    if(add<6 && st==0){
        blueno-=add;
        targetElement = document.getElementById('stb1');
    }
    if(add==6 && st==0){
        blueno=1;
        targetElement = document.getElementById(`bluep1`);
        st=100;
    }

    if(blueno>51 && blueno<57){
        targetElement = document.getElementById(`bbluep${blueno}`);
    }

    if(blueno === 57){
        targetElement = document.getElementById('bwin');
    } 
    rect = targetElement.getBoundingClientRect();
    bp1.style.left = rect.x+'px';
    bp1.style.top = rect.y+'px';

    if(blueno==1 || blueno==48 || blueno==14 || blueno==9 || blueno==27 || blueno==22 || blueno==40 || blueno==35){
        bp1.style.left = rect.x-7+'px';
        bp1.style.top = rect.y+'px';
    }
    if(blueno==57){
        bp1.style.left = rect.x+'px';
        bp1.style.top = rect.y+40+'px';
    }
    
    if(add!=6)
    greendice.addEventListener('click',handleGreen);
    if(savemove!=0){
    greendice.style.transform = 'scale(1)'
    bluedice.style.transform = 'scale(0)'
    }
    if(add==6 && savemove!=0){
        bluedice.addEventListener('click',handleBlue);
        bluedice.style.transform = 'scale(1)'
        greendice.style.transform='scale(0)';
    }
    savemove=0;
    handleOverlapping();
}



bp2.addEventListener('click', bp2f)

function bp2f(){
    bp1.style.animation= 'no';
    bp2.style.animation= 'no';
    blueattack=1;
    let add = savemove;
    blueno2+=add;
    if(blueno2<=56){
    targetElement = document.getElementById(`bluep${blueno2}`);
    }
    else if(blueno2>57)
        blueno2=blueno2-add;
    
    
    if(add<6 && bst2 ==0){
        blueno2-=add;
        targetElement = document.getElementById('stb2');
    }
    if(add==6 && bst2 ==0){
        blueno2=1;
        targetElement = document.getElementById(`bluep1`);
        bst2 = 100;
    }

    if(blueno2>51 && blueno2<57){
        targetElement = document.getElementById(`bbluep${blueno2}`);
    }

    if(blueno2 === 57){
        targetElement = document.getElementById('bwin');
    }
    rect = targetElement.getBoundingClientRect();
    bp2.style.left = rect.x+'px';
    bp2.style.top = rect.y+'px';
    if(blueno2==1 || blueno2==48 || blueno2==14 || blueno2==9 || blueno2==27 || blueno2==22 || blueno2==40 || blueno2==35){
        bp2.style.left = rect.x-7+'px';
        bp2.style.top = rect.y+'px';
    }
    
    if(add!=6)
    greendice.addEventListener('click',handleGreen);
    if(savemove!=0){
    greendice.style.transform = 'scale(1)'
    bluedice.style.transform = 'scale(0)'
    }
    if(add==6 && savemove!=0){
        bluedice.addEventListener('click',handleBlue);
        bluedice.style.transform = 'scale(1)'
        greendice.style.transform='scale(0)';
    }
    savemove=0;
    handleOverlapping()
}



let greenno = 0;
let greenattack = 0;
let greenno2 = 0;
let greenTarget = 0;
let circ = 0;
let st2 = 0;
let gst2 = 0;
let savemove2 = 0;
let bug52 = 0;
let bug52s = 0;
let clear = 0;
greendice.addEventListener('click', handleGreen)

function handleGreen(){
    gp1.style.animation= 'glow 1s infinite alternate';
    gp2.style.animation= 'glow 1s infinite alternate';
    bp1.style.animation= 'no';
    bp2.style.animation= 'no';
    bluedice.style.transform='scale(0)';
    let add = Math.round(Math.random()*6);
    if(add==0){
        add=1;
    }
    greendice.textContent = add;
    savemove2 = add;
    if(add!=6){
        bluedice.addEventListener('click',handleBlue);
        greendice.removeEventListener('click',handleGreen);
    }
    if(add==6 && greenno+add>31 && bug52){
        greendice.removeEventListener('click',handleGreen);
        bluedice.addEventListener('click',handleBlue);
    }
    if(add==6 && greenno2+add>31 && bug52s){
        greendice.removeEventListener('click',handleGreen);
        bluedice.addEventListener('click',handleBlue);
    }
    if(greenno<1 && greenno2<1){
        bluedice.style.transform='scale(1)';
    }
    if(greenno+add>31 && greenno2>31 && bug52 && bug52s){
        bluedice.style.transform='scale(1)';
    }

    if(bug52 && greenno+add>31){
        gp2f();
    }
    if(bug52s && greenno2+add>31){
        gp1f();
    }
    if(greenno<1 && add!=6){
        gp2f();
    }
    if(greenno2<1 && add!=6){
        gp1f();
    }
    if(clear==0 && add==6){
        bluedice.style.transform='scale(0)';
        greendice.style.transform='scale(1)';
        greendice.removeEventListener('click',handleGreen);
        clear=1;
    }

    if(greenno2==31 && add==6){
        greendice.addEventListener('click',handleGreen);
        greendice.style.transform='scale(1)';
        bluedice.style.transform='scale(0)';
    }
    
    if(greenno==31 && add==6){
        greendice.addEventListener('click',handleGreen);
        greendice.style.transform='scale(1)';
        bluedice.style.transform='scale(0)';
    }
}

gp1.addEventListener('click',gp1f)

function gp1f(){
    gp1.style.animation= 'no';
    gp2.style.animation= 'no';
    greenattack=1;
    let add = savemove2;

    greenno+=add;
    if(greenno<=56){
    greenTarget = document.getElementById(`bluep${greenno}`);
    }
    if(greenno>57)
        greenno=greenno-add;

    if(add<6 && st2==0){
        greenno-=add;
        greenTarget = document.getElementById('stg1');
    }
    else if(add==6 && st2==0){
        greenno=27;
        greenTarget = document.getElementById(`bluep${greenno}`);
        st2=100;
    }
    if(greenno>52){
        bug52=add;
        greenno=greenno-52;
        greenTarget = document.getElementById(`bluep${greenno}`);
    }

    if(bug52){
        if(greenno>31)
        greenno=greenno-add
        greenTarget = document.getElementById(`bluep${greenno}`);
        if(greenno>25)
        greenTarget = document.getElementById(`gblue${greenno}`);
        if(greenno==31){
            greenTarget = document.getElementById('gwin');
        }
    }


    circ = greenTarget.getBoundingClientRect();
    gp1.style.left = circ.x+'px';
    gp1.style.top = circ.y+'px';
    if(greenno==1 || greenno==48 || greenno==14 || greenno==9 || greenno==27 || greenno==22 || greenno==40 || greenno==35){
        gp1.style.left = circ.x+7+'px';
        gp1.style.top = circ.y+'px';
    }
    if(greenno==31 && bug52){
        gp1.style.left = circ.x+20+'px';
        gp1.style.top = circ.y+40+'px';
    }
    if(savemove2!=0){
    bluedice.style.transform='scale(1)';
    greendice.style.transform='scale(0)';
    }
    if(clear==1 && add==6 && savemove2!=0){
        greendice.addEventListener('click',handleGreen);
        greendice.style.transform='scale(1)';
        bluedice.style.transform='scale(0)';
        clear=0;
    }
    savemove2=0
    handleOverlappingb();
}


gp2.addEventListener('click',gp2f)
function gp2f(){
    gp1.style.animation= 'no';
    gp2.style.animation= 'no';
    greenattack=1;
    let add = savemove2;

    greenno2+=add;
    if(greenno2<=56){
    greenTarget = document.getElementById(`bluep${greenno2}`);
    }
    if(greenno2>57)
        greenno2=greenno2-add;

    if(add<6 && gst2==0){
        greenno2-=add;
        greenTarget = document.getElementById('stg2');
    }
    else if(add==6 && gst2==0){
        greenno2=27;
        greenTarget = document.getElementById(`bluep${greenno2}`);
        gst2=100;
    }
    if(greenno2>52){
        bug52s=add;
        greenno2=greenno2-52;
        greenTarget = document.getElementById(`bluep${greenno2}`);
    }

    if(bug52s){
        if(greenno2>31)
        greenno2=greenno2-add
        greenTarget = document.getElementById(`bluep${greenno2}`);
        if(greenno2>25)
        greenTarget = document.getElementById(`gblue${greenno2}`);
        if(greenno2==31){
            greenTarget = document.getElementById('gwin');
        }
    }
    if(savemove2!=0){
    bluedice.style.transform='scale(1)';
    greendice.style.transform='scale(0)';
    }
    if(clear==1 && add==6 && savemove2!=0){
        greendice.addEventListener('click',handleGreen);
        greendice.style.transform='scale(1)';
        bluedice.style.transform='scale(0)';
        clear=0;
    }
    circ = greenTarget.getBoundingClientRect();
    gp2.style.left = circ.x+'px';
    gp2.style.top = circ.y+'px';
    if(greenno2==1 || greenno2==48 || greenno2==14 || greenno2==9 || greenno2==27 || greenno2==22 || greenno2==40 || greenno2==35){
        gp2.style.left = circ.x+7+'px';
        gp2.style.top = circ.y+'px';
    }
    if(greenno2==31 && bug52s){
        gp2.style.left = circ.x+20+'px';
        gp2.style.top = circ.y+'px';
    }
    savemove2=0;
    handleOverlappingb();
}



function handleOverlapping(){

if(greenno!=1 && greenno!=48 && greenno!=14 && greenno!=9 && greenno!=27 && greenno!=22 && greenno!=40 && greenno!=35 && greenno<52){
    if(blueno==greenno && blueattack==1){
        if(bug52==0 || greenno<26){
        greenno=0;
        st2=0;
        bug52=0;
        greenTarget = document.getElementById('stg1');
        circ = greenTarget.getBoundingClientRect();
        gp1.style.left = circ.x+'px';
        gp1.style.top = circ.y+'px';
        }
    }
 }

if(greenno2!=1 && greenno2!=48 && greenno2!=14 && greenno2!=9 && greenno2!=27 && greenno2!=22 && greenno2!=40 && greenno2!=35 && greenno2<52){
    if(blueno==greenno2 && blueattack==1){
        if(bug52s==0 || greenno2<26){
        greenno2=0;
        gst2=0;
        bug52s=0;
        greenTarget = document.getElementById('stg2');
        circ = greenTarget.getBoundingClientRect();
        gp2.style.left = circ.x+'px';
        gp2.style.top = circ.y+'px';
       }
    }
}

if(greenno!=1 && greenno!=48 && greenno!=14 && greenno!=9 && greenno!=27 && greenno!=22 && greenno!=40 && greenno!=35 && greenno<52){
    if(blueno2==greenno && blueattack==1){
        if(bug52==0 || greenno<26){
        greenno=0;
        st2=0;
        bug52=0;
        greenTarget = document.getElementById('stg1');
        circ = greenTarget.getBoundingClientRect();
        gp1.style.left = circ.x+'px';
        gp1.style.top = circ.y+'px';
        }
    }
}

if(greenno2!=1 && greenno2!=48 && greenno2!=14 && greenno2!=9 && greenno2!=27 && greenno2!=22 && greenno2!=40 && greenno2!=35 && greenno2<52){
    if(blueno2==greenno2 && blueattack==1){
        if(bug52s==0 || greenno2<26){
        greenno2=0;
        gst2=0;
        bug52s=0;
        greenTarget = document.getElementById('stg2');
        circ = greenTarget.getBoundingClientRect();
        gp2.style.left = circ.x+'px';
        gp2.style.top = circ.y+'px';
        }
    }
}
    blueattack=0;
}


function handleOverlappingb(){
if(blueno!=1 && blueno!=48 && blueno!=14 && blueno!=9 && blueno!=27 && blueno!=22 && blueno!=40 && blueno!=35 && blueno<52){
    if(greenno==blueno && greenattack==1){
        if(bug52==0 || greenno<26){
        blueno=0;
        st=0;
        targetElement = document.getElementById('stb1');
        rect = targetElement.getBoundingClientRect();
        bp1.style.left = rect.x+'px';
        bp1.style.top = rect.y+'px';
        }
    }
}

if(blueno2!=1 && blueno2!=48 && blueno2!=14 && blueno2!=9 && blueno2!=27 && blueno2!=22 && blueno2!=40 && blueno2!=35 && blueno2<52){
    if(greenno==blueno2 && greenattack==1){
        if(bug52==0 || greenno<26){
        blueno2=0;
        bst2=0;
        targetElement = document.getElementById('stb2');
        rect = targetElement.getBoundingClientRect();
        bp2.style.left = rect.x+'px';
        bp2.style.top = rect.y+'px';
        }
    }
}
if(blueno!=1 && blueno!=48 && blueno!=14 && blueno!=9 && blueno!=27 && blueno!=22 && blueno!=40 && blueno!=35 && blueno<52){
    if(greenno2==blueno && greenattack==1){
        if(bug52s==0 || greenno2<26){
        blueno=0;
        st=0;
        targetElement = document.getElementById('stb1');
        rect = targetElement.getBoundingClientRect();
        bp1.style.left = rect.x+'px';
        bp1.style.top = rect.y+'px';
        }
    }
}

if(blueno2!=1 && blueno2!=48 && blueno2!=14 && blueno2!=9 && blueno2!=27 && blueno2!=22 && blueno2!=40 && blueno2!=35 && blueno2<52){
    if(greenno2==blueno2 && greenattack==1){
        if(bug52s==0 || greenno2<26){
        blueno2=0;
        bst2=0;
        targetElement = document.getElementById('stb2');
        rect = targetElement.getBoundingClientRect();
        bp2.style.left = rect.x+'px';
        bp2.style.top = rect.y+'px';
        }
    }
}
    greenattack=0;
}
