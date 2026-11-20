import { getOneUserid } from "../datafetch/getOneuser.js"
import { showcomparList } from "../ui/shiwComparList.js"

import { showUsertoCompar } from "../ui/showUsertoCompar.js"
import { closeComapre } from "./closeCompare.js"
import { lunchComapre } from "./lanchComar.js"
import { searchInCompare } from "./searchinCompre.js"
import { selectProfile } from "./selectProfile.js"
const launchCompare = document.getElementById('launchCompare')
const compareModal= document.getElementById('compareModal')
const searchCompareDev = document.getElementById('searchCompareDev')
export async function  openCompare(id){
compareModal.classList.remove('hidden')
    const user= await getOneUserid(id)
    if(user){
        searchCompareDev.dataset.id=id
        launchCompare.dataset.div1=user.login
        showUsertoCompar(user)
        showcomparList(id)
        selectProfile()
        closeComapre()
        searchInCompare()
        lunchComapre()
    }
}