const compareDevelopersList = document.getElementById('compareDevelopersList')
const launchCompare = document.getElementById('launchCompare')
export function selectProfile(){
compareDevelopersList.addEventListener('click',(e)=>{
  const lct=e.target.closest('input')
  if(lct){
    launchCompare.disabled=false
launchCompare.dataset.div2=lct.value
  }else{
    return 
  }
})
    
}