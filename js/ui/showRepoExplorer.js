import { showFileTree } from "./showFileTree.js"


export function showRepoExplorer(content){
    const section = document.createElement('section')
    section.classList.add('mx-10')
    section.innerHTML=`<div class="max-w-[1400px] mx-auto mt-8
            bg-[#101626] border border-[#293047]
            rounded-3xl p-5 md:p-7 text-[#F1F5F9]">

    <!-- Header -->
    <div class="flex flex-wrap items-center
                justify-between gap-4 mb-6">

        <div class="flex items-center gap-4">

            <div class="size-12 rounded-xl
                        bg-cyan-400/10 border border-cyan-400/20
                        flex items-center justify-center">

                <i class="fa-solid fa-folder-tree
                          text-xl text-cyan-400"></i>

            </div>

            <div>
                <h2 class="text-xl font-bold">
                    Repository Explorer
                </h2>

                <p class="text-sm text-slate-400 mt-1">
                    Explore project structure and source code.
                </p>
            </div>

        </div>

        <!-- Branch -->
        <div class="flex items-center gap-3 px-4 py-2
                    rounded-xl bg-[#0D1120]
                    border border-[#293047] text-sm">

            <i class="fa-solid fa-code-branch text-cyan-400"></i>

            <span id="explorerBranch">--</span>

        </div>

    </div>

    <!-- Explorer Workspace -->
    <div class="grid grid-cols-1
                lg:grid-cols-[300px_minmax(0,1fr)] gap-4">

        <!-- File Tree Sidebar -->
        <aside class="min-w-0 bg-[#0D1120]
                      border border-[#293047]
                      rounded-2xl p-4">

            <div class="flex items-center justify-between mb-4">

                <h3 class="text-xs font-bold
                           tracking-widest text-slate-400">
                    EXPLORER
                </h3>

                <i class="fa-solid fa-folder-tree text-slate-500"></i>

            </div>

            <!-- Search -->
            <div class="flex items-center gap-3 px-3 py-2.5
                        rounded-xl bg-[#151C30]
                        border border-[#293047]
                        focus-within:border-cyan-400/50">

                <i class="fa-solid fa-magnifying-glass
                          text-xs text-slate-500"></i>

                <input id="searchFile"
                       type="text"
                       placeholder="Find a file..."
                       class="w-full bg-transparent outline-none
                              text-sm text-slate-200
                              placeholder:text-slate-500">

            </div>

            <!-- Repository Root -->
            <div class="flex items-center gap-3 px-2 py-4
                        border-b border-[#293047] mb-2">

                <i class="fa-solid fa-folder-open text-cyan-400"></i>

                <h3 id="explorerRepoName"
                    class="font-semibold text-sm truncate">
                    Repository
                </h3>

            </div>

            <!-- Dynamic File Tree -->
            <div id="fileTree"
                 class="flex flex-col gap-1
                        min-h-[350px] max-h-[550px]
                        overflow-auto">

            </div>

            <!-- Sidebar Footer -->
            <div class="flex items-center justify-between
                        border-t border-[#293047]
                        pt-4 mt-3 text-xs text-slate-500">

                <span>
                    <span id="fileTreeCount">0</span> items
                </span>

                <i class="fa-brands fa-github"></i>

            </div>

        </aside>

        <!-- Code Viewer -->
        <div id="fileViewer"
             class="min-w-0 bg-[#0D1120]
                    border border-[#293047]
                    rounded-2xl flex flex-col">

            <!-- Viewer Header -->
            <div class="flex items-center gap-3
                        px-5 py-4 border-b border-[#293047]">

                <i class="fa-solid fa-code text-slate-500"></i>

                <span class="text-sm text-slate-400">
                    Source Code
                </span>

            </div>

            <!-- Empty State -->
            <div class="flex-1 min-h-[450px]
                        flex flex-col items-center justify-center
                        gap-4 p-6 text-center">

                <div class="size-20 rounded-2xl bg-[#151C30]
                            border border-[#293047]
                            flex items-center justify-center">

                    <i class="fa-regular fa-file-code
                              text-4xl text-slate-600"></i>

                </div>

                <h3 class="text-lg font-semibold text-slate-300">
                    No file selected
                </h3>

                <p class="text-sm text-slate-500 max-w-xs">
                    Select a file from the explorer
                    to view its source code.
                </p>

            </div>

        </div>

    </div>

    <!-- Footer -->
    <div class="flex flex-wrap items-center justify-between
                gap-3 mt-5 pt-4 border-t border-[#293047]
                text-xs text-slate-500">

        <span>
            <i class="fa-brands fa-github mr-2"></i>
            GitHub Repository Explorer
        </span>

        <span>Powered by DEVSCOPE</span>

    </div>

</div>`

document.body.appendChild(section)
showFileTree(content)
}