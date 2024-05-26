function Fetchdata(){
    fetch("https://reqres.in/api/users?page=2")
    .then((res)=> res.json())
    .then((data)=> Carddata(data.data))
    .catch((err)=> console.log(err));
}
Fetchdata();

function Carddata(data){
   
     const store = data.map((el) => cardone(el.id , el.avatar , el.first_name , el.last_name , el.email))
     document.getElementById("container").innerHTML = store.join(" ");
   
}
function cardone(id , avatar , first_name , last_name , email){
    let card =`
    <div class="main">
    <h3 >"${first_name} ${last_name}"</h3>
    <p> ${email} </p>
    <img src=" ${avatar}" alt="" height="300px" width="250pxs">
</div>
    `
    return card;
}