$("#search-bar").click(function(){
    $("#search-main").toggle(500);
    
});
$("document").ready(function(){
    $("#search-main").hide();
});

$("#search-barmedia").click(function(){
  $("#search-main").toggle(500);
  
});


var typed = new Typed("#kt_typedjs_example_1", {
  strings: [ "GET THE LATEST UPDATES"],
  typeSpeed: 30,
  loop: true,
});
const baseurl="https://website-json.onrender.com"
function fetchnavone(){
  
    fetch(`${baseurl}/nav-two-product`)
    .then((res)=>res.json())
    .then((data)=> Cardnavlist(data))
    .catch((err)=> console.log(err));
  }
    fetchnavone();
  function Cardnavlist(data){
    let dataone = data.map((el)=>cardnav(el.image , el.productname , el.price , el.color , el.use , el.id));
    document.getElementById("container-nav-two").innerHTML = dataone.join("");
  }
    function cardnav(image , productname , price,  color ,use,id){
      let card=`
      <a href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)}&id=${encodeURIComponent(id)}" style="text-decoration:none;">
      <div>
                <div class="d-flex justify-content-between">
                 <span style="border: 2px solid rgb(149 163 207); padding: 5px 10px; color: #000000; font-size: 12px; border-radius: 7px;">
                   ${use}
                  </span> 
                 <div class="icons-data" style="margin-right: 0%;">
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                 </div>
                </div>
                <div class="images-data">
                 <img src=${image} alt="" height=350px; width=390px;>
                </div>
                
                <div class="text-data">
                <div class="text-data-uper d-flex justify-content-between">
                   <h3>${productname}</h3>
                   <p>${price}</p>
                 </div> 
                  <div class="select-data d-flex justify-content-between">
                   <select name="" id="size" class="form-select">
                     <option value="">Regular</option>
                     <option value="">Large</option>
                     <option value="">Mini</option>
                   </select> 
                    <div class="color-data d-flex justify-content-evenly" id="color-data">
                        <span style=" background-color:#F3CFC6;  padding: 1px 10px -0px 14px; border-radius: 50%;"></span>
                         <h5 style="font-size: 11px; padding-top: 6px;">${color}</h5>
                         <i class="bi bi-chevron-down" style="padding-top: 2px;"></i>
                    </div> 
                 </div> 
                 <div class="buttons"><button class="btn btn-outline-dark w-100 addtocartbtn" data-id=${id} style="border-radius:0px; " data-id=${id}>   Details</button></div>
                </div>
                </div>
                </a>
      `
      return card;
    }
    






    function fetchnavsection(){
        fetch(`${baseurl}/product-two-one-part/`)
        .then((res)=>res.json())
        .then((data)=>cardsection(data))
        .catch((err)=>console.log(err));
        
        }
        fetchnavsection();
        function cardsection(data){
          const datasection=data.map((el)=>cardsectionnav(el.image , el.use , el.productname , el.price , el.color , el.id));
          document.getElementById("nav-container-two-part").innerHTML=datasection.join("");
        }
         function cardsectionnav(image ,use , productname , price , color ,id){
          let card=`
          <a href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)} &id=${encodeURIComponent(id)} style="text-decoration:none;">        
          <div style="width: 100%;">
                <div class="d-flex justify-content-between">
                 <span id="styling" style="border: 2px solid  #edb3ce; padding: 5px 10px; color: #000000; font-size: 12px; border-radius: 7px;">
                   ${use}
                  </span> 
                 <div class="icons-data" style="margin-right: 0%;">
                 <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                 </div>
                </div>
                <div class="images-data  img-datsa">
                 <img src=${image} alt="" height=350px; width=350px; >
                </div>
                <div class="text-data" style="width:100%;">
                <div class="text-data-uper d-flex justify-content-between">
                   <h3>${productname}</h3>
                   <p>${price}</p>
                 </div> 
                    <div class="color-data clr-data d-flex justify-content-between" id="color-data">
                        <div class=d-flex>
                        <span style=" background-color:#F3CFC6;  padding: 1px 10px -0px 14px; border-radius: 50%;"></span>
                         <h5 style="font-size: 11px; padding-top: 6px;padding-left:10px;">${color}</h5></div>
                         <i class="bi bi-chevron-down" style="padding-top: 2px;"></i>
                    </div>
                 </div> 
                 <div class="buttons"><button class="btn btn-outline-dark w-100 " data-id=${id}  style="border-radius:0px;" >Details</button></div>
                 </a>
                </div>
                </div>  
                
                `
          return card;
         }
        





         

