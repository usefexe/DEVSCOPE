const searchrepo = document.getElementById('searchrepo')
import { profiles } from "../storage/state.js"
const repoSort = document.getElementById("repoSort")

import { showRepo } from "../ui/showrepos.js"
export  function searchReposfilter(){
searchrepo.addEventListener('input',(e)=>{
profiles.search=e.target.value
showRepo()
})

repoSort.addEventListener("change", (e) => {
  profiles.filter=  e.target.value
  showRepo()
})


}