import { filter } from "../storage/state.js"
import { getShortList } from "../datafetch/getShortlist.js"
const candidateSearch = document.getElementById('candidateSearch')

export function searchInshortLit(){
       candidateSearch.addEventListener('input', ()=>{
        filter.derachvalue=candidateSearch.value.trim()
        getShortList()
    
       })  
}