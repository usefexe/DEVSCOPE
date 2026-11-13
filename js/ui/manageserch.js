import { fetchDAta } from "../datafetch/getUser.js";
import { cherheProfile } from "../event/sarch2event.js";
export default function manageSearchPage() {
  if (localStorage.getItem("serch")) {
    fetchDAta(JSON.parse(localStorage.getItem("serch")));
    document.getElementById("githubUsername").value=JSON.parse(localStorage.getItem("serch"))
  } else {
    document.getElementById("githubUsername").value=''
    document.getElementById("profile").classList.add("hidden");
    document.getElementById("loadingState").classList.add("hidden");
    document.getElementById("notFound").classList.add("hidden");
  }

  cherheProfile();
}
