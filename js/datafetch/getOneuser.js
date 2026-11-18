

export function getOneUserid(id){
     async function getuser(){
    try{
            const res= await axios.get(`https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user/${id}`)
            
          
            
           return  res.data
        }catch(err){
            return undefined
          
        }
    }
    return   getuser()
}