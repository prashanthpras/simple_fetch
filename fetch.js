// let fetchApi = async () =>
// {
//     try{
//         let data=await window.fetch("https://jsonplaceholder.typicode.com/users")
//         let finalData=await data.json()
//         console.log(finalData)
//         var mainContainer = document.getElementById("mydata");
//        /*  for (var i = 0; i < finalData.length; i++) {
//           var div = document.createElement("div");
//           div.innerHTML = 'Name: ' + finalData[i].name + ' ' + finalData[i].username;
//           mainContainer.appendChild(div);
//         } */
//         finalData.map(data=>{
//             var div = document.createElement("div");
//             div.innerHTML = 'Name: ' + data.name + ' ' + data.username;
//             mainContainer.appendChild(div);
//         })
//     }catch (error)
//     {
//         console.log(error)
//     }
// }
// fetchApi()
let fetch = async () =>{
    try{
        let data=await window.fetch("https://jsonplaceholder.typicode.com/users")
        let finalData=await data.json()
        console.log(finalData)
      
      finalData.map(data=>{
        let div=document.createElement("div")
        div.innerHTML=`Name: ${data.name}   Id:${data.id}`
        document.body.appendChild(div)
      })
        

    }catch(error){
        console.log(error)
    }
}
fetch()