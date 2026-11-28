


export async function getRepsDetails(owner,repo){

try{
     const repoRes= await axios.get(`https://api.github.com/repos/${owner}/${repo}`)
     return repoRes.data
}catch(erreur){
    return  undefined
}

}