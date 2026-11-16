const loadingState = document.getElementById("loadingState");
const notFound = document.getElementById("notFound");
import { showUser } from "../ui/showprofile.js";
import { showRepo } from "../ui/showrepos.js";
import { filter, use } from "../storage/state.js";
import { profiles } from "../storage/state.js";
export async function fetchDAta(user) {
  try {
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

    console.log(datauser);
    if (!userfetch.ok) {
      throw new Error("url not valide ");
    }
    // const userCtch = {[datauser.login]:{
    //   profile:datauser,
    //   repos:repos
    // }}
   localStorage.setItem('repos',JSON.stringify(repos))
    showUser(datauser)
  
    showRepo();
    use.profile=datauser
     localStorage.removeItem("srch")
   
  } catch (err) {
    console.log(err);
    loadingState.classList.add("hidden");
    notFound.classList.remove("hidden");
  }
}
