

let userEmail = document.querySelector('#js-user-email')
let userPassword = document.querySelector('#js-user-password')

let getUserEmail = localStorage.getItem('userEmail')
let getUserPassword = localStorage.getItem('userPassword')

let logInBtn = document.querySelector('#js-login')

logInBtn.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(userEmail === '' || userPassword === ''){
        alert('ادخل جميع بياناتك')
    }else{
        if(getUserEmail === userEmail.value && getUserPassword === userPassword.value){
            setTimeout(()=>{
                window.location = 'index.html'
            }, 1000)
        }else{
            alert('الايميل او الباسورد غلط')
        }
    }
})