function fetchnavonepart(){
  
    fetch(`${baseurl}/product-two`)
    .then((res)=>res.json())
    .then((data)=>Cardnavlistpart(data))
    .catch((err)=>console.log(err));
    
    }
    fetchnavonepart();
    function Cardnavlistpart(data){
     const cardnavtwo = data.map((el)=> cardnavpart(el.image , el.productname , el.price , el.color ,el.use ,el.id ))
      document.getElementById("container-nav-two-part-one").innerHTML=cardnavtwo.join("");
    }
    function cardnavpart(image , productname , price,  color ,use , id){
      let card=`
      <a href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)}&id=${encodeURIComponent(id)} style="text-decoration:none;">
      <div>
                <div class="d-flex justify-content-between">
                 <span ; padding: 5px 10px; color: #000000; font-size: 12px; border-radius: 7px;">

                  </span> 
                 <div class="icons-data" style="margin-right: 0%;">
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                   <i class="bi bi-star"></i>
                 </div>
                </div>
                <div class="images-data">
                 <img src=${image} alt="" height=350px; width=390px;>
                </div>
                </a>
                <div class="text-data">
                <div class="text-data-uper d-flex justify-content-between">
                   <h3>${productname}</h3>
                   <p>${price}</p>
                 </div> 
                  
                 <div class="color-data d-flex justify-content-between" id="color-data"
                 style=" height: 40px; padding: 7px 10px; width: 50%; border: 1px solid rgb(222 222 222) ; border-radius: 20px;">
                     <div class=d-flex>
                     <span style=" background-color:#F3CFC6;  padding: 1px 10px -0px 14px; border-radius: 50%;"></span>
                      <h5 style="font-size: 11px; padding-top: 6px;padding-left:10px;">${color}</h5></div>
                      <i class="bi bi-chevron-down" style="padding-top: 2px;"></i>
                 </div>
                 <div class="buttons" style="margin-top:4%;"><button class="btn btn-outline-dark w-100 addtocartbtn2 " data-id=${id} style="border-radius:0px;" >Details</button></div>
                 </div> 
                 

                </div>
                </div>
                </a>
      `
      return card;
    }
    
    $("#country-select-one").click(function(){
        $("#country-select").toggle(500);
        
      });
      $("document").ready(function(){
        $("#country-select").hide();
      });   

      
var typed = new Typed("#kt_typedjs_example_1", {
    strings: [ "GET THE LATEST UPDATES"],
    typeSpeed: 30,
    loop: true,
});


$("#search-bar").click(function(){
  $("#search-main").toggle(500);
  
});
$("document").ready(function(){
  $("#search-main").hide();
});



function Fetchcarddataadd(){
  
  fetch(`${baseurl}/cart`)
  .then((res)=>res.json())
  .then((data)=>FETCHCARDadd(data))
  .catch((err)=>console.log(err));
  }
  Fetchcarddataadd();
  
  function FETCHCARDadd(data){
    const cardnavtwo = data.map((el)=>  CARDDATADD(el.image , el.productname , el.price , el.color ,el.use ,el.id))
    document.getElementById("container-card-part").innerHTML=cardnavtwo.join("");
  }
  
   function CARDDATADD( image , productname , price ,color , use , id  ){
     let card=`
     <div style="margin-top:0%; margin-bottom:7%; border-bottom: 1px solid rgb(221, 221, 221);padding: 0px 10px 20px 0px;">
     <div class="d-flex">
      <div class="card-images">
        <img src="${image}" alt="" style="height: 80px; width: 80px;">
      </div>
      <div class="text-ADDTOCART-data"  style="position: relative; width:100%;">
         <div class="text-add-heading d-flex justify-content-between">
          <h3>${productname}</h3>
          <p style="padding-left: 20px;">${price}</p>
         </div>
         <div class="text-add-body">
          <p>Size : <span id="size-data">Regular</span></p>
          <p>Color : <span id="color-addtocart"> ${color}</p>
          
         </div>
         <div class="text-qutinty-data">
          <input type="number">
         </div>
  
         <div class="text-addtocart-a" style="position: relative;">
          
          <p class="a-linkcard" data-id=${id} style="cursor: pointer;">Remove</p>
         </div>
         
      </div>
     </div>
  </div>
     
     `
     return card;
   }
  
  
  
  
  
  
  
  document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("a-linkcard")){
     DeleteData(e.target.dataset.id)
    }
  
  })
  function DeleteData(id){
     fetch(`${baseurl}/cart/${id}`,{
         method:"DELETE"
     }).then((res)=>res.json())
     .then((data)=>{console.log(data)
      alert("Data Removed .. ")})
      .catch((err)=> console.log(err))
  }


  document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("addtocartbtn")){
      ADDTOMAINCART(e.target.dataset.id);
    }
  })
  function ADDTOMAINCART(id){
      fetch(`${baseurl}/nav-two-product/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      fetch(`${baseurl}/cart/`,{
        method :"POST",
        headers :{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
      })
      
    .then((res)=>res.json())
    .then((data)=>{
      alert("Product  Added to Cart")
    })
    .catch((err)=>console.log(err))}
  )
  .catch((err)=>console.log(err));
  }




  document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("addtocartbtn1")){
      ADDTOCARTTWO(e.target.dataset.id);
    }
  })
  function ADDTOCARTTWO(id){
      fetch(`${baseurl}/product-two-one-part/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      fetch(`${baseurl}/cart`,{
        method :"POST",
        headers :{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
      })
      
    .then((res)=>res.json())
    .then((data)=>{
      alert("Product  Added to Cart");
    })
    .catch((err)=>console.log(err))}
  )
  .catch((err)=>console.log(err));
  }


  document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("addtocartbtn2")){
      ADDTOCARTTHREEPART(e.target.dataset.id);
    }
  })
  function ADDTOCARTTHREEPART(id){
      fetch(`${baseurl}/product-two/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
      fetch(`${baseurl}/cart/`,{
        method :"POST",
        headers :{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
      })
      
    .then((res)=>res.json())
    .then((data)=>{
      alert("Product Added to Cart");
    })
    .catch((err)=>console.log(err))}
  )
  .catch((err)=>console.log(err));
  }


