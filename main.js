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
