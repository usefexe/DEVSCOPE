

export async function getContrubution (dev1,dev2){
   try{ const [cont1,cont2] =await Promise.all([
        axios.get(`https://github-contributions-api.jogruber.de/v4/${dev1}?y=2026`),
       axios.get(`https://github-contributions-api.jogruber.de/v4/${dev2}?y=2026`)
    ])
    return [cont1.data,cont2.data]
}catch(err){
    return undefined
}
}