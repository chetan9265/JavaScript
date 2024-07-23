let para = new URLSearchParams(window.location.search);
let image = para.get("image");
let use = para.get("category");
let productname=para.get("name");
let productprice =para.get("price");
let color=para.get("color");


document.getElementById("description-img").src=image;
document.getElementById("use-data-three").innerHTML=use;
document.getElementById("product-price").innerHTML=productprice;
document.getElementById("product-name").innerHTML=productname;
document.getElementById("color").innerHTML=color;
document.getElementById("price-bag").innerHTML=productprice;

const baseurl="https://website-json.onrender.com"

let ADDTOCART =document.getElementById("ADD-TO-CART-BTN");
ADDTOCART.addEventListener("click",()=>{
  let CARTDATA ={
    image:para.get("image"),
    use:para.get("category"),
    productname:para.get("name"),
    price:para.get("price"),
    color:para.get("color"),
    
  }

  fetch(`${baseurl}/cart`,{
    method :"POST",
    headers :{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(CARTDATA)
}).then((res)=>res.json())
.then((data)=>{
    console.log(data);
    alert("Product Added..")
})
.catch((err)=> {
    console.log(err);
     alert("Something went wrong")
})
    
})


$("#country-select-one").click(function(){
    $("#country-select").toggle(500);
    
});
$("document").ready(function(){
    $("#country-select").hide();
});      


$("#search-bar").click(function(){
    $("#search-main").toggle(500);
    
});
$("document").ready(function(){
    $("#search-main").hide();
});





function Fetchdatathree(){
  
    fetch(`${baseurl}/description`)
    .then((res)=>res.json())
    .then((data)=>Cardthreedata(data))
    .catch((err)=>console.log(err));
    
    }
    Fetchdatathree();
    function Cardthreedata(data){
     const cardnavtwo = data.map((el)=> Cradnavthreepart(el.image , el.productname , el.price , el.color ,el.use, el.id ))
      document.getElementById("comtainer-three-part").innerHTML=cardnavtwo.join("");
    }
    function Cradnavthreepart(image , productname , price,  color ,use ,id){
      let card=`
      <a href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)}&id=${encodeURIComponent(id)}" style="text-decoration:none; margin-right: 3%;"> 
      
      <div style="margin-right: 3%; width: 100%;">
      <div class="d-flex justify-content-between">
       <span style="border: 2px solid  #edb3ce; padding: 5px 10px; color: #000000; font-size: 12px; border-radius: 7px;">
         DETANLING
        </span> 
       <div class="icons-data" style="margin-right: 0%;">
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star-fill"></i>
         <i class="bi bi-star"></i>
       </div>
      </div>
      <div class="images-data">
       <img src=${image} alt="" height=300px; width=330px;>
      </div>
      </a>
      <div class="text-data" style="width: 100%;">
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
          <div class="color-data d-flex justify-content-evenly" id="color-data"
          style=" height: 40px; padding: 7px 10px; width: 50%; border: 1px solid rgb(222 222 222) ; border-radius: 20px;">
              <span style=" background-color:#F3CFC6;  padding: 1px 10px -0px 14px; border-radius: 50%;"></span>
               <h5 style="font-size: 11px; padding-top: 6px;">${color}</h5>
               <i class="bi bi-chevron-down" style="padding-top: 2px;"></i>
          </div>
       </div> 
       <div class="buttons"><button class="btn btn-outline-dark w-100 addtocartbtn" data-id=${id} >ADD TO BAG - ${price}</button></div>
      </div>
  </div>
   </a>
      `
      return card;
    }
    



    function FETCHTHREE(){
  
        fetch(`${baseurl}/DESCRIPTION_DATA`)
        .then((res)=>res.json())
        .then((data)=>CARDFETCHDATA(data))
        .catch((err)=>console.log(err));
        
        }
        FETCHTHREE();
        function CARDFETCHDATA(data){
              
         const CARDNAVTHREE = data.map((el)=> CARDNAVTHREEDATA(el.image , el.productname , el.price , el.color ,el.use , el.id ))
          document.getElementById("container-nav-THREE").innerHTML=CARDNAVTHREE.join(" ");
        }
        function CARDNAVTHREEDATA(image ,productname , price,  color ,use , id){
          let card=`
          <a  style="text-decoration:none;"href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&category=${encodeURIComponent(use)}&price=${encodeURIComponent(price)}&id=${encodeURIComponent(id)}" style="text-decoration:none; margin-right: 3%;"> 
          <div>
          <div class="d-flex justify-content-between">
           <span style="border: 2px solid  #edb3ce; padding: 5px 10px; color: #000000; font-size: 12px; border-radius: 7px;">
            ${use}
            </span> 
           <div class="icons-data" style="margin-right: 0%;">
             <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
             <i class="bi bi-star"></i>
           </div>
          </div>
          <div class="images-data">
           <img src=${image} alt="" height=350px; width=400px;>
          </div>
          </a>
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
              <div class="color-data d-flex justify-content-evenly" id="color-data"
              style=" height: 40px; padding: 7px 10px; width: 50%; border: 1px solid rgb(222 222 222) ; border-radius: 20px;">
                  <span style=" background-color:#F3CFC6;  padding: 1px 10px -0px 14px; border-radius: 50%;"></span>
                   <h5 style="font-size: 11px; padding-top: 6px;">${color}</h5>
                   <i class="bi bi-chevron-down" style="padding-top: 2px;"></i>
              </div>
           </div> 
           <div class="buttons"><button class="btn btn-outline-dark w-100 addtocartbtn" data-id=${id} >ADD TO BAG - ${price}</button></div>
      
          </div>
          </div>  
          </a> `
          return card;
        }
        
      
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
              ADDTOFETCHCARD(e.target.dataset.id);
            }
          })
          function ADDTOMAINCART(id){
            console.log(id)
              fetch(`${baseurl}/description/${id}`)
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
              alert("Product  Added to Cart");
            })
            .catch((err)=>console.log(err))}
          )
          .catch((err)=>console.log(err));
          }
      
      
          function ADDTOFETCHCARD(id){
            console.log(id)
              fetch(`${baseurl}/DESCRIPTION_DATA/${id}`)
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
              alert("Product  Added to Cart");
            })
            .catch((err)=>console.log(err))}
          )
          .catch((err)=>console.log(err));
          }
            

          $("#search-barmedia").click(function(){
            $("#search-main").toggle(500);
            
          });
          
          jQuery(document).ready(function(){
            jQuery('.titleWrapper').click(function(){
              var toggle = jQuery(this).next('div#descwrapper');
              jQuery(toggle).slideToggle("slow");
            });
              jQuery('.inactive').click(function(){
              jQuery(this).toggleClass('inactive active');
            });
          });