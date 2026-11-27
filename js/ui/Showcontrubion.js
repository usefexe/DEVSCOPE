import { calculateActivityStats } from "../utils/calculateActivityStats.js";
import { showContributions } from "./showConributionSquare.js";
import { showContributionLegend } from "./showContributionLengend.js";
const activeDays2= document.getElementById('activeDays2')
const activeDays1= document.getElementById('activeDays1')
const totalContrib2= document.getElementById('totalContrib2')
const totalContrib1= document.getElementById('totalContrib1')
const longestStreak2 = document.getElementById('longestStreak2')
const longestStreak1 = document.getElementById('longestStreak1')
const grid1 = document.getElementById("contribGrid1")
const grid2 = document.getElementById("contribGrid2")
const legend1 = document.getElementById("contribLegend1")
const legend2 = document.getElementById("contribLegend2")
const colors1 = [
    "#202A3D",
    "#164E63",
    "#0E7490",
    "#06B6D4",
    "#67E8F9"
]

const colors2 = [
    "#202A3D",
    "#3B2463",
    "#6D28D9",
    "#8B5CF6",
    "#C4B5FD"
]

export function showContrubtion(cont1,cont2){
  const [lg1,dy1]=calculateActivityStats(cont1.contributions)
  const [lg2,dy2]=calculateActivityStats(cont2.contributions)
  activeDays2.textContent=dy2
  activeDays1.textContent=dy1
  totalContrib1.textContent=cont1.total[2026]
  totalContrib2.textContent=cont2.total[2026]
  longestStreak2.textContent=lg2
  longestStreak1.textContent=lg1


showContributionLegend(legend1, colors1)
showContributionLegend(legend2, colors2)
showContributions(grid1, cont1.contributions, colors1)
showContributions(grid2, cont2.contributions, colors2)
}