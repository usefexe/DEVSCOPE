
import { updateUser } from "../datafetch/Editeuser.js"
import { calcContSat } from "./calculeCntSat.js"
import { getOneUserid } from "../datafetch/getOneuser.js"
import { showStarcounting } from "../ui/showStarcounting.js"
import { changeStar } from "./startclick..js"
import { showShortList } from "../ui/ShowShortList.js"
import { getShortList } from "../datafetch/getShortlist.js"
const savemodal = document.getElementById('savemodal')
const editCandidateName = document.getElementById('editCandidateName')
const editModal = document.getElementById('editModal')
const editNote = document.getElementById('editNote')
const editStatus = document.getElementById('editStatus')
const cancelEdit = document.getElementById('cancelEdit')
const closeEditModal = document.getElementById('closeEditModal')

export async function openModif(id) {

    const data = await getOneUserid(id)

    if (data) {
        editModal.classList.remove('hidden')
        editCandidateName.textContent = data.login

        showStarcounting(data.rating)
        changeStar()

        editNote.value = data.note || ""
        editStatus.value = data.status

        savemodal.onclick = async (e) => {
            e.preventDefault()

            const body = {
                status: editStatus.value,
                rating: calcContSat(),
                note: editNote.value
            }

            const result = await updateUser(id, body)

            if (result) {
                editModal.classList.add('hidden')
               getShortList()
            }
        }

    } else {
        console.log('not found')
    }

    cancelEdit.onclick = () => {
        editModal.classList.add('hidden')
    }

    closeEditModal.onclick = () => {
        editModal.classList.add('hidden')
    }
}