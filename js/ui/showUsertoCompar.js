
let firstDevName= document.getElementById('firstDevName')
let firstDevLogin= document.getElementById('firstDevLogin')
let firstDevAvatar = document.getElementById('firstDevAvatar')
export function showUsertoCompar(user){
      firstDevName.textContent=user.name||user.firstDevLogin
      firstDevLogin.textContent=`@${user.login}`
     firstDevAvatar.src=user.avatar_url
}