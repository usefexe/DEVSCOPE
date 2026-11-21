const cancelCompare = document.getElementById('cancelCompare')
const compareModal= document.getElementById('compareModal')
const launchCompare = document.getElementById('launchCompare')
const closeCompareModal = document.getElementById('closeCompareModal')
export function closeComapre(){
       cancelCompare.addEventListener('click',()=>{
       compareModal.classList.add('hidden')
       launchCompare.disabled=true
       })
       closeCompareModal.addEventListener('click',()=>{
       compareModal.classList.add('hidden')
       launchCompare.disabled=true
       })
}