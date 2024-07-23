let signinform=document.getElementById("form-signup");
// let data=JSON.parse(localStorage.getItem("userdata")) || [];
let arr=[];

let phonesignup=document.getElementById("phone-signup").value;
    // console.log(phonesignup);
signinform.addEventListener("submit",(e)=>{
    e.preventDefault();


    
    let emailsignup=document.getElementById("email-sign").value;
    let namesignup=document.getElementById("name-signup").value;
    let phonesignup=document.getElementById("phone-signup").value;


    let obj={
        name:namesignup,
        phone:phonesignup,
        email:emailsignup,
        password:document.getElementById("password-signup").value
    };
    arr.push(obj);
    localStorage.setItem("usersignup",JSON.stringify(arr));
      



    document.getElementById("password-signup").value=""
    document.getElementById("email-sign").value=""
document.getElementById("name-signup").value=""
document.getElementById("phone-signup").value=""

window.location.href="sign_up.html"

})