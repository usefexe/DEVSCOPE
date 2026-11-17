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
  else{try {
    document.getElementById("profile").classList.add("hidden");
    loadingState.classList.remove("hidden");
    const userfetch = await fetch(
      `https://api.github.com/users/${user}`,
        {
          
  
  } 
      
      
   
    );
     localStorage.removeItem("repos");
    const datauser = await userfetch.json();
    const repodata = await fetch(
      `https://api.github.com/users/${user}/repos`,
           {
 
  
  }
    
    );
    
    const repos = await repodata.json();

    
    if (!userfetch.ok) {
      throw new Error("url not valide ");
    }
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
