import { compare } from "../storage/state.js"
import { showcomparList } from "../ui/shiwComparList.js"
const searchCompareDev = document.getElementById('searchCompareDev')

export  function searchInCompare(){
   const id = searchCompareDev.dataset.id
    searchCompareDev.addEventListener('input',()=>{
    compare.search= searchCompareDev.value
    showcomparList(id)
    })
}