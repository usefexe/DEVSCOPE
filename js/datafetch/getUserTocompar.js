

export async function getUserTocompare(div1,div2){
  try{  const [res1,res2,rep1,rep2]= await Promise.all([
    axios.get(`https://api.github.com/users/${div1}`),
      axios.get(`https://api.github.com/users/${div2}`),
        axios.get(`https://api.github.com/users/${div1}/repos`),
          axios.get(`https://api.github.com/users/${div2}/repos`)
         
    ])
     return [{profile:res1.data,repo:rep1.data},{profile:res2.data,repo:rep2.data}]
        
            
          

}catch(err){
        return undefined
    }
    
}