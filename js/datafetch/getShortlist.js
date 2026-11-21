import { showmpthySl } from "../ui/showempthyShort.js"
import { showShortList } from "../ui/ShowShortList.js"
import { filter } from "../storage/state.js"



export async function getShortList(){
try{
        const res= await axios.get('https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user')
        const data= await res.data
     
            
    let users = data.filter((el) => {
    
       const srch =el.login.toLowerCase().includes(filter.derachvalue.toLowerCase())
       const flr = filter.filter==='all'||el.status===filter.filter
       return srch && flr
})       
showShortList(users) 
localStorage.setItem('shotlist',JSON.stringify(users))
    }catch(err){
        showmpthySl() 
      
    }
}