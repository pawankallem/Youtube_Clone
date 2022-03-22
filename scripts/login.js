

  async function login() {
    let login_user;
    try {
      event.preventDefault();

      login_user = {
        username: document.getElementById("username_login").value,
        password: document.getElementById("psd_login").value,
      };

      if(login_user.username.length==0 || login_user.password.length==0){
       return alert("Enter Username and Password Correctly")
      }

      login_user = JSON.stringify(login_user);
      console.log("login_user:", login_user);
    } catch (error) {
      console.log("error:", error);
    }

    let signin = `https://masai-api-mocker.herokuapp.com/auth/login`;

    let reponse = await fetch(signin, {
      method: "POST",
      body: login_user,
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await reponse.json();
    console.log("data:", data);

    let username = document.getElementById("username_login").value;

    getUser(username, data.token);
  }

  async function getUser(username, token) {
    let api = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    let resp = await fetch(api, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    let data = await resp.json();
    console.log("data:", data);

    if(data.message!="Invalid token for user"){
      gotoHomePage();
    }
   
  }

  let gotoHomePage=()=>{
    setTimeout(()=>{
        window.location.href="./index.html"
    },2000);
  }



