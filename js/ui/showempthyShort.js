const shortlistContainer = document.getElementById('shortlistContainer')


export function showmpthySl(){
shortlistContainer.innerHTML=''
shortlistContainer.innerHTML=`  <div id="notFound"
       role="alert"
       class="  absolute inset-0 z-20 rounded-3xl border border-[#293047] bg-[#0D1120] flex-col max-h-60 mt-100 items-center flex  justify-center mx-10 gap-6 px-6 py-14 text-center">

 
    <div class="w-20 h-20 rounded-full flex items-center justify-center border border-rose-500/50 bg-[#0D1120] shadow-[0_0_35px_rgba(236,72,153,0.18)]">

      <i class="fa-solid fa-exclamation text-3xl  py-6 px-6 text-[#FB7185] text-center"></i>
    </div>


    <div class="max-w-[500px]">
      <h2 class="text-xl md:text-2xl font-bold text-[#F1F5F9] leading-relaxed">
        Aucun développeur trouvé dans le shortlsit.
      </h2>

      <p class="mt-2 text-[#94A3B8] text-base">
        Vérifiez que tu ajouter des développeurs au shortList .
      </p>
    </div>

  </div>`
}