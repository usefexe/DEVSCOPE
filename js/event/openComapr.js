import { getOneUserid } from "../datafetch/getOneuser.js"
import { showcomparList } from "../ui/shiwComparList.js"

import { showUsertoCompar } from "../ui/showUsertoCompar.js"

const compareModal= document.getElementById('compareModal')
export async function  openCompare(id){
compareModal.classList.remove('hidden')
    const user= await getOneUserid(id)
    if(user){
        showUsertoCompar(user)
        showcomparList(id)
    }
}