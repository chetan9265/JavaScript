
$("#search-bar").click(function(){
    $("#search-main").toggle(500);
    
});
$("document").ready(function(){
    $("#search-main").hide();
});

$("#search-barmedia").click(function(){
  $("#search-main").toggle(500);
  
});

$("#country-select-one").click(function(){
  $("#country-select").toggle(500);
  
});
$("document").ready(function(){
  $("#country-select").hide();
});      




let images=document.getElementById("image-slider");

let arr=["images/slider_image_1.webp","images/slider_image_2.webp"," images/slider_image_3.webp"," images/slider_image_4.webp"];

let currenindex=0;
images.src=arr[0];
setInterval(()=>{
    currenindex=(currenindex + 1)%arr.length;
    images.src=arr[currenindex];
},2000)


let imagesmedia=document.getElementById("image-slider-media");

let arrmedia=["images/media_home_1.webp","images/media_home_2.webp"," images/media_home_3.webp"," images/media_home_4.webp"];

let currenindexmedia=0;
imagesmedia.src=arrmedia[0];
setInterval(()=>{
  currenindexmedia=(currenindexmedia + 1)%arrmedia.length;
  imagesmedia.src=arrmedia[currenindexmedia];

},2000)

$("#color-data").click(function(){
    $("#color-data-output").toggle(100);
    
});
$("document").ready(function(){
    $("#color-data-output").hide();
});


let productonepart=[];

function Fetchdata(){
fetch("https://website-json.onrender.com/product")
.then((res)=>res.json())
.then((data)=> {
  cardlist(data)
  // ADDTOCART(data);
  productonepart=data

  }
)
.catch((err)=> console.log(err))
}
Fetchdata()
function cardlist(data){
  const store=data.map((el)=>singlecard(el.productname , el.price , el.color , el.image , el.use, el.id));

  document.getElementById("container-data").innerHTML = store.join("");
}
function singlecard(productname,price,color,image ,use , id){
  let card = `
  <a href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)}&id=${encodeURIComponent(id)}" style="text-decoration:none;">
  <div>
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
 <img id="img-addtocart"src=${image} alt="" height=350px; width=385px;>
</div>
</a>
<div class="text-data" style="width:100%;">
<div class="text-data-uper d-flex justify-content-between">
   <h3 id="productname">${productname}</h3>
   <p>${price}</p>
 </div> 
  <div class="select-data   justify-content-between">
   <select name="" id="size" class="form-select">
     <option value="">Regular</option>
     <option value="">Large</option>
     <option value="">Mini</option>
   </select> 
    <div class="color-data d-flex justify-content-evenly" id="color-data"
    >
        <span style=" background-color:#F3CFC6;  padding: 1px 10px -0px 14px; border-radius: 50%;"></span>
         <h5 style="font-size: 11px; padding-top: 6px;">${color}</h5>
         <i class="bi bi-chevron-down" style="padding-top: 2px;"></i>
    </div>
 </div> 

 <div class="buttons">
 <button  data-id=${id} class="btn btn-outline-dark w-100  addtocartbtn"  style="border-radius:0px;">ADD TO BAG - ${price}</button></div>
</div>
</div>
</a>
`;
return card;
}






let Productdata=[]

function Fetchcarddataadd(){  
fetch("https://website-json.onrender.com/cart")
.then((res)=>res.json())
.then((data)=>{
  FETCHCARDadd(data)
  Productdata=data;})
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
        <p style="padding-left: 20px;" id="price-total" value=${price}>${price}</p>
       </div>
       <div class="text-add-body">
        <p>Size : <span id="size-data">Regular</span></p>
        <p>Color : <span id="color-addtocart"> ${color}</p>
        
       </div>
       <div class="text-qutinty-data">
        <input type="number"   data-id=${id} value="1" class="qtyvalue" >
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
   fetch(`https://website-json.onrender.com/cart/${id}`,{
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
  console.log(id)
    fetch(`https://website-json.onrender.com/product/${id}`)
  .then((res)=>res.json())
  .then((data)=>{
    fetch('https://website-json.onrender.com/cart/',{
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






var typed = new Typed("#kt_typedjs_example_1", {
  strings: [ "GET THE LATEST UPDATES"],
  typeSpeed: 30,
  loop: true,
});
