import { pagination } from "../storage/state.js";
import { showRepo } from "../ui/showrepos.js";
const prevRepo = document.getElementById('prevRepo')
const nextRepo= document.getElementById('nextRepo')
const totalRepoPages = document.getElementById('totalRepoPages')


function checkButton(){
   nextRepo.disabled=pagination.curentPage>=pagination.totalPage
         
    
     prevRepo.disabled=pagination.curentPage<=1
       
    
}


export function updatePagination(repos){
    pagination.totalPage=Math.ceil(repos.length/6)
    totalRepoPages.textContent= pagination.totalPage
    checkButton() 
}

export function paginationEvent(){
    
prevRepo.addEventListener('click',()=>{
       pagination.curentPage--
       showRepo()
})



nextRepo.addEventListener('click',()=>{
       pagination.curentPage++
        showRepo()
})

}

