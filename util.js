let flag=0;
let flag2=0;

function loadError(){
   location.href="error.html";
}

function dropdown(){
    document.getElementById("myMenu").style.height ="250px";
    document.getElementById("myMain").style.marginBottom ="250px";
}

function revert(){
    document.getElementById("myMenu").style.height ="0px";
    document.getElementById("myMain").style.marginBottom ="0px";
}

function toggle(x){
x.classList.toggle("change");
if(flag===0) {
    flag=1;
    dropdown();
}
else {
    flag=0;
    revert();
}}

function blackout(){
   if(flag2==0){
        document.getElementById("nextBt").style.display="none";
        document.getElementById("prevBt").style.display="none";
        document.getElementById("bar5").style.display="none";
        document.getElementById("bar7").style.display="none";
        flag2=1;
   }
   else{
        document.getElementById("nextBt").style.display="block";
        document.getElementById("prevBt").style.display="block";
        document.getElementById("bar5").style.display="block";
        document.getElementById("bar7").style.display="block";
       flag2=0;
   }

}

const slides=document.querySelector('.carousel-slides');
const images=Array.from(slides.children);
const prevBtn=document.querySelector('.prev');
const nextBtn=document.querySelector('.next');
const nav=document.querySelector('.carousel-indicator');
const dots=Array.from(nav.children);
const imageWidth=images[0].getBoundingClientRect().width;
const len=images.length;

const setImagePosition = (slide,index) => {
slide.style.left= imageWidth * index + 'px';
};

images.forEach(setImagePosition);
let counter=0;

nextBtn.addEventListener('click',()=> {
    console.log(counter);
    const current=slides.querySelector('.current');
    const currentInd= nav.querySelector('.current');
    let next=current.nextElementSibling;
    let nextInd = currentInd.nextElementSibling;
    if(counter>=len-1) {
        next=images[0];
        nextInd=dots[0];
        counter=-1;
    }
    
    const move=next.style.left;
    slides.style.transform = 'translateX(-' + move + ')';

    current.classList.remove('current');
    next.classList.add('current');
    currentInd.classList.remove('current');
    nextInd.classList.add('current');
    counter++;
})

prevBtn.addEventListener('click', ()=> {
    console.log(counter);
    const current=slides.querySelector('.current');
    const currentInd= nav.querySelector('.current');
    let prev=current.previousElementSibling;
    let prevInd = currentInd.previousElementSibling;
    if(counter<=0){
        prev=images[len-1];
        prevInd=dots[len-1];
        counter=len;
    }

    const move=prev.style.left;
    slides.style.transform = 'translateX(-' + move + ')';

    current.classList.remove('current');
    prev.classList.add('current');
    currentInd.classList.remove('current');
    prevInd.classList.add('current');
    counter--;
})

