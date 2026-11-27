


export  function calculateActivityStats(contrub){
    let activeday=0
    let logeststrick=0
    let currentstrick=0
    for (let i = 0; i < contrub.length; i++) {
        if(contrub[i].count>0){
            activeday++
          currentstrick++
          currentstrick>logeststrick?logeststrick=currentstrick:""
        }else{
            currentstrick>logeststrick?logeststrick=currentstrick:""
            currentstrick=0
        }
        
    }
    return [logeststrick,activeday]
}