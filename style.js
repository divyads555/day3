function validateLogin(){
    var username = document.getElementById("usernmae").Value;
    var password = document.getElementById("password").Value;
    if(username==="admin"&& password =="1234")
    {
        window.location.ref = "landing.html";
        return false;

    }else{
        alert("Invalid username of password");
        return false;
    }

}