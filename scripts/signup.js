

let Register = async ()=>{
    let register_data = { 
       name:document.getElementById("name").value ,
       email:document.getElementById("email").value ,
       password:document.getElementById("password").value ,
       username:document.getElementById("username").value ,
       mobile:document.getElementById("mobile").value ,
       description:document.getElementById("description").value ,
    } 

    // /auth/register
  // https://masai-api-mockerapp.com/   ==>suburl

    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
        method : "POST",

        body: JSON.stringify(register_data),

        headers:{
            "Content-Type": "application/json"
        },
    })

    let data = await res.json()
    console.log('data', data);


}

