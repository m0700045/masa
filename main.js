"use strict";

{
const open = document.getElementById("open");
const navi = document.querySelector(".navi");
const close =document.getElementById("close");


open.addEventListener("click",() => {
  navi.classList.add("show");
  open.classList.add("hide");
});
close.addEventListener("click",() => {
  navi.classList.remove("show");
  open.classList.remove("hide");
});
}
/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
{
  const hobby__open = document.getElementById("hobby__open");
  const hobby__hidden = document.getElementById("hobby__hidden");
  const hobby__close = document.getElementById("hobby__close");
  const hobby__mask = document.getElementById("hobby__mask");

  hobby__open.addEventListener("click",() =>{
    hobby__hidden.classList.add("hobby__show");
    hobby__mask.classList.add("hobby__show");
  });

  hobby__close.addEventListener("click",() =>{
    hobby__hidden.classList.remove("hobby__show");
    hobby__mask.classList.remove("hobby__show");
  });

  hobby__mask.addEventListener("click",() =>{
    hobby__hidden.classList.remove("hobby__show");
    hobby__mask.classList.remove("hobby__show");
  });
  }
/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
{
  const life__open = document.getElementById("life__open");
  const life__hidden = document.getElementById("life__hidden");
  const life__close = document.getElementById("life__close");
  const life__mask = document.getElementById("life__mask");
  
  life__open.addEventListener("click",() =>{
    life__hidden.classList.add("life__show");
    life__mask.classList.add("life__show");
  });
  
  life__close.addEventListener("click",() =>{
    life__hidden.classList.remove("life__show");
    life__mask.classList.remove("life__show");
  });
  
  life__mask.addEventListener("click",() =>{
    life__hidden.classList.remove("life__show");
    life__mask.classList.remove("life__show");
  });
}

/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */


{
  const scrollAnimation = document.querySelectorAll(".life");
  console.log(scrollAnimation);
  console.log("画面の高さ",window.innerHeight);
  document.addEventListener("scroll",() =>{
    for (let i = 0; i < scrollAnimation.length; i++){
      const getElementDistance = scrollAnimation[i].getBoundingClientRect().top + scrollAnimation[i].clientHeight * .3;
      if(i ===i){
        console.log(getElementDistance);
      }
      if(window.innerHeight > getElementDistance){
        scrollAnimation[i].classList.add("life__show");
      }
    }
  })
}
/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
{
  const scrollAnimation = document.querySelectorAll(".portfolio__element");
  console.log(scrollAnimation);
  console.log("画面の高さ",window.innerHeight);
  document.addEventListener("scroll",() =>{
    for (let i = 0; i < scrollAnimation.length; i++){
      const getElementDistance = scrollAnimation[i].getBoundingClientRect().top + scrollAnimation[i].clientHeight * .7;
      if(i ===i){
        console.log(getElementDistance);
      }
      if(window.innerHeight > getElementDistance){
        scrollAnimation[i].classList.add("portfolio__show");
      }
    }
  })
}
/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
{
const animationTargetElements = document.querySelectorAll(".top__animation");
  for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement = animationTargetElements[i];
       let texts = targetElement.textContent;
       let textsArray = [];

      targetElement.textContent ="";

      for (let j = 0; j <  texts.split("").length; j++) {
        const t = texts.split("")[j];
        if(t === " "){
          textsArray.push(" ");
        }else{
          textsArray.push('<span style="animation-delay: ' + ((j * .1) +1) + 's;">' + t + '</span>');      
        }
      }

      for (let k = 0; k < textsArray.length; k++) {
        targetElement.innerHTML += textsArray[k];
      }
  }
}
/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */
{
  window.addEventListener("scroll", function(){
    let scroll = document.documentElement.scrollTop;
    

    if(scroll > 100) {
      document.querySelector(".jump").classList.add("jump__apper");
    } else {
      document.querySelector(".jump").classList.remove("jump__apper");
    }
   });
}
