

/*
    <section>
        <div class="section-form">
            <h2>Sign In</h2>
            <form action="">
                <div class="user-name">
                    <div class="first-name">
                        <label for="first-name">FirstName</label>
                        <input type="text" id="js-first-name">
                    </div>
                    <div class="last-name">
                        <label for="last-name">Last name</label>
                        <input type="text" id="js-last-name">
                    </div>
                </div>
                <div class="user-email">
                    <label for="">Email</label>
                    <input type="email" title="Write Your email" id="js-user-email">
                </div>
                <div class="user-password">
                    <label for="">Password</label>
                    <input type="password" title="Write Your Password" id="js-user-password">
                </div>
                <div>
                    <input type="submit" id="js-register">
                </div>
            </form>
        </div>
    </section>
*/

let userFirstName = document.querySelector('#js-first-name')
let userLastName = document.querySelector('#js-last-name')
let userEmail = document.querySelector('#js-user-email')
let userPassword = document.querySelector('#js-user-password')

let registerBtn = document.querySelector('#js-register')

registerBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    if(userFirstName === '' || userLastName === '' || userEmail === '' || userPassword === ''){
        alert('دخل بياناتك كاملا ي صديقي')
    }else{
        localStorage.setItem('userFirstName' , userFirstName.value)
        localStorage.setItem('userLastName', userLastName.value)
        localStorage.setItem('userEmail', userEmail.value)
        localStorage.setItem('userPassword', userPassword.value)

        setTimeout(()=>{
            window.location = 'login.html'
        }, 1000)
    }
}) 




