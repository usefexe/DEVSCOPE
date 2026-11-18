import { MOCKAPI_URL } from "../config.js";
import { updateLocal } from "../storage/updatestorage.js";
import { showDeleteSuccess } from "../ui/deletessecc.js";

import { getShortList } from "./getShortlist.js";

export function deleUserShortL(id,element ,login ){
     async function dlt() {
            try {

       await axios.delete(`${MOCKAPI_URL}/${id}`);
   
     getShortList()
     updateLocal(login)
     showDeleteSuccess()
     document.getElementById('deleteModal').classList.add('hidden')
   
     
    } catch (error) {
   
    element.disabled=true
    document.getElementById('deleteModal').classList.add('hidden')
    }
     }
     dlt()
}