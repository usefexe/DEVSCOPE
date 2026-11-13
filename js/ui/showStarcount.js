

export function showStarCount(count){
     const div = document.createElement('div')
      div.classList.add('flex' , 'items-center', 'gap-1' , 'text-[#A3E635]', 'text-lg')
    for (let i = 0; i < 5; i++) {
        if(i<count){
           const i = document.createElement('i')
           i.classList.add('fa-solid','fa-star')
           div.appendChild(i)
        }else{
              const i = document.createElement('i')
           i.classList.add('fa-regular','fa-star')
           div.appendChild(i)
        }
        
    }
   return div
}

