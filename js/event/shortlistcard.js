import { confirmeDelete } from "./confirmDelete.js"
import { openModif } from "./openModif.js"




export function cardAction(){const shortlistContainer = document.getElementById('shortlistContainer')
shortlistContainer.addEventListener('click',(e)=>{
   const dltbtn= e.target.closest('#supprimer')
   const editebtn = e.target.closest('#modifier')
   if(dltbtn){
    const id = dltbtn.dataset.id
    const login= dltbtn.dataset.login
    const element = dltbtn.previousElementSibling
      confirmeDelete(id,element,login)
   }else if(editebtn){
      const id = editebtn.dataset.id
      openModif(id)
   }else{
    return 
   }

})}