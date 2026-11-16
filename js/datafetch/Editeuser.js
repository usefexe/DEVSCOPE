export async function updateUser(id, body) {
    try {
        const res = await fetch(
            `https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }
        )

        if (!res.ok) {
            throw new Error(`Erreur : ${res.status}`)
        }

        return await res.json()

    } catch (err) {
        console.error(err)
        return null
    }
}