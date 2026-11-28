import { getRepsDetails } from "../datafetch/getreposDetails.js"
let params = new URLSearchParams(document.location.search)

export async function renderRepos(){

    const owner = params.get('owner')
    const repo = params.get('repo')
    const data=  await getRepsDetails(owner,repo)
    console.log(data)
    
}