import { use } from "../storage/state.js"
import { postUser } from "../datafetch/postuser.js"
import { alredyExist } from "../validation/userExist.js"

const addShortlist = document.getElementById('addShortlist')

export function addShortList() {

    addShortlist.addEventListener('click', async () => {

        const user = use.profile

        if (!user || alredyExist(user.login)) return

        const userpost = {
            login: user.login,
            name: user.name,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            language: user.language || 'unknown',
            status: "pending",
            note: null,
            rating: 2
        }

        addShortlist.disabled = true

        try {
            await postUser(userpost)

            const userAdded =
                JSON.parse(localStorage.getItem('useradd')) || []

            if (!userAdded.includes(user.login)) {
                userAdded.push(user.login)
                localStorage.setItem(
                    'useradd',
                    JSON.stringify(userAdded)
                )
            }

          
            if (use.profile?.login === user.login) {
                addShortlist.classList.remove(
                    "hover:opacity-90", "cursor-pointer"
                )
                addShortlist.classList.add(
                    "opacity-50", "cursor-not-allowed"
                )
            }

        } catch (error) {
            console.error('Erreur POST:', error)

            if (use.profile?.login === user.login) {
                addShortlist.disabled = false
            }
        }
    })
}
