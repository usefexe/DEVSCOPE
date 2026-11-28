import { getRepoContent } from "../datafetch/getReposContent.js"
import { getRepsDetails } from "../datafetch/getreposDetails.js"
import { showFileTree } from "./showFileTree.js"
import { showLoading } from "./showLoading.js"
import { showReposState } from "./showreosDtStat.js"
import { showRepoExplorer } from "./showRepoExplorer.js"
let params = new URLSearchParams(document.location.search)

export async function renderRepos(){
    showLoading(true)
    const owner = params.get('owner')
    const repo = params.get('repo')
    const data=  await getRepsDetails(owner,repo)
    if(data){
        showLoading(false)
        showReposState(data)
        const repocontent = await getRepoContent(owner,repo)
        showRepoExplorer(repocontent)
       
    }
    
}