 import { showStarcounting } from "../ui/showStarcounting.js";
  const  star=document.querySelectorAll(".fa-star")

  export function changeStar(){
    star.forEach(el=>{
        el.addEventListener('click',(e)=>{
         const count = e.target.parentElement.dataset.rating
        
         showStarcounting(Number(count))
        })
    })
  }