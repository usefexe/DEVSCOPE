import { showmpthySl } from "../ui/showempthyShort.js"
import { showShortList } from "../ui/ShowShortList.js"



export async function getShortList(){
try{
        const res= await fetch('https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user')
        const data= await res.json()
        if(!res.ok){
            showmpthySl() 
        }else{
           showShortList(data) 
        }
    }catch(err){
        showmpthySl() 
    }
}