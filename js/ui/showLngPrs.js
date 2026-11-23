import { getLanguageColor } from "./getLngColor.js";
import { showLanguageList } from "./showLnglis.js";
  const langChart1= document.getElementById('langChart1')
  const langDev1Count = document.getElementById('langDev1Count')
  const langDev1List = document.getElementById('langDev1List')

    const langChart2= document.getElementById('langChart2')
  const langDev2Count = document.getElementById('langDev2Count')
  const langDev2List = document.getElementById('langDev2List')
export function showLngPrs(lang1, lang2,tc1,tc2){
    let style1=" conic-gradient("
    let start1=0
  lang1.forEach(el => {
     const color = getLanguageColor(el.name)
     style1+=`${color} ${start1}% ${start1+el.percentage}%,`
     start1+=el.percentage
  });
  style1=style1.slice(0, -1) + ")";
  langChart1.style.background=style1
 langDev1Count.textContent=tc1
showLanguageList(langDev1List,lang1)

//dev2
   let style2=" conic-gradient("
    let start2=0
  lang2.forEach(el => {
     const color = getLanguageColor(el.name)
     style2+=`${color} ${start2}% ${start2+el.percentage}%,`
     start2+=el.percentage
  });
  style2=style2.slice(0, -1) + ")";
  langChart2.style.background=style2
 langDev2Count.textContent=tc2
showLanguageList(langDev2List,lang2)



}



//pause