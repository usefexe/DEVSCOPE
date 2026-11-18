const searchrepo = document.getElementById('searchrepo')
import { profiles } from "../storage/state.js"
import { pagination } from "../storage/state.js"
const repoSort = document.getElementById("repoSort")

import { showRepo } from "../ui/showrepos.js"
export  function searchReposfilter(){
searchrepo.addEventListener('input',(e)=>{
    pagination.curentPage=1
profiles.search=e.target.value
showRepo()
})

repoSort.addEventListener("change", (e) => {
  pagination.curentPage=1
  profiles.filter=  e.target.value
  showRepo()
})


}