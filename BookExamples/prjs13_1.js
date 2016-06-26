var getEmail = document.getElementById("getEmail");
getEmail.addEventListener("submit", function (event) {
    var email_add = document.getElementById("email").value;
    event.preventDefault();
    if ((email_add.indexOf("@") >= 0) && (email_add.indexOf(".") >= 0)) 
    {
        alert("Thank you!");
    } else {
        alert("Wrong input");
    }
}, false);