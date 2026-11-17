
import { getShortList } from "../datafetch/getShortlist.js"
import { filter } from "../storage/state.js"
const statusFilters= document.getElementById('statusFilters')
const btns = document.querySelectorAll('#statusFilters button')
export function filterCandidat(){
   statusFilters.addEventListener('click',(e)=>{
   const btn = e.target.closest('button')
   if(btn){
     btns.forEach(el=>{
        el.classList.remove('bg-gradient-to-r','from-cyan-400','to-pink-500','text-white')
        el.classList.add('text-[#94A3B8]','hover:text-cyan-400')
     })
     btn.classList.add('bg-gradient-to-r','from-cyan-400','to-pink-500','text-white')
     btn.classList.remove('text-[#94A3B8]','hover:text-cyan-400')
    filter.filter=btn.dataset.filter
    getShortList()
   }
   })
}