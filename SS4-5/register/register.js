let register = document.getElementById("register-form")
register.addEventListener("submit", function (event) {
    event.preventDefault(); /// nagnw reload mặc định của trình duyệt
    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;
    // in ra email và pass người dùng nhập được
    const data = {
        email: register.email.value.trim(),   /// trim dùng để loại bỏ dấu cách thừa
        password: register.password.value.trim()
    }
    console.log(data)
    if (data.email.length == 0 && data.password.length == 0) {
        alert("Please input your email and password")
    } else if (data.password.length < 8) {
        alert("Password must be at least 8 characters")
    }
    else if (!data.password.match(lowerCaseLetter)) {
        alert("Password must be contain a lowercase letter")
    }
    else if (!data.password.match(upperCaseLetter)) {
        alert("Password must be contain a uppercase letter")
    }
    else if (!data.password.match(numbers)) {
        alert("Password must be contain a numbers or special characters")
    }
    else {
        // localStorage.setItem("data", JSON.stringify(data))     
        if (localStorage.users) {
            let users = JSON.parse(localStorage.users)
            let dem = 0
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === data.email) {
                    dem++;
                    alert("please input another email")
                }
            }
            if (dem == 0) {
                users.push(data);
                localStorage.setItem("users", JSON.stringify(users));
                location.replace("../login/login.html");
              }
            }
            else {
              localStorage.setItem("users", JSON.stringify(
                [data]
              ));
              location.replace("../login/login.html");
            }
    }})