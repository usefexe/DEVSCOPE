

export function getOneUserid(id){
     async function getuser(){
    try{
            const res= await fetch(`https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user/${id}`)
            
            if(!res.ok){
               throw new Error("ureur")
            }
            
           return await res.json()
        }catch(err){
            return undefined
          
        }
    }
    return   getuser()
}