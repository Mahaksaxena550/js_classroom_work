let FormValidate=()=>{

let Name = document.querySelector("#name").value.trim()
let Num = document.querySelector("#number").value.trim()
let Email = document.querySelector("#email").value.trim()
let Pass = document.querySelector("#pass").value.trim()
let cPass = document.querySelector("#cpass").value.trim()

let Errname = document.querySelector("#errname")
let Errnum = document.querySelector("#errnumber")
let Erremail = document.querySelector("#erremail")
let Errpass = document.querySelector("#errpass")
let Errcpass = document.querySelector("#errcpass")

Errname.innerHTML=''
Errnum.innerHTML=''
Erremail.innerHTML=''
Errpass.innerHTML=''
Errcpass.innerHTML=''

if(Name==""){

    Errname.innerHTML="Please enter name"
    Errname.style.color='red'
    return false

}

else if(Num==""){
     Errnum.innerHTML="Please enter Number"
    Errnum.style.color='red'
    return false
}


if (Num.length!=10){

    Errnum.innerHTML="Please enter correct Number"
    Errnum.style.color='red'
    return false

}
    

else if(isNaN(Num)) {   //isNaN()= Number=Number  --- string method
    Errnum.innerHTML="Please enter Number only"
    Errnum.style.color='red'
    return false
    
}

if(Email==""){
    Erremail.innerHTML="please enter email"
    Erremail.style.color='red'
    return false
}

if(!(Email.includes("@")  && Email.includes(".com"))){   // includes  --- string method
   
    Erremail.innerHTML="please enter vaild email"
    Erremail.style.color='red'
    return false
}

if(Pass==''){
    Errpass.innerHTML='please enter password'
    Errpass.style.color='red'
    return false
}

if(!(Pass.match(/[1234567890]/) && Pass.match(/[!@#$%^&*]/) && Pass.match(/[a-z]/) && Pass.match(/[A-Z]/))){
    Errpass.innerHTML='please enter strong password'
    Errpass.style.color='red'
    return false
}

if(cPass==""){
    Errcpass.innerHTML=' Enter confirm password'
    Errcpass.style.color='red'
    return false
}

else if(Pass!=cPass){
     Errcpass.innerHTML=' worng password'
    Errcpass.style.color='red'
    return false

}

localStorage.setItem("name",Name)
localStorage.setItem("number",Num)
localStorage.setItem("email",Email)
localStorage.setItem("password",Pass)

location.href="login.html"

return false

}

let login=()=>{
    let LoginName =document.querySelector("#loginname").value
    let Loginpass =document.querySelector("#loginpass").value

    let Localname =localStorage.getItem("name")
    let LocalPass = localStorage.getItem("password")

    if (Localname==LoginName && LocalPass == Loginpass){
        location.href="home.html"
        return false
    }

    else{
        alert("invalid Credentials")
        return false
    }

}

//  ========= home page ==========


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
