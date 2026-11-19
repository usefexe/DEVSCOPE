const rateProgress = document.getElementById('rateProgress')
const  rateStatus = document.getElementById('rateStatus')

export  function rateLimitStyle(rm,lm){
    const prs= rm/lm*100
    rateProgress.style.width=`${prs}%`

   
    if(prs>=50){
   rateStatus.style.backgroundColor = "#34D399";
    }else if(prs<50 && prs>=20){
  rateStatus.style.backgroundColor = "	#FBBF24";
    }else if (prs<20 && prs>1){
  rateStatus.style.backgroundColor = "	#FB923C";
        
    }else{
rateStatus.style.backgroundColor = "	#F43F5E";
    }

}