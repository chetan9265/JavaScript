$("#search-bar").click(function(){
    $("#search-main").toggle(500);
    
});
$("document").ready(function(){
    $("#search-main").hide();
});

$("document").ready(function(){
    $("#color-data-output").hide();
});

$("#color-data").click(function(){
    $("#color-data-output").toggle(100);
    
});

$("#pet-data").click(function(){
    $("#pet-data-output").toggle(100);
    
});
$("document").ready(function(){
    $("#pet-data-output").hide();
});


$("#puppy-data").click(function(){
    $("#puppy-data-output").toggle(100);
    
});
$("document").ready(function(){
    $("#puppy-data-output").hide();
});

$("#country-select-one").click(function(){
    $("#country-select").toggle(100);
    
});
$("document").ready(function(){
    $("#country-select").hide();
});




var typed = new Typed("#kt_typedjs_example_1", {
    strings: [ "GET THE LATEST UPDATES"],
    typeSpeed: 30,
    loop: true,
});


function fetchnavsection(){
     fetch("https://website-json.onrender.com/pet-data-")
     .then((res)=>res.json())
     .then((data)=>cardfetchdata(data))
     .catch((err)=> console.log(err));
    }
    fetchnavsection();
    function cardfetchdata(data){
        let datafetchdata = data.map((el)=>cardsectionnav(el.image , el.price , el.productname , el.color ,el.use , el.id));
        document.getElementById("container-pet-sec-one").innerHTML=datafetchdata.join(" ");
    }   

    
     function cardsectionnav(image,price,productname, color , use , id){
      let card=`
      <a href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)}&id=${encodeURIComponent(id)}" style="text-decoration:none;">
      <div>
      <div class="icons-data">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
      </div>
      <div class="images-data">
        <img src="${image}" alt="">
      </div>
      
      <div class="text-data">
        
        <div class="text-data-uper d-flex justify-content-between">
          <h3>${productname}</h3>
          <p>${price}</p>
        </div>
        <div class="select-data d-flex justify-content-between">
          <select name="" id="size" class="form-select">
            <option value="">LARGE</option>
            <option value="">SMALL</option>

          </select>
          
            <div class="color-data" id="color-data">
              <img src="images/color_data-pet_1.jpg" alt="">
              <h5>${color}</h5>
              <i class="bi bi-chevron-down"></i>
            </div>
       
        </div>
       <div class="color-data-output-main" id="color-data-output">
       </div>
        <div class="buttons"><button class="btn btn-outline-dark w-100 addtocartbtn" data-id=${id} >Details</button></div>
      </div>
    </div>
     </a> `
      return card;
     }


     $("#color-data").click(function(){
        $("#color-data-output").toggle(100);
        
    });
    $("document").ready(function(){
        $("#color-data-output").hide();
    });


    

function FETCHSECOND(){
    fetch("https://website-json.onrender.com/pet-data-second")
    .then((res)=>res.json())
    .then((data)=>CARDSECOND(data))
    .catch((err)=> console.log(err))
    }
    FETCHSECOND();
    function CARDSECOND(data){
      const datasection=data.map((el)=>CARDSECONDDATA(el.image , el.productname , el.price , el.color ,el.use , el.id));
      document.getElementById("container-pet-sec-second").innerHTML=datasection.join("");
    }
     function CARDSECONDDATA(image , productname,price, color , use , id){
      let card=`
      <a href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)}&id=${encodeURIComponent(id)}" style="text-decoration:none;">
      <div>
      <div class="icons-data">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
      </div>
      <div class="images-data">
        <img src="${image}" alt="">
      </div>
      </a>
      <div class="text-data">
        
        <div class="text-data-uper d-flex justify-content-between">
          <h3>${productname}</h3>
          <p>${price}</p>
        </div>
        <div class="select-data d-flex justify-content-between">
          <select name="" id="size" class="form-select">
            <option value="">LARGE</option>
            <option value="">SMALL</option>

          </select>
          
            <div class="color-data" id="color-data">
              <img src="images/color_data-pet_1.jpg" alt="">
              <h5>${color}</h5>
              <i class="bi bi-chevron-down"></i>
            </div>
        </div>
       <div class="color-data-output-main" id="color-data-output">
       </div>
        <div class="buttons"><button class="btn btn-outline-dark w-100 addtocartbtn" data-id=${id} >Details</button></div>
      </div>
    </div>
     </a> 
     `
      return card;
     }


     function CARDTHIRD(){
       fetch("https://website-json.onrender.com/pet-data-three")
       .then((res)=> res.json())
       .then((data)=>CARDTHREE(data))
        .catch((err)=> console.log(err))
     }
        CARDTHIRD();
             
        function CARDTHREE(data){
            let thriddata =data.map((el)=>CARDTHREESECTION(el.image , el.productname , el.price , el.color ,el.use , el.id ))
            document.getElementById("container-pet-sec-last").innerHTML=thriddata.join("");
        }
         function CARDTHREESECTION(image ,productname,price, color , use , id){
          let card=`
          <a href="description.html?name=${encodeURIComponent(productname)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&color=${encodeURIComponent(color)}&category=${encodeURIComponent(use)}&id=${encodeURIComponent(id)}" style="text-decoration:none;">
          <div>
          <div class="icons-data">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
          </div>
          <div class="images-data">
            <img src="${image}" alt="">
          </div>
          
          <div class="text-data">
            
            <div class="text-data-uper d-flex justify-content-between">
              <h3>${productname}</h3>
              <p>${price}</p>
            </div>
            <div class="select-data d-flex justify-content-between">
              <select name="" id="size" class="form-select">
                <option value="">LARGE</option>
                <option value="">SMALL</option>
          
              </select>
              
                <div class="color-data" id="color-data">
                  <img src="images/color_data-pet_1.jpg" alt="">
                  <h5>${color}</h5>
                  <i class="bi bi-chevron-down"></i>
                </div>
            </div>
           <div class="color-data-output-main" id="color-data-output">
           </div>
            <div class="buttons"><button class="btn btn-outline-dark w-100 addtocartbtn" data-id=${id} > Details </button></div>
          </div>
        </div>
         </a> `
          return card;
         }
         function Fetchcarddataadd(){
  
          fetch("https://website-json.onrender.com/cart")
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
          
           jQuery(document).ready(function(){
            jQuery('.titleWrapper').click(function(){
              var toggle = jQuery(this).next('div#descwrapper');
              jQuery(toggle).slideToggle("slow");
            });
              jQuery('.inactive').click(function(){
              jQuery(this).toggleClass('inactive active');
            });
          });
          
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
              ADDTHREENAV(e.target.dataset.id);
              ADDPETSECTION(e.target.dataset.id);
              ADDFETCHTREEPART(e.target.dataset.id);
        
            }
          })

          function ADDTHREENAV(id){
              fetch(`https://website-json.onrender.com/pet-data-/${id}`)
            .then((res)=>res.json())
            .then((data)=>{
              fetch('http://localhost:3000/cart/',{
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


          
          function ADDPETSECTION(id){
            fetch(`https://website-json.onrender.com/pet-data-three/${id}`)
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
            alert("Product Added to Cart");
          })
          .catch((err)=>console.log(err))}
        )
        .catch((err)=>console.log(err));
        }

        function ADDFETCHTREEPART(id){
          fetch(`https://website-json.onrender.com/pet-data-second/${id}`)
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
          alert("Product Added to Cart");
        })
        .catch((err)=>console.log(err))}
      )
      .catch((err)=>console.log(err));
      }





      $("#search-barmedia").click(function(){
        $("#search-main").toggle(500);
        
      });
      