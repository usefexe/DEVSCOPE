export async function updateUser(id, body) {
    try {
   
    
        const res = await  axios.put(`https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user/${id}`,body)


        return res.data

    } catch (err) {
        console.error(err)
        return null
    }
}