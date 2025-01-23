
let vidIndex = 1;
const video = document.querySelector('.scroll-vid');

video.addEventListener("ended", function () {
    vidIndex += 1;
    let vidLink = `Vids/Hospital Videos- ${vidIndex}.mp4`;
    video.src = vidLink;
    if (vidIndex == 5) {
        vidIndex = 0;
    } 
}, false)




const username = document.querySelector('.user-input');
const password = document.querySelector('.pass-input');
const btn = document.querySelector('.signin-button');
const msg = document.querySelector('.signin-status');

const emailValidation = /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
btn.addEventListener('click', function signIn (e) {
    e.preventDefault();
    msg.innerText = "";
    const usernameValue = username.value;
    const passwordValue = password.value;
    msg.style.color = "red";
    let ifSendData = true;
    
    if (!emailValidation.test(usernameValue)) {
        msg.innerText = "لطفا نام کاربری یا رمز عبور را صحیح وارد کنید!";
        ifSendData = false;
    }
    
    if (passwordValue.length <= 5) {
            alert(password.value.length)
            msg.innerText = "لطفا نام کاربری یا رمز عبور را صحیح وارد کنید!";
            ifSendData = false;
        }

        if (ifSendData) {
            const body = JSON.stringify({
                username: usernameValue,
                password: passwordValue,
            })
            const headers = {
                "Content-Type": "application/json"
            }
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: body,
                headers: headers
            })
                .then(response => {
                    if(response.ok) {
                        msg.innerText = "با موفقیت وارد شدید!"
                        msg.style.color = "green";
                    }
                })
                .catch(() => console.log("not"))
        }
});
