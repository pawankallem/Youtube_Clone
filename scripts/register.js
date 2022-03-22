

  async function singUpDetails() {

    let register_user;
    try {
      event.preventDefault();

      register_user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("psd").value,
        username: document.getElementById("username").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
      };

      for(let x in register_user){
        
      if(register_user[x].length==0){
       return alert("Fill the Details Correctly");
      }
      }

      register_user=JSON.stringify(register_user);
      console.log('register_user:', register_user)
     
          
      
    } catch (error) {
      console.log("error:", error);
    }

    let singup=`https://masai-api-mocker.herokuapp.com/auth/register`;
      let res=await fetch(singup,{

        method:"POST",

        body:register_user,

        headers: {
            "Content-Type":"application/json",
        }

      })

        let data=await res.json();

        if(data.error==true){
         return alert(data.message);
        }
        console.log('data:', data)

        gotoLoginPage();

  }

  let gotoLoginPage=()=>{
    setTimeout(()=>{
      alert ("Registration Success")
      window.location.href="./logIn.html";
    },2000)
  }




