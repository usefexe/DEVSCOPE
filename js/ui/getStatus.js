


    export function getStatus(status){
        const span = document.createElement('span')
    ;
        if(status==='refuse'){
            span.classList.add(
        "flex",
        "items-center",
        "gap-2",
        "px-3",
        "py-2",
        "rounded-xl",
        "text-xs",
        "font-bold",
        "uppercase",
        "text-rose-400",
        "bg-rose-500/10",
        "border",
        "border-rose-500/50"
    
    )
    span.innerHTML=`  <i class="fa-solid fa-circle text-[8px]"></i>
            Refusé
            `
        }else if(status==='acontacter'){
            span.classList.add(
        "flex",
        "items-center",
        "gap-2",
        "px-3",
        "py-2",
        "rounded-xl",
        "text-xs",
        "font-bold",
        "uppercase",
        "text-cyan-400",
        "bg-cyan-500/10",
        "border",
        "border-cyan-500/50"
    );
    span.innerHTML=`   <i class="fa-solid fa-circle text-[8px]"></i>
          À contacter`
        }
        else{
                span.classList.add(
        "flex",
        "items-center",
        "gap-2",
        "px-3",
        "py-2",
        "rounded-xl",
        "text-xs",
        "font-bold",
        "uppercase",
        "text-amber-400",
        "bg-amber-500/10",
        "border",
        "border-amber-500/50"
    );

    span.innerHTML = `
        <i class="fa-solid fa-circle text-[8px]"></i>
        Pending
    `;
        }
        return span
    }