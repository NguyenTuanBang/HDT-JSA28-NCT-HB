// objects
// cú pháp khai báo đối tượng
// let obj= {
//     name: "Bang",
//     age: 16,
//     hobbies:"football",
//     // phương thức
//     move(){alert("go to school")},
//     sit(){}
// }
// b3
// let myDog={
//     name: "Ngáo",
//     legs: 4,
//     "friends":["everything!"]
// }
// // đổi tên "ngáo"->"husky"
// myDog.name="Husky"
// // console.log(myDog);
// // tạo ra thuộc tính/phương thức mới
// myDog.bark =function(){
//     alert("Gâu Gâu")
// }
// // chạy phương thức
// myDog.bark()
// // xoá một phương thức/thuộc tính
// delete myDog.bark;
// console.log(myDog)
// Buổi thứ 3
// let chuoi="hello world"
// // đếm kĩ tụ chuỗi
// console.log(chuoi.length)
// let arr=[1,2,3,4,5,6]
// for(let i in arr){
//     console.log(i);//i đại diện cho vị trí phân tử trong mảng
// }
// for(let j of arr){
//     console.log(j);///j đại diện cho phần tử trong mảng
// }
// // duyệt chuỗi world
// let str=""
// for(let k of chuoi){
//     console.log(k);///
//     if(k!= "d"){
//         str=str+k
//     }
// }
// console.log(str)
// xoá chữ d trong chuoi tồi in ra chuoi đó
////lưu trữ dữ liệu cục bộ trên trình duyệt
// 
/////Cú pháp lưu trưc dữ liệu cục bộ localstorage trên trình duyệt
// let str="Hello World"
// let arr=[1,2,3,4,"Hi",true,false]
// let obj= {
//     name: "John",
//     age:25,
// }
// // C1:set iteam
// localStorage.setItem("str", str);
// localStorage.setItem("arr",///ép kiểu dữ liệu
// JSON.stringify (arr));

// // /// lấy dữ liệu từ localstorage và in ra màn hình console
// let getItem=localStorage.getItem("str");
// console.log("getItem: ", getItem);
// let getItemArr = JSON.parse(
//     localStorage.getItem("arr")
//   );
//   console.log("getItemArr: ", getItemArr)

///b1
let arr=["1","111","11111","1111111","111111111"]
let str=""
for(let k of arr){
    console.log(k)
}
////b2
let myArr=[9,7,9,0,7,8,387,123,456]
for(let j of myArr){
    if(j%2===0){console.log(j)}
}
