/*
    /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
*/
let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");
let showpW = document.querySelector(".showp");
let showp = document.querySelector(".showp input");

showpW.addEventListener("click",()=>{
    if(showp.checked == true){
        passwordRef.type = "text";
    }
    if(showp.checked == false){
        passwordRef.type = "password";
    }
})




let isUsernameValid = () => {
    /* Username should be contain more than 3 characters. Should begin with alphabetic character  Can contain numbers */
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
    /* Password should be atleast 8 characters long. Should contain atleast 1 number, 1 special symbol , 1 lower case and 1 upper case */
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener("input", () => {
    if (!isUsernameValid()) {
        messageRef.style.visibility = "hidden";
        usernameRef.style.cssText =
            "border-color: #fe2e2e; background-color: #ffc2c2";
    } else {
        usernameRef.style.cssText =
            "border-color: #34bd34; background-color: #c2ffc2";
    }
});

passwordRef.addEventListener("input", () => {
    if (!isPasswordValid()) {
        messageRef.style.visibility = "hidden";
        passwordRef.style.cssText =
            "border-color: #fe2e2e; background-color: #ffc2c2";
    } else {
        passwordRef.style.cssText =
            "border-color: #34bd34; background-color: #c2ffc2";
    }
});

submitBtn.addEventListener("mouseover", () => {
    //If either password or username is invalid then do this..
    if (!isUsernameValid() || !isPasswordValid()) {
        //Get the current position of submit btn
        let containerRect = document
            .querySelector(".container")
            .getBoundingClientRect();
        let submitRect = submitBtn.getBoundingClientRect();
        let offset = submitRect.left - containerRect.left;
        console.log(offset);
        //If the button is on the left hand side.. move it to the the right hand side
        if (offset <= 100) {
            if(innerWidth > 700){
            submitBtn.style.transform = "translateX(16.25em)";
            }
            if(innerWidth < 700){
                submitBtn.style.transform = "translateX(10.25em)";
                }
                if(innerWidth < 400){
                    submitBtn.style.transform = "translateX(7.25em)";
                    }
        }
        //Vice versa
        else {
            submitBtn.style.transform = "translateX(0)";
        }
    }
});
submitBtn.addEventListener("click", () => {
    messageRef.style.visibility = "visible";
});