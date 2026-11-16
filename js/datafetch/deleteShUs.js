import { MOCKAPI_URL } from "../config.js";
import { updateLocal } from "../storage/updatestorage.js";
import { showDeleteSuccess } from "../ui/deletessecc.js";

import { getShortList } from "./getShortlist.js";

export function deleUserShortL(id,element ,login ){
     async function dlt() {
            try {
                element.disabled=true
      const res = await fetch(`${MOCKAPI_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`error ${res.status}`);
     getShortList()
     updateLocal(login)
     showDeleteSuccess()
     document.getElementById('deleteModal').classList.add('hidden')
      element.disabled=true
     
    } catch (error) {
   
    element.disabled=true
    document.getElementById('deleteModal').classList.add('hidden')
    }
     }
     dlt()
}