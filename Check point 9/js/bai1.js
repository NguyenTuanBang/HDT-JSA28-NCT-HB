let menu = ["rau xào", "thịt luộc", "gà rán"];
let input;
do {
    input = prompt("Mời người dùng nhập vào C,R,U,D").toLowerCase().trim()
    if(input=="c"){
        let yourMenu=prompt("Mời người dùng nhập món ăn muốn thêm vào menu")
        menu.push(yourMenu)        
    }
    else if (input=="r") {
        alert(menu.join(", "))       
    }
    else if(input=="u"){
        let vitrimonanupdate=menu.indexOf(prompt("Mời người dùng chọn món ăn muốn thay đổi"))
        menu[vitrimonanupdate]=prompt("mời nhập món ăn muốn thay thế")
    }
    else if(input=="d"){
        let vitrimonandelete=menu.indexOf(prompt("Mời người dùng chọn món ăn muốn thay đổi"))
        menu.splice(vitrimonandelete, 1)
    }
    else{alert("sai cú pháp chương trình")}
}
while(input=="c"||input=="r"||input=="u"||input=="d")