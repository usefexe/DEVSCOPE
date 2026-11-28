import { getFileIcon } from "./getFileIcon.js";



export function showFileTree(content){
    const fileTree=  document.getElementById("fileTree")
const fileTreeCount=document.getElementById("fileTreeCount")
    fileTreeCount.textContent=content.length
    content.forEach(el=> {
          if(el.type==='dir'){
             const div = document.createElement('div')
             div.innerHTML=`<div class="tree-folder">

    <div class="folder-item flex items-center gap-3
                px-3 py-2.5 rounded-lg cursor-pointer
                hover:bg-[#1B2336]
                text-slate-300 hover:text-white
                transition-all duration-200">

        <i class="fa-solid fa-chevron-right
                  text-[10px] text-slate-500"></i>

        <i class="fa-solid fa-folder text-yellow-400"></i>

        <span class="text-sm font-medium truncate">
            ${el.name}
        </span>

    </div>

    <div class="folder-children hidden ml-5 pl-2
                border-l border-[#293047]">

        <!-- Folder contents -->

    </div>

</div>`
fileTree.appendChild(div)
          }else{
             const div = document.createElement('div')
             div.innerHTML=`<div class="file-item flex items-center gap-3
            px-3 py-2.5 rounded-lg cursor-pointer
            hover:bg-[#1B2336]
            text-slate-300 hover:text-white
            transition-all duration-200">

    <span class="w-[10px] shrink-0"></span>

    <i class="${getFileIcon(el.name)}"></i>

    <span class="text-sm font-medium truncate">
        ${el.name}
    </span>

</div>`
fileTree.appendChild(div)

          }
    });

   

}