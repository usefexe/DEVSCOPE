
const compareDevelopersList = document.getElementById('compareDevelopersList')
export function showcomparList(id){
    const liste= JSON.parse(localStorage.getItem('shotlist'))
    const user= liste.filter((el)=>{
    return el.id !==id
    })
      compareDevelopersList.innerHTML=''
    user.forEach(elm => {
   
      
        const label = document.createElement('label') 
        label.classList.add('flex','items-center', 'gap-3','p-3','rounded-xl','bg-[#151C30]','border','border-[#293047]','hover:border-cyan-400/60','has-checked:border-cyan-400','has-checked:bg-cyan-400/5','has-checked:bg-cyan-400/5','transition-all','cursor-pointer') 
        label.innerHTML=`                <img src="${elm.avatar_url}"
                    class="w-11 h-11 rounded-xl object-cover"
                    alt="Avatar">

                <div class="flex-1">
                    <h3 class="text-sm font-bold text-white">
                        ${elm.name||elm.login}
                    </h3>

                    <p class="text-xs text-slate-400">
                        @${elm.login}
                    </p>
                </div>
            
                <div class="flex items-center gap-1 text-amber-400 text-sm">
                    <i class="fa-solid fa-star"></i>
                    <span>${elm.rating}/5</span>
                </div>

                <input type="radio"
                    name="compareDeveloper"
                    value="${elm.login}"
                    class="w-5 h-5 accent-cyan-400 cursor-pointer">`
                    compareDevelopersList.appendChild(label)
    });
}

