import { deleUserShortL } from "../datafetch/deleteShUs.js"

const deleteModal = document.getElementById('deleteModal')
const confirmDelete = document.getElementById('confirmDelete')
const cancelDelete  = document.getElementById('cancelDelete')
 export  function confirmeDelete(id, element,login){
    deleteModal.classList.remove('hidden')

    confirmDelete.addEventListener('click',()=>{
     deleUserShortL(id, element,login)
     
    })
    cancelDelete.addEventListener('click',()=>{
        deleteModal.classList.add('hidden')
    })

 }