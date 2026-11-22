const dev1Avatar= document.getElementById('dev1Avatar')
const dev1Name = document.getElementById('dev1Name')
const dev1Login = document.getElementById('dev1Login')
const dev1Orientation= document.getElementById('dev1Orientation')
const dev2Avatar= document.getElementById('dev2Avatar')
const dev2Name = document.getElementById('dev2Name')
const dev2Login = document.getElementById('dev2Login')
const dev2Orientation= document.getElementById('dev2Orientation')
const dev1Technologies= document.getElementById('dev1Technologies')
const dev2Technologies= document.getElementById('dev2Technologies')
import { renderTechnologies } from "./renderTeceh.js"
export function showHeaderCompar(data,compare){

const profile1 = data[0].profile
const repo1 = data[0].repos
const profile2 = data[1].profile
const repo2 = data[1].repos
const developer1 = compare.developer1
const developer2=compare.developer2
  console.log(data)
  console.log(compare)
   dev1Avatar.src=profile1.avatar_url
   dev1Name.textContent=profile1.login
   dev1Login.textContent=`@${profile1.login}`
   dev1Orientation.textContent=developer1.orientation
      dev2Avatar.src=profile2.avatar_url
   dev2Name.textContent=profile2.name||profile2.login
   dev2Login.textContent=`@${profile2.login}`
   dev2Orientation.textContent=developer2.orientation
   renderTechnologies(developer1.technologies,dev1Technologies)
    renderTechnologies(developer2.technologies,dev2Technologies)

}