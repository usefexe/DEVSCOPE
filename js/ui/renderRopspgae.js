import { getRepsDetails } from "../datafetch/getreposDetails.js"
import { showLoading } from "./showLoading.js"
import { showReposState } from "./showreosDtStat.js"
let params = new URLSearchParams(document.location.search)

export async function renderRepos(){
    showLoading(true)
    const owner = params.get('owner')
    const repo = params.get('repo')
    const data=  await getRepsDetails(owner,repo)
    if(data){
        showLoading(false)
        showReposState(data)
    }
    
}