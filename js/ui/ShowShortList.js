
const shortlistContainer = document.getElementById('shortlistContainer')
import { showStarCount } from "./showStarcount.js";
import { getStatus } from "./getStatus.js";

export  function showShortList(users){
        shortlistContainer.innerHTML=''
        users.forEach(element => {
            const div = document.createElement('article')
            div.classList.add(
    "flex",
    "flex-col",
    "lg:flex-row",
    "lg:items-center",
    "lg:justify-between",
    "gap-6",
    "p-6",
    "md:p-7",
    "bg-[#101626]/90",
    "border",
    "border-[#293047]",
    "rounded-3xl",
    "hover:border-purple-500/60",
    "hover:shadow-[0_0_25px_rgba(168,85,247,0.10)]",
    "transition-all",
    "duration-300"
);
const star=showStarCount(element.rating)
const status = getStatus(element.status)
div.innerHTML=`<div class="flex items-center gap-5 min-w-0">

        <!-- Avatar -->
        <div class="shrink-0 p-[3px] rounded-full
                    bg-gradient-to-br from-pink-500
                    via-purple-500 to-cyan-400
                    shadow-[0_0_20px_rgba(168,85,247,0.25)]">

          <img src=${element.avatar_url}
               alt="Avatar de  ${element.name} "
               class="w-17 h-17 md:w-20 md:h-20
                      rounded-full object-cover
                      bg-[#101626]"/>
        </div>

        <!-- Détails -->
        <div class="min-w-0">
          <h3 class="text-xl font-bold text-[#F1F5F9]">
            ${element.name}
          </h3>

          <div class="flex flex-wrap items-center gap-3 mt-1">
            <span class="text-sm text-[#94A3B8]">
             ${element.login}
            </span>

            <span class="px-3 py-1 rounded-lg
                         text-xs font-semibold
                         text-cyan-400 bg-cyan-500/10
                         border border-cyan-500/40">
            ${element.language}
            </span>
          </div>

          <p class="text-cyan-200 italic text-sm mt-2">
            ${element.note||"accun note "}
          </p>

          <p class="flex items-center gap-2 mt-2
                    text-sm text-[#94A3B8]">
            <i class="fa-regular fa-calendar-days"></i>
            Ajouté le ${new Date(element.createdAt).toDateString()}
          </p>
        </div>
      </div>

      <!-- Rating + Actions -->
      <div class="flex flex-wrap items-center gap-3
                  lg:justify-end shrink-0">

        <!-- Rating -->
     ${star.outerHTML}

        <!-- Statut -->
  ${status.outerHTML}

        <!-- Modifier -->
        <button type="button"
                class="flex items-center gap-2
                       px-4 py-2 rounded-xl
                       text-sm font-semibold
                       text-cyan-400 bg-cyan-500/10
                       border border-cyan-500/50
                       hover:bg-cyan-500/20 transition">
          <i class="fa-solid fa-pen"></i>
          Modifier
        </button>

        <!-- Supprimer -->
        <button type="button"
                class="flex items-center gap-2
                       px-4 py-2 rounded-xl
                       text-sm font-semibold
                       text-rose-400 bg-rose-500/10
                       border border-rose-500/30
                       hover:bg-rose-500/20 transition">
          <i class="fa-solid fa-xmark"></i>
          Supprimer
        </button>

      </div>`

      shortlistContainer.appendChild(div)
        });
}