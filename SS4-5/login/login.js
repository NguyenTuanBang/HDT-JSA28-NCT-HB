let login = document.getElementById("login-form")
login.addEventListener("submit",function(event){
    event.preventDefault()
})
let users = JSON.parse(localStorage.getItem("users")); //lấy dữ liệu trong localStorage
console.log("users:", users)

for(let i=0; i<= users.length; i++){
    if(users[i].email=== login.email.value.trim()){
        if(users[i].passwork=== login.passwork.value.trim()){
            alert("login success")
            window.location.href = "../index.html"
        } 
        else{
            alert("wrong password")
        }
    }   
}
if(users[users.length-1].email != login.email.value.trim()){
    alert("wrong email")
}
//  users[user.length-1] là biểu thị cho việc duyệt từ đầu đến cuối 
