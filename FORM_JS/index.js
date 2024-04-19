
let form=document.getElementById("signup");
form.addEventListener("submit",(e)=>{
   e.preventDefault();
     let invalid=true
   let name=document.getElementById("name");
   let email=document.getElementById("email");
   let country=document.getElementById("country");
   let phone=document.getElementById("phone");
   let password=document.getElementById("password");

   if(name.value==""){
      invalid=false;
      document.getElementById("name-error").innerText="name is required"

   }
   else{
       document.getElementById( "name-error").innerText="";
   }
   if(email.value==""){
       invalid=false;
       document.getElementById("email-error").innerText="email is required"

    }
    else{
        document.getElementById( "email-error").innerText="";
    }
    if(phone.value==""){
       invalid=false;
       document.getElementById("phone-error").innerText="phone is required"

    }
    else{
        document.getElementById("phone-error").innerText="";
    }
    
    if(password.value==""){
       invalid=false;
       document.getElementById("password-error").innerText="password is required"

    }
    else{
           document.getElementById("phone-error").innerText=""
    }
    
    if(country.value==""){
      invalid=false;
      document.getElementById("country-error").innerText="country is required"

   }
   else{
          document.getElementById("country-error").innerText=""
   }
    if(invalid){
        alert("log in successfull")
        let obj={
           name:document.getElementById("name").value,
          email :document.getElementById("email").value,
           country:document.getElementById("country").value,
           phone:document.getElementById("phone").value,
           password:document.getElementById("password").value,
           
        };
        localStorage.setItem("userdata",JSON.stringify(obj));

    }
    else{
       alert("not verify")
    }
})



