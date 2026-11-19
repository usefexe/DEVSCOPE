import { deleUserShortL } from "../datafetch/deleteShUs.js"
import { showUndo } from "../ui/showundo.js"
const deleteModal = document.getElementById('deleteModal')
const confirmDelete = document.getElementById('confirmDelete')
const cancelDelete  = document.getElementById('cancelDelete')
 export  async function confirmeDelete(id, element,login){
    deleteModal.classList.remove('hidden')

    confirmDelete.onclick= async()=>{
         deleteModal.classList.add('hidden')
        const undo = await showUndo()
      
     if(!undo){deleUserShortL(id, element,login)}
     
    }
    cancelDelete.addEventListener('click',()=>{
        deleteModal.classList.add('hidden')
    })

 }