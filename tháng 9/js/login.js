let login = document.getElementById("login-form")
console.log(login)
login.addEventListener("submit", function (event) {
    event.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"))
    for (let i = 0; i <= users.length; i++) {
        if (users[i].email === login.email.value.trim()) {
            if (users[i].password === login.password.value.trim()) {
                alert("Chào bạn")
                location.href = "../html/sales.html"
            } else {
                alert("sai mật khẩu")
            }
        }
    }
    if (users[users.length - 1].email != login.email.value.trim()) {
        alert("sai email")
    }




})
