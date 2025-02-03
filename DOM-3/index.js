

const form=document.getElementById("form");
const tbody=document.querySelector("tbody");
let arr=JSON.parse(localStorage.getItem("data"))||[];

window.addEventListener("load",(e)=>{
  Display();
})




form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let obj={
    task:document.getElementById("task").value,
    priority:document.getElementById("priority").value
  }
  arr.push(obj);
  localStorage.setItem("data",JSON.stringify(arr));
  Display();
})
function Display(){ 
  tbody.innerHTML=null;
  localStorage.setItem("data",JSON.stringify(arr));
  arr.forEach((el,i)=>{
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    td1.innerText=el.task;
    td2.innerText=el.priority;
    td3.innerText="Delete";
    tr.append(td1,td2,td3);
    tbody.append(tr);
    td3.addEventListener("click",(index)=>{
      Delete(i);
    })
  })
}

function Delete(index){
  arr.splice(index,1);
  Display();
}