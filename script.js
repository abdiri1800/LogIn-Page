const username = document.getElementById("username");
const emailAddress = document.getElementById("username10");
// const password1 = document.querySelector("#username2")
let button = document.getElementById("submit");
button.addEventListener("click",(e)=>{
    e.preventDefault();
    checkinput();
    passwordlength();
    validation()
    checkfield();
    checkpassword();
})
username.addEventListener("keyup", (e)=>{
    e.preventDefault();
    checkinput();
    
})

emailAddress.addEventListener("keyup",(e)=>{
    e.preventDefault()
    // checkemail()
    validation()
})

function checkinput(){
    const Usernamevalue = username.value.trim();
    setTimeout(() => {
        checkfield();
    }, 400);
    
    
    // console.log("usernameval",Usernamevalue.length)

    if (Usernamevalue.length==0){
        // alert("username is blank")
     errormessage(Usernamevalue, "username cannot be blank     !");

    }
     else{
       return success(Usernamevalue, "");
    }
    
   
      

}

const checkemail=()=>{
    const form = document.querySelector("#username1");
    const email = document.getElementById("username1").value;
    const text = document.getElementsByClassName("text");
    const pattern = /^[^]+@[^]+\.[a-z]{2,3}$ /;
    if(email.match(pattern)){
        console.log("match")
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerText = "your email address is valid";
        text.style.color = "green";
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "please enter valid email";
        // text.style.color = "red";
    }
    // setTimeout(() => {
    //     checkfield1()
    // }, 400);
    // const emailvalue = emailAddress.value.trim()
    
    // if(emailvalue===""){
        // invalid(emailvalue)
        // emailAddress.classList.remove("input-success")
        // emailAddress.classList.add("input-error")
        // const display3 = document.querySelector(".error-message1");
    // display3.innerText = "email cannot be blank";
    // redfield(emailvalue);
    
    // }else if(emailvalue!==""){
    //     const display3 = document.querySelector(".error-message1");
    // display3.innerText = "email cannot be blank";
    // emailAddress.classList.add("input-success")
//     greenfield(emailvalue);
//     }
// function greenfield(emailvalue) {
//         emailAddress.classList.remove("input-error")
//         emailAddress.classList.add("input-success")
    
// }
// function redfield(emailvalue) {
//     emailAddress.classList.remove("input-success")
//         emailAddress.classList.add("input-error")
//         const display3 = document.querySelector(".error-message1");
//         display3.innerText = "email cannot be blank";
    
// }
}
   function validation(){
    let input= document.getElementById("username10");
    let email = document.getElementById("username10").value;
    let text = document.getElementById("text");
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    const display10 = document.querySelector(".error-message1")
    // .style.color="green";
    if(email.match(pattern)){
            input.classList.add("valid");
            input.classList.remove("invalid");
            
            // display11.style.color= "green;"
            display10.innerHTML= "email is valid";
            
            // text.innerHTML = "your email is valid";
            display10.style.color = "green";
        }else{
            display10.style.color = "";
            input.classList.add("invalid");
            input.classList.remove("valid");
            // const display10 = document.querySelector(".error-message1").style.color="red";
            display10.style.color= "red;"
            display10.innerText= "please enter valid email";
            
    }
   }
  function invalid(emailvalue) {
    emailAddress.classList.add("input-error1")
    emailAddress.classList.remove("success");
    const display = document.querySelector(".error-message1");
    display.innerText = "email is invalid";
  }
  function valid(emailvalue) {
    emailAddress.classList.remove("input-error")
    emailAddress.classList.add("success");
    const display = document.querySelector(".error-message");
    display.innerText = "email is valid";
  }
  

function errormessage(input){
    username.classList.remove("success")
    username.classList.add("input-error");
    const display = document.querySelector(".error-message");
    // console.log("testerr",display)
    display.innerText = "username cannot be blank";
    // const username = document.getElementById("username");
   
    
}

function success(input, message2){
    const display1 = document.querySelector(".success");
    // console.log("test",display1)
    display1.innerText = message2;
    username.classList.remove("input-error")
    username.classList.remove("error-message")
    username.classList.add("input-success")
    
}
function checkfield(){
    const Usernamevalue = username.value.trim();
    if (username.classList.contains("input-error")){
        // console.log("hggg",username.classList.contains("input-error"))
        document.getElementById("error").style.display = "block"
    }else{
        document.getElementById("error").style.display = "none"
        // console.log("moyhggg",username.classList.contains("input-error"))
    }
}
function checkfield1(){
    const emailvalue = emailAddress.value.trim()
    if (emailAddress.classList.contains("input-error")){
        // console.log("hggg",username.classList.contains("input-error"))
        document.getElementById("error1").style.display = "block"
    }else{
        document.getElementById("error1").style.display = "none"
        // console.log("moyhggg",username.classList.contains("input-error"))
    }
}
let password = document.getElementById("username2");
function passwordlength(){
    const minlength = 6;
    
    
    const display5 = document.querySelector(".error-message3")
    Passwordvalue = password.value.trim();
    // if(Passwordvalue ===""){
    //     display5.innerText = "password cannot be blank";
    // }else{
    //     return
    // }
    if(Passwordvalue.length<=6){
        display5.innerText = "password is too short";
        display5.style.color="red"
        password.classList.add("invalid")
        // display5.classList.add("invalid");
    }else{
        display5.innerText = "strong password"
        display5.style.color="green"
        password.classList.remove("invalid")
        password.classList.add("valid")
    }
}
password.addEventListener("keyup", (e)=>{
    e.preventDefault();
    passwordlength();
})

let password2 = document.getElementById("username3")
function checkpassword() {
    const display6 = document.querySelector(".error-message4");
    if(password2.value===password.value){
        display6.innerText="password match";
        display6.style.color ="green";
         password2.classList.remove("invalid")
        password2.classList.add("valid")
        
        
    }else{
        display6.innerText="password is not a match";
        display6.style.color ="red";
        password2.classList.remove("valid")
        password2.classList.add("invalid")
    }
}
password2.addEventListener("keyup",(e)=>{
    e.preventDefault();
    checkpassword();
})