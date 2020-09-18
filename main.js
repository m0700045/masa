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
