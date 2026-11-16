import { confirmeDelete } from "./confirmDelete.js"




export function cardAction(){const shortlistContainer = document.getElementById('shortlistContainer')
shortlistContainer.addEventListener('click',(e)=>{
   const dltbtn= e.target.closest('#supprimer')

   if(dltbtn){
    const id = dltbtn.dataset.id
    const login= dltbtn.dataset.login
    const element = dltbtn.previousElementSibling
      confirmeDelete(id,element,login)
   }

})}