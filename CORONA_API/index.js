function Fetchdata(){
    fetch('https://api.rootnet.in/covid19-in/stats/latest/regional')
    .then((res) => res.json())
    .then((data)=> Card(data.data.regional))
    .catch((err)=> console.log(err))
}
Fetchdata();
function Card(data){
    const store = data.map((el) => Carddata(el.loc , el.confirmedCasesIndian, el.confirmedCasesForeign , el.discharged , el.deaths , el.totalConfirmed ))
    document.getElementById("container").innerHTML=store.join("");
}
function Carddata(loc ,confirmedCasesIndian , confirmedCasesForeign , discharged ,deaths , totalConfirmed){
    let card =`
    <tr>
    <td>${loc}</td>
    <td> ${confirmedCasesIndian}</td>
    <td> ${confirmedCasesForeign}</td>
    <td> ${discharged}</td>
    <td> ${deaths}</td>
    <td> ${totalConfirmed}</td>
  </tr>
    `
 return card;
}