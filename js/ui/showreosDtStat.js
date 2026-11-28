import { getLanguageColor } from "./getLngColor.js"
export function showReposState(data){
const languagecolor=getLanguageColor(data.language)

    const section = document.createElement('section')
    section.setAttribute('id','repoOverview')
    section.classList.add('max-w-[1400px]','mx-auto','mt-8','px-5','text-[#F1F5F9]')
    section.innerHTML=`<!-- Repository Overview -->
    <article class="bg-[#101626] border border-[#293047]
                    rounded-3xl p-5 md:p-7">

        <!-- Repository Header -->
        <div class="flex items-center justify-between
                    flex-wrap gap-5">

            <div class="flex items-center gap-4">

                <div class="size-16 rounded-2xl
                            bg-cyan-400/10 border border-cyan-400/20
                            flex items-center justify-center">

                    <i class="fa-solid fa-folder-tree
                              text-3xl text-cyan-400"></i>

                </div>

                <div>

                    <p id="repoFullName"
                       class="text-sm text-slate-400 mb-1">
                        ${data.full_name}
                    </p>

                    <h1 id="repoName"
                        class="text-3xl font-bold">
                        ${data.name}
                        
                    </h1>

                    <div class="flex items-center gap-3 mt-2">

                        <span id="repoVisibility"
                              class="px-3 py-1 rounded-full
                                     border border-slate-700
                                     text-xs text-slate-300">
                                                   ${data.visibility}
                        </span>

                        <span class="flex items-center gap-2
                                     text-xs text-slate-400">

                            <i id="repoLanguageColor"
                              
                               class="fa-solid fa-circle text-[10px] text-[${languagecolor}]">
                            </i>

                            <span id="repoLanguage">${data.language}</span>

                        </span>

                    </div>

                </div>

            </div>

            <!-- GitHub Link -->
            <a id="repoGithubLink"
               href="${data.html_url}"
               rel="noopener noreferrer"
               class="flex items-center gap-3 px-5 py-3
                      rounded-xl bg-[#151C30]
                      border border-[#334155]
                      hover:border-cyan-400 hover:text-cyan-400
                      transition-all text-sm font-semibold">

                <i class="fa-brands fa-github text-xl"></i>
                View on GitHub
                <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>

            </a>

        </div>

        <!-- Description -->
        <p id="repoDescription"
           class="text-sm md:text-base text-[#94A3B8]
                  leading-relaxed mt-6">
             ${data.description||'accun description'}
        </p>

        <!-- Statistics -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-7">

            <!-- Stars -->
            <div class="p-5 bg-[#151C30] rounded-2xl
                        border border-[#293047]
                        hover:border-amber-400/40 transition-all">

                <div class="flex items-center justify-between mb-3">

                    <span class="text-sm text-slate-400">Stars</span>

                    <i class="fa-solid fa-star text-amber-400"></i>

                </div>

                <h3 id="repoStars"
                    class="text-3xl font-bold">${data.stargazers_count}</h3>

            </div>

            <!-- Forks -->
            <div class="p-5 bg-[#151C30] rounded-2xl
                        border border-[#293047]
                        hover:border-cyan-400/40 transition-all">

                <div class="flex items-center justify-between mb-3">

                    <span class="text-sm text-slate-400">Forks</span>

                    <i class="fa-solid fa-code-fork text-cyan-400"></i>

                </div>

                <h3 id="repoForks"
                    class="text-3xl font-bold">${data.forks}</h3>

            </div>

            <!-- Issues -->
            <div class="p-5 bg-[#151C30] rounded-2xl
                        border border-[#293047]
                        hover:border-emerald-400/40 transition-all">

                <div class="flex items-center justify-between mb-3">

                    <span class="text-sm text-slate-400">
                        Open issues / PRs
                    </span>

                    <i class="fa-solid fa-circle-exclamation
                              text-emerald-400"></i>

                </div>

                <h3 id="repoIssues"
                    class="text-3xl font-bold">${data.open_issues_count}</h3>

            </div>

            <!-- Watchers -->
            <div class="p-5 bg-[#151C30] rounded-2xl
                        border border-[#293047]
                        hover:border-purple-400/40 transition-all">

                <div class="flex items-center justify-between mb-3">

                    <span class="text-sm text-slate-400">
                        Watchers
                    </span>

                    <i class="fa-regular fa-eye text-purple-400"></i>

                </div>

                <h3 id="repoWatchers"
                    class="text-3xl font-bold">${data.watchers_count}</h3>

            </div>

        </div>

        <!-- Repository Information -->
        <div class="grid grid-cols-1 sm:grid-cols-2
                    lg:grid-cols-4 gap-5 mt-7 pt-6
                    border-t border-[#293047]">

            <!-- Default Branch -->
            <div class="flex items-center gap-3">

                <div class="size-10 rounded-xl bg-cyan-400/10
                            flex items-center justify-center">

                    <i class="fa-solid fa-code-branch text-cyan-400"></i>

                </div>

                <div>
                    <p class="text-xs text-slate-400">Default branch</p>
                    <p id="repoBranch" class="font-semibold mt-1">${data.default_branch}</p>
                </div>

            </div>

            <!-- License -->
            <div class="flex items-center gap-3">

                <div class="size-10 rounded-xl bg-purple-400/10
                            flex items-center justify-center">

                    <i class="fa-solid fa-scale-balanced text-purple-400"></i>

                </div>

                <div>
                    <p class="text-xs text-slate-400">License</p>
                    <p id="repoLicense" class="font-semibold mt-1">${data.license||'accun'}</p>
                </div>

            </div>

            <!-- Created At -->
            <div class="flex items-center gap-3">

                <div class="size-10 rounded-xl bg-emerald-400/10
                            flex items-center justify-center">

                    <i class="fa-regular fa-calendar-plus
                              text-emerald-400"></i>

                </div>

                <div>
                    <p class="text-xs text-slate-400">Created at</p>
                    <p id="repoCreatedAt" class="font-semibold mt-1">${new Date(data.created_at).toDateString()}</p>
                </div>

            </div>

            <!-- Last Update -->
            <div class="flex items-center gap-3">

                <div class="size-10 rounded-xl bg-amber-400/10
                            flex items-center justify-center">

                    <i class="fa-regular fa-clock text-amber-400"></i>

                </div>

                <div>
                    <p class="text-xs text-slate-400">Last update</p>
                    <p id="repoUpdatedAt" class="font-semibold mt-1">${new Date(data.updated_at).toDateString()}</p>
                </div>

            </div>

        </div>

    </article>`
    document.body.appendChild(section)


}