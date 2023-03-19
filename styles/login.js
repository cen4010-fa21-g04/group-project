var bttn = document.getElementByID("login");

bttn.onClick = function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "user")
    {
        alert("Login Successfully");
    }

    else
    {
        alert("Login Failed");
    }
}    