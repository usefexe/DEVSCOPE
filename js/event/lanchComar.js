const launchCompare = document.getElementById('launchCompare')

export function lunchComapre(){
launchCompare.addEventListener('click',()=>{
    const div1=  launchCompare.dataset.div1
         const div2=  launchCompare.dataset.div2
    if(div1&&div2){ 
         window.location.href=`compar.html?div1=${div1}&div2=${div2}`}
})
}