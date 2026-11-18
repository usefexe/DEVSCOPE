
import { showSucess } from "../event/addSucsses.js";
export function postUser(userpost){
    
       async function adduser() {
     try {
const response = await axios.post('https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user', 
userpost
);

showSucess()

} catch (error) {
console.error('Error:', error);
}
   }
adduser()
}