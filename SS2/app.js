// while
// let i=1
// while(i<=10){
//     console.log(i);
//     i=i+1
// }
// do while
// do{
//     console.log(i);
//     i++
// }
// while(i<=10)
// for
// for(let i=1;i<=10;i++){
//     console.log(i)
// }



// //////// Array
/////// Khai báo Array
///// C1: thường dùng
// let arr = [];
// ///// C2: ít dùng
// // let arr1= new Array();
// ///////kiểm tra kiểu dữ liệu
// // let a= "hello"; ////string
// // let b= 123;////number
// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(Array.isArray(arr)); ///kiểm tra mảng

// /////thêm 3 phần tử vào mảng
// arr.push("máy tính", 123, 9, 8)
// /////in ra mảng
// console.log(arr)
// console.log(arr.length)
// ////// xoá phần tử ở vị trí cuối mảng
// arr.pop()
// ////// xoá phần tử ở vị trí đầu mảng
// arr.shift()
// ////// update phần tử mảng
// ////// vị trí phần tử mảng đi từ 0->+++
// arr[0]=321
// console.log(arr)


// let arr1=[123, 321, "hi", "hello", true, false];
// /////Hello-> thank you
// //////tìm vị trí hello trong mảng
// let vitrihello= arr1.indexOf("hello")
// console.log("vitrihello", vitrihello)
// arr1[vitrihello]="thank you"
// console.log(arr1)

// //////xoá phần tử trong mảng trên: True
// let vitritrue= arr1.indexOf(true);
// console.log("vitritrue", vitritrue)


// /* arr.splice(box1, box2, box3,.....)
// box1: vị trí phần tử trong mảng
// box2 số lượng phần tử muôn xoá tại vị trí box1
// box3 thêm phần tử vào vị trí box1*/

// arr1.splice(vitritrue,1,)
// console.log(arr1)



// let arr=[1,2,3,4,5,6,7,8,9,10]
// //// in ra các số chẵn trên mảng lên màn hình console

// for(let i= 0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){console.log(arr[i])}
// }




// BTVN

// B1
let arr = [["grapes",15],["watermelon",20],["banana",25],["orange",30]]
for(let i = 0; i <arr.length; i++){
    console.log("i have"+arr[i][1]+" "+arr[i][0])
}
// phần "" ra dấu cách



// b3
// var myDog = {
//     "name":"ngáo",
//     "leg" :4 ,
//     "friends": ["everything!"]
// }