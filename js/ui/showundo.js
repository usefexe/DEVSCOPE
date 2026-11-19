
const undoToast = document.getElementById('undoToast')
const undoDelete = document.getElementById('undoDelete')
const undoProgress = document.getElementById('undoProgress')
const undoTimer = document.getElementById('undoTimer')
export async function showUndo(){
     undoProgress.style.width=`${100}%`
     undoTimer.textContent = 5;

   let timing=5
   let lodaed =0
   undoToast.classList.remove('hidden')

   const loadingInerval=setInterval(()=>{
     lodaed+=0.2
     undoProgress.style.width=`${100-lodaed}%`
   },10)
 



return new Promise((resolve) => {

    function handlundo (){

                 clearInterval(interval)
     clearInterval(loadingInerval)
     undoToast.classList.add('hidden')
            resolve(true);
        
    }
   const interval= setInterval(()=>{
    if(timing===0){
         undoDelete.removeEventListener('click', handlundo);
        undoToast.classList.add('hidden')
        clearInterval(interval)
        clearInterval(loadingInerval)
         resolve(false)
    
      
        
        
    }else{
        timing--
        undoTimer.textContent=timing
    }

    },1000)

   undoDelete.addEventListener('click',handlundo, { once: true });


});
  
}