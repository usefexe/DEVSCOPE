import { calculateActivityStats } from "../utils/calculateActivityStats.js";
const activeDays2= document.getElementById('activeDays2')
const activeDays1= document.getElementById('activeDays1')
const totalContrib2= document.getElementById('totalContrib2')
const totalContrib1= document.getElementById('totalContrib1')
const longestStreak2 = document.getElementById('longestStreak2')
const longestStreak1 = document.getElementById('longestStreak1')
export function showContrubtion(cont1,cont2){
  const [lg1,dy1]=calculateActivityStats(cont1.contributions)
  const [lg2,dy2]=calculateActivityStats(cont2.contributions)
  activeDays2.textContent=dy2
  activeDays1.textContent=dy1
  totalContrib1.textContent=cont1.total[2026]
  totalContrib2.textContent=cont2.total[2026]
  longestStreak2.textContent=lg2
  longestStreak1.textContent=lg1

}