const loadingState = document.getElementById("loadingState");
const notFound = document.getElementById("notFound");
import { showUser } from "../ui/showprofile.js";
import { showRepo } from "../ui/showrepos.js";
import { filter, use } from "../storage/state.js";
import { profiles } from "../storage/state.js";
import { saveCatch } from "../storage/chache.js";
import { getCatch } from "../storage/chache.js";

export async function fetchDAta(user) {

  const datacatch=getCatch(user.trim().toLowerCase())

  if(datacatch){
      console.log('form catch')
    const repos= datacatch.repos
    const datauser = datacatch.profile
       localStorage.setItem('repos',JSON.stringify(repos))
    showUser(datauser)
  
    showRepo();
    use.profile=datauser
     localStorage.removeItem("srch")
  }
  else{
    try {
    document.getElementById("profile").classList.add("hidden");
    loadingState.classList.remove("hidden");

    const [userfetch,repodata]=await Promise.all([
      fetch(`https://api.github.com/users/${user}`),
      fetch(`https://api.github.com/users/${user}/repos`)
    ])

    if (!userfetch.ok || !repodata.ok) {
  throw new Error("Erreur lors de la récupération des données");
}

  const [datauser, repos] = await Promise.all([
  userfetch.json(),
  repodata.json()
]);
    const userCtch = {
      saveat:Date.now(),
      profile:datauser,
      repos:repos
    }
    
    saveCatch(user.trim().toLowerCase(),userCtch)
   localStorage.setItem('repos',JSON.stringify(repos))
    showUser(datauser)
  
    showRepo();
    use.profile=datauser
     localStorage.removeItem("srch")
   
  } catch (err) {
    console.log(err);
    loadingState.classList.add("hidden");
    notFound.classList.remove("hidden");
  }}
}
