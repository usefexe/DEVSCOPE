import { calcContSat } from "../event/calculeCntSat.js"



export function showStarcounting(nbr){
     const  star=document.querySelectorAll("#editRating .fa-star ")
     for (let i = 0; i < 5; i++) {
        if(i<nbr){
            star[i].classList.add('text-amber-400')
           star[i].classList.remove('text-slate-500')

        }else{
            star[i].classList.remove('text-amber-400')
            star[i].classList.add('text-slate-500')
        }
        
        
     }
     document.getElementById('ratingValue').textContent=`${calcContSat()}/5`
}