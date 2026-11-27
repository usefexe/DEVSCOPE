import { getAnalitycCompar } from "../datafetch/getAnalyseCompare.js";
import { getContrubution } from "../datafetch/getContrubuition.js";
import { getUserTocompare } from "../datafetch/getUserTocompar.js"
import { showContrubtion } from "./Showcontrubion.js";
import { showHeaderCompar } from "./showHeaderCompar.js";
import { showLanguageList } from "./showLnglis.js";
import { showLngPrs } from "./showLngPrs.js";
  const loadingState  = document.getElementById('loadingState')
const params = new URLSearchParams(window.location.search);

export async function fstrender(){
loadingState.classList.remove('hidden')
  document.getElementById('comparisonResult').classList.add('hidden')
      const div1=params.get('div1')
    const div2=params.get('div2')
    const [div1data,div2data]= await getUserTocompare(div1,div2)
    const developers = [div1data, div2data].map(dev => ({
        login: dev.profile.login,
        bio: dev.profile.bio?.slice(0, 300) ?? null,
        repositories: dev.profile.public_repos,

        projects: dev.repo.slice(0, 15).map(repo => ({
            name: repo.name,
            description: repo.description?.slice(0, 200) ?? null,
            language: repo.language
        }))
    }))
    const trpc1=div1data.repo.length
    const trpc2=div2data.repo.length
    const [cont1,cont2]= await getContrubution(div1,div2)

    const compar = await getAnalitycCompar(developers)
    if(compar){
        loadingState.classList.add('hidden')
          document.getElementById('comparisonResult').classList.remove('hidden')
        showHeaderCompar([div1data,div2data],compar)
        showLngPrs(compar.developer1.topLanguages,compar.developer2.topLanguages,trpc1,trpc2)
        showContrubtion(cont1,cont2)
        
        
    }
}