import { getRatecount } from "../datafetch/getRateCount.js";
import { rateLimitStyle } from "./rateLimitStyle.js";

const rateRemaining = document.getElementById('rateRemaining')
const rateLimit= document.getElementById('rateLimit')
const rateReset = document.getElementById('rateReset')
export async function ShowRateLimit(){
      const  data= await getRatecount()
      if(data){
        console.log(data)
        rateLimitStyle(data.remaining,data.limit)
      rateRemaining.textContent=data.remaining
      rateLimit.textContent=data.limit
      rateReset.textContent=`${data.time} min`
      }
}