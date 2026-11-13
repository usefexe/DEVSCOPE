const loadingState = document.getElementById("loadingState");
const notFound = document.getElementById("notFound");
import { showUser } from "../ui/showprofile.js";
import { showRepo } from "../ui/showrepos.js";

export async function fetchDAta(user) {
  try {
    document.getElementById("profile").classList.add("hidden");
    loadingState.classList.remove("hidden");
    const userfetch = await fetch(`https://api.github.com/users/${user}`);
    const datauser = await userfetch.json();
    const repodata = await fetch(`https://api.github.com/users/${user}/repos`);
    const repos = await repodata.json();
    console.log(datauser);
    if (!userfetch.ok) {
      throw new Error("url not valide ");
    }
    showUser(datauser);
    showRepo(repos);
    localStorage.removeItem("serch");
  } catch (err) {
    console.log(err);
    loadingState.classList.add("hidden");
    notFound.classList.remove("hidden");
  }
}
