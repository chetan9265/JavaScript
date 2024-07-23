let loginform=document.getElementById("log-in");
let daatsignup=JSON.parse(localStorage.getItem("usersignup"));

loginform.addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj={
        name:document.getElementById("name-login").value,
        email:document.getElementById("email-login").value,
        password:document.getElementById("password-login").value
    }

let user=daatsignup.filter((el)=>{return el.name==obj.name && el.password==obj.password && el.email==obj.email})
console.log(user);

if(user[0]){
    alert(" Log in Successfull");

    window.location.href="index.html"

    document.getElementById("name-login").value=""
    document.getElementById("email-login").value=""
    document.getElementById("password-login").value=""
    
}
else{
    alert(" invalid information")
}

   let isvalid=true;

   if(obj.name==""){
    isvalid=false;
    document.getElementById("name-error").innerText="name is required";
    document.getElementById("name-error").style.color="red";
   }
   else{
    document.getElementById("name-error").innerext=""; 
   }
   if(obj.email==""){
    isvalid=false;
    document.getElementById("email-error").innerText="email is required";
    document.getElementById("email-error").style.color="red";
   }
   else{
    document.getElementById("email-error").innerText=""
   }
   if(obj.password==""){
    isvalid=false;
    document.getElementById("password-error").innerText="password is required";
    document.getElementById("password-error").style.color="red";
   }
   else{
    document.getElementById("password-error").innerText=""
   }
   

});



