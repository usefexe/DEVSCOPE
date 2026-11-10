function misAJourDepuis(date) {
  const dateModification = new Date(date);
  const aujourdHui = new Date();

  const difference = aujourdHui - dateModification;

  const jours = Math.floor(difference / (1000 * 60 * 60 * 24));

  return `Mis à jour il y a ${jours} jours`;
}

export function showRepo(repos) {
  document.getElementById("reposCount").textContent = repos.length;
  document.getElementById("reposGrid").innerHTML = "";
  repos.forEach((el) => {
    const article = document.createElement("article");
    article.classList.add(
      "rounded-2xl",
      "p-1",
      "pt-1",
      "bg-[#111B30]",
      "border",
      "border-slate-700/60",
      "hover:border-cyan-400/60",
      "hover:shadow-lg",
      "hover:shadow-cyan-500/10",
      "transition-all",
      "duration-300",
    );
    article.innerHTML = `      <div class="rounded-2xl p-5 pb-0 pt-0 flex justify-between items-center ">
        <div class="flex gap-4 items-center">
          <i class="fa-regular fa-folder text-xl text-[#22D3EE]"></i>
          <h3 class="text-lg font-bold text-2xl text-zinc-300">${el.name}</h3>
        </div>

        <a href="${el.html_url}" target="_blank"
           rel="noopener noreferrer"   class="w-15 h-15 flex items-center justify-center rounded-xl bg-slate-800border border-slate-700 text-white hover:text-cyan-400"
           aria-label="Voir le dépôt sur GitHub">
          <i class="fa-brands fa-github text-2xl"></i>
        </a>
      </div>

      <p class="text-base  text-zinc-400 text-sm text-semibold text-center ">Aucune description.</p>

    
      <div class="flex items-center gap-4 mt-4 text-center ml-14">
        <span class="text-zinc-300 ">
          <i class="fa-solid fa-circle text-sm "></i>
          ${el.language}
        </span>

        <span class="text-amber-500">
          <i class="fa-solid fa-star"></i>
          ${el.stargazers_count}
        </span>

        <span class="text-[#22D3EE]">
          <i class="fa-solid fa-code-fork"></i>
          ${el.forks_count || 0}
        </span>
      </div>

      
      <p class="	text-sm mt-4 text-zinc-400 text-center" >
        <i class="fa-regular fa-calendar-days"></i>
       ${misAJourDepuis(el.updated_at)}
      </p>`;
    document.getElementById("reposGrid").appendChild(article);
  });
}
