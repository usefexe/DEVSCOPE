import { confirmeDelete } from "./confirmDelete.js"
import { openCompare } from "./openComapr.js"
import { openModif } from "./openModif.js"




export function cardAction(){const shortlistContainer = document.getElementById('shortlistContainer')
shortlistContainer.addEventListener('click',(e)=>{
   const dltbtn= e.target.closest('#supprimer')
   const editebtn = e.target.closest('#modifier')
    const compare= e.target.closest('#compare')
   if(dltbtn){
    const id = dltbtn.dataset.id
    const login= dltbtn.dataset.login
    const element = dltbtn.previousElementSibling
      confirmeDelete(id,element,login)
   }else if(editebtn){
      const id = editebtn.dataset.id
      openModif(id)
   }else if(compare){
        const id = compare.dataset.id
     openCompare(id)
   }
   
   else{
    return 
   }

})}