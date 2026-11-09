const form=document.getElementById('foorm')
const input=document.getElementById('search')
import { valideNom } from "../validation/validenom.js"
const searchError=document.getElementById('searchError')
import { searchvalue } from "../storage/state.js"
export function analyseProfile()
{
    form.addEventListener('submit',(e)=>{
     
    e.preventDefault()
  if(valideNom(input.value)){
    searchError.classList.add('hidden')
    searchvalue.name=input.value 
     localStorage.setItem('serch',JSON.stringify(input.value ))
    window.location.href='search.html'

  }else{
     searchError.classList.remove('hidden')
  }
})


}