export function calcContSat(){
     const  star=document.querySelectorAll(".fa-star")
     let count = 0
     star.forEach((el)=>{
        el.classList.contains('text-amber-400')?count++:''
     })
     return count 
}