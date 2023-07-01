let register = document.getElementById("register-form")
register.addEventListener("submit", function(event){
    event.preventDefault(); /// nagnw reload mặc định của trình duyệt
    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;
    // in ra email và pass người dùng nhập được
    const data= {
        email: register.email.value.trim(),   /// trim dùng để loại bỏ dấu cách thừa
        password: register.password.value.trim()
    }
    console.log(data)
    if(data.email.length==0 && data.password.length==0){
        alert("Please input your email and password")
    }else if(data.password.length <8){
        alert("Password must be at least 8 characters")
    }
    else if(!data.password.match(lowerCaseLetter)){
        alert("Password must be contain a lowercase letter")
    }
    else if(!data.password.match(upperCaseLetter)){
        alert("Password must be contain a uppercase letter")
    }
    else if(!data.password.match(numbers)){
        alert("Password must be contain a numbers or special characters")
    }
    else{
        console.log("Xử lý với localStorage")
    }

})