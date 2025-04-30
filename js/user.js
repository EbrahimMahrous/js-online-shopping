




let logInLogOut = document.querySelector('.login-logout')
let logOutCart = document.querySelector('.logout-cart')
let headerUserName = document.querySelector('.header-user-name')


if(localStorage.getItem('userFirstName')){
    logInLogOut.remove()
    logOutCart.style.display = 'flex'
    headerUserName.innerHTML = localStorage.getItem('userFirstName')
}


let logOutLink = document.querySelector('.logout-Link')
logOutLink.addEventListener('click', ()=> {
    localStorage.clear()
    setTimeout(()=>{
        window.location = 'register.html'
    })
})