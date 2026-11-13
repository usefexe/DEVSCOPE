const form = document.getElementById("foorm");
const input = document.getElementById("githubUsername");
import { valideNom } from "../validation/validenom.js";
const searchError = document.getElementById("searchError");

import { fetchDAta } from "../datafetch/getUser.js";
export function cherheProfile() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valideNom(input.value)) {
      searchError.classList.add("hidden");

      localStorage.setItem("serch", JSON.stringify(input.value));

      fetchDAta(JSON.parse(localStorage.getItem("serch")));
      searchError.classList.add("hidden");
    } else {
      searchError.classList.remove("hidden");
    }
  });
}
