



export function updateLocal(name ){
    const lastlocal = JSON.parse(localStorage.getItem('useradd'))
    const newloacl= lastlocal.filter((el)=>{
        return el!==name
    })

    localStorage.setItem('useradd',JSON.stringify(newloacl))
}