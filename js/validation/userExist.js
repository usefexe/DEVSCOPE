export function alredyExist(lg){
    const users=JSON.parse(localStorage.getItem('useradd'))||[]
    
   return users.find(el=> (el===lg))
   
}