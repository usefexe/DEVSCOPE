import { CACHE_DURATION,CACHE_PREFIX } from "../config.js";

export function saveCatch(name , data ){
    const key = CACHE_PREFIX+name
    localStorage.setItem(key,JSON.stringify(data))
}

export function getCatch(name){
    const data = JSON.parse(localStorage.getItem(CACHE_PREFIX+name))
    if(data){
       const valide = Date.now()<new Date(data.saveat+CACHE_DURATION)
       if(valide){
        return {
            profile:data.profile,
            repos:data.repos
        }
       }else{
        return undefined
       }
    }else {
        return undefined
    }
}