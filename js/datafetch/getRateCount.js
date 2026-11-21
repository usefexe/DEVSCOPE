export async function getRatecount() {
   try {const ret= await axios.get('https://api.github.com/rate_limit')
   
      const time = new Date(ret.data.rate.reset)
    //   console.log(ret.data.rate)
      return {
        limit:ret.data.rate.limit,
        remaining:ret.data.rate.remaining,
        time:time.getMinutes()
      }
    }
     catch(err){
      return undefined
     }
}