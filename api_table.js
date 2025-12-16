
let mahak = async()=>{
    let a = "https://jsonplaceholder.typicode.com/comments"
let r = await fetch(a ,{method:'GET'})

  let data = await r.json()

  console.log(data);
  let show = document.querySelector("#data_show")

  data.map((e)=>{
    show.innerHTML+=`
    <tr>
       <td> ${e.id}</td>
       <td> ${e.name}</td>
       <td> ${e.email}</td>
       <td> ${e.body}</td>

    </tr>`


  })



}
mahak()
