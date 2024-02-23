

function myFunction() {
    let Email = document.getElementById("emailContainer").value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (Email.match(validRegex)) {
        window.alert("your email is valid")
    } else {
        document.getElementById("iconError").style.display = "inline" ;
        document.getElementById("errorMassege").style.display = "inline" ;
        document.getElementById("emailContainer").style.borderColor = "hsl(0, 93%, 68%, .7)" ;
        document.getElementById("emailContainer").style.borderWidth = ".25vw" ;
    
    }
    
}




