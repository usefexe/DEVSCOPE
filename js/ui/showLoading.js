export function showLoading(open){
    if(open){
        const div = document.createElement('div')
        div.classList.add(
    "absolute",
    "inset-0",
    "z-20",
    "rounded-3xl",
    "border",
    "border-[#293047]",
    "bg-[#0D1120]",
    "flex",
    "max-h-60",
    "mt-55",
    "mx-5",
   
    "flex-col",
    "items-center",
    "justify-center",
    "gap-5",
    "px-6",
    "py-12",
    "text-center"
);
div.setAttribute('id','loadingState')
div.innerHTML=`<div class="relative w-20 h-20
              flex items-center justify-center">

    <div class="absolute inset-0 rounded-full
                border-4 border-[#263249]
                border-t-cyan-400
                border-r-purple-500
                animate-spin">
    </div>

    <i class="fa-solid fa-code
              text-2xl text-cyan-400 px-7 py-7"></i>
  </div>

  <!-- Message -->
  <div>
    <h2 class="text-xl md:text-2xl
               font-bold text-[#F1F5F9]">
      Analyse du profil en cours...
    </h2>

    <p class="mt-3 text-[#94A3B8] text-base">
      Récupération des données GitHub,
      veuillez patienter.
    </p>
  </div>

  <!-- Animated dots -->
  <div class="flex items-center gap-2">

    <span class="w-2 h-2 rounded-full
                 bg-cyan-400 animate-bounce"></span>

    <span class="w-2 h-2 rounded-full
                 bg-purple-500 animate-bounce
                 [animation-delay:150ms]"></span>

    <span class="w-2 h-2 rounded-full
                 bg-pink-500 animate-bounce
                 [animation-delay:300ms]"></span>

                 `
                 document.body.appendChild(div)
    }else{
        document.getElementById('loadingState').remove()
    }

}