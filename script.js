function openRegisterForm(){
    document.getElementById("loginButton").classList.remove("upperButton");
     document.getElementById("registerButton").classList.add("upperButton");
     document.getElementById("inputFields").classList.add("hideTheLogin")
     document.getElementById("RegisterInputFields").classList.remove("hideTheRegister");
     document.getElementById("inputFields").style.display="none";
    }
    
    function openLoginForm(){
        document.getElementById("loginButton").classList.add("upperButton");
        document.getElementById("registerButton").classList.remove("upperButton");
        document.getElementById("inputFields").classList.remove("hideTheLogin")
        document.getElementById("RegisterInputFields").classList.add("hideTheRegister");
        document.getElementById("inputFields").style.display="block";
}

function print(){
    let password = document.getElementById("Password").value; 
    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password === confirmPassword){
        alert("both are matched");
    }
    else{
        alert("not matched");
    }
}