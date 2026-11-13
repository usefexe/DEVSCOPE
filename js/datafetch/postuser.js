
import { showSucess } from "../event/addSucsses.js";
export function postUser(userpost){
    
       async function adduser() {
     try {
const response = await fetch('https://6af4a03f55a1de7dcf045283.mockapi.io/shorlist/user', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(userpost)
});
if (!response.ok) throw new Error(`Error: ${response.status}`);
const data = await response.json();
showSucess()

} catch (error) {
console.error('Error:', error);
}
   }
adduser()
}