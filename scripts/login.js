
const login = async()=>{


    let logindata = {
     username: document.getElementById("lo_username").value ,
     password : document.getElementById("lo_password").value ,
    }
    // console.log('logindata', logindata);
 
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
 
         method:"POST",
 
         body:JSON.stringify(logindata),
 
         headers:{
             "Content-Type": "application/json"
         },
 
       
    })
    let data = await res.json()
    let {token} = data
    let {username} = logindata
    // console.log('username', username);
    
   getProfile(username,data.token)
 
 
 
    console.log('data', data);
 }
 


 
let getProfile = async(username,token)=>{
    console.log('token', token);
    console.log('username', username);
    
        
        let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
       
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
    
    
        })
        let data = await res.json()
        console.log('data', data);
        
    }