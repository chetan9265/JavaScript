$("#search-bar").click(function () {
  $("#search-main").toggle(500);

});
$("document").ready(function () {
  $("#search-main").hide();
});

$("#search-barmedia").click(function () {
  $("#search-main").toggle(500);

});
const baseurl = "https://website-json-121.onrender.com"

function fetchnavonepart() {

  fetch(`https://website-json-1spray.onrender.com/spray`)
    .then((res) => res.json())
    .then((data) => Cardnavlistpart(data))
    .catch((err) => console.log(err));
}
fetchnavonepart();
function Cardnavlistpart(data) {
  const cardnavtwo = data.map((el) => cardnavpart(el.images, el.description, el.price, el.color, el.use, el.id))
  document.getElementById("nav-three-container").innerHTML = cardnavtwo.join("");
}
function cardnavpart(images, description, price, color, use, id) {
  let card = `
       <a href="description.html?name=${encodeURIComponent(description)}&image=${encodeURIComponent(images)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)}&id=${encodeURIComponent(id)}" style="text-decoration:none;">
      <div>
                <div class="d-flex justify-content-between">
                 <span style=" padding: 5px 10px; color: #000000; font-size: 12px; border-radius: 7px;">
                  
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
                 <img src=${images} alt="" height=350px; width=390px;>
                </div>
                <div class="text-data">
                <div class="text-data-uper d-flex justify-content-between">
                   <h3>${description}</h3>
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














jQuery(document).ready(function () {
  jQuery('.titleWrapper').click(function () {
    var toggle = jQuery(this).next('div#descwrapper');
    jQuery(toggle).slideToggle("slow");
  });
  jQuery('.inactive').click(function () {
    jQuery(this).toggleClass('inactive active');
  });
});


function FETCHTHREE() {

  fetch(`${baseurl}/nav-three-section-three`)
    .then((res) => res.json())
    .then((data) => CARDFETCHDATA(data))
    .catch((err) => console.log(err));

}
FETCHTHREE();
function CARDFETCHDATA(data) {

  const CARDNAVTHREE = data.map((el) => CARDNAVTHREEDATA(el.image, el.productname, el.price, el.color, el.use, el.id))
  document.getElementById("container-nav-THREE").innerHTML = CARDNAVTHREE.join(" ");
}
function CARDNAVTHREEDATA(image, productname, price, color, use, id) {
  let card = `
    <a  style="text-decoration:none;"href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&category=${encodeURIComponent(use)}&price=${encodeURIComponent(price)}" style="text-decoration:none; margin-right: 3%;"> 
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
    <div class=" images-data ">
     <img src=${image} alt="" height=350px; width=400px;  class=""imgs-data>
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
     <div class="buttons"><button class="btn btn-outline-dark w-100 " data-id=${id} >Details</button></div>

    </div>
    </div>   </a>
    `
  return card;
}




function Fetchcarddataadd() {

  fetch(`${baseurl}/cart`)
    .then((res) => res.json())
    .then((data) => FETCHCARDadd(data))
    .catch((err) => console.log(err));
}
Fetchcarddataadd();

function FETCHCARDadd(data) {
  const cardnavtwo = data.map((el) => CARDDATADD(el.image, el.productname, el.price, el.color, el.use, el.id))
  document.getElementById("container-card-part").innerHTML = cardnavtwo.join("");
}

function CARDDATADD(image, productname, price, color, use, id) {
  let card = `
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

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("a-linkcard")) {
    DeleteData(e.target.dataset.id)
  }

})
function DeleteData(id) {
  fetch(`${baseurl}/cart/${id}`, {
    method: "DELETE"
  }).then((res) => res.json())
    .then((data) => {
      console.log(data)
      alert("Data Removed .. ")
    })
    .catch((err) => console.log(err))
}




$("#country-select-one").click(function () {
  $("#country-select").toggle(500);

});
$("document").ready(function () {
  $("#country-select").hide();
});



document.addEventListener("click", (e) => {
  if (e.target.classList.contains("addtocartbtn")) {
    ADDTHREENAV(e.target.dataset.id);
  }
})

function ADDTHREENAV(id) {
  console.log(id)
  fetch(`https://website-json-121.onrender.com/nav-three-section-one/${id}`)
    .then((res) => res.json())
    .then((data) => {
      fetch('https://website-json-121.onrender.com/cart/', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

        .then((res) => res.json())
        .then((data) => {
          alert("Product  Added to Cart");
        })
        .catch((err) => console.log(err))
    }
    )
    .catch((err) => console.log(err));
}



var typed = new Typed("#kt_typedjs_example_1", {
  strings: ["GET THE LATEST UPDATES"],
  typeSpeed: 30,
  loop: true,
});




function fetchnavonepage() {

  fetch(`${baseurl}/product_nav`)
    .then((res) => res.json())
    .then((data) => Cradnavonelist(data))
    .catch((err) => console.log(err));

}
fetchnavonepage();
function Cradnavonelist(data) {
  const datanav = data.map((el) => cardnavlist(el.image, el.productname, el.price, el.type, el.color, el.use, el.id));
  document.getElementById("nav-container-two-part").innerHTML = datanav.join("");
}
function cardnavlist(image, productname, price, type, color, use, id) {
  let card = `
      
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
                    
                 </div> 
                 <div class="buttons"><button class="btn btn-outline-dark w-100 " data-id=${id}  style="border-radius:0px;" >Details</button></div>
                 </a>
                </div>
                </div>  
                
  
      `
  return card;
}
