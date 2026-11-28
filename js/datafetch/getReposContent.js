


export async function getRepoContent(owner,repo,path='') {
    try{
     const repoRes= await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`)
     return repoRes.data
   }catch(erreur){
    return  undefined
   }
}

