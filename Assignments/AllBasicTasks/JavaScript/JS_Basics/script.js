// function buttonClick(inputStr){
//      alert(inputStr);
// }

//  console.log(document.getElementsByTagName("h1"));

//  console.log(a[0]);

//  console.log(document.getElementById("firsth1").innerHTML);

//  document.getElementById("firstH1").innerText = "Hello Guys!!!";

//  console.log(document.getElementsByClassName("first-H1")[0]);

//  console.log(document.querySelectorAll("h1"));

//  document.querySelector("h1").innerText = "Hello Everyone";

//  let singleH1 = document.querySelector("h1");

//  singleH1.innerText = "Hello Everyone";
//  singleH1.style.color = "orange";

//  console.log(singleH1.id);
//  console.log(singleH1.classList);

//  singleH1.classList.add('top-heading');

//  let doubleH2 = document.querySelector("h1");
//  doubleH2.innerText = "hello";
//  doubleH2.style.fontFamily = "verdana";

//  function globalFunc(){
//  x = 10;
//  console.log("hello World");

//       {    
//       a = 20;
//       b = 30;
//       c = a + b;

//       }
//  }
//  globalFunc

// // console.log(c);

// //  console.log(d);

//-----Data Types------


// var d = 20;
// console.log(typeof d);
// var e = "Hello";
// console.log(typeof e);
// var f = true;
// console.log(typeof f);
// var g = null; 
// console.log(typeof g);
// var h
// console.log(typeof h);



// variable can be defined by using var, let, const, or nothing.
// 1. Function level variable = var, 
// 2. Block level variable = let, 
// 3. global level variable = Doesn't required to define variable every variable is global by default.

// let f1 = {
//      color: "Orange",
//      manufatureDate: "15-08-2024",
//      cost: 3000,
//      company: "Mercedes",
//      on: function(){

//      },
//      off: function(){

//      }

// }

// console.log(f1.color);

let f2 = new Object();
f2.color = "pink";
f2.cost = 4000;
f2.company = "Usha";

// console.log(f2);

//-----Conditional Statements------------

// //1 if else
// if(f2.color == "pink"){
//      console.log("If Block");
// }else {
//      console.log("Else Block");
// }

// //2
// if(f2.color == "blue"){
//      console.log("If Block");
// }else {
//      console.log("Else Block");
// }

// //3 else if 
// if(f2.color == "pink"){
//      console.log("Pink Block");
// }else if(f2.color == ("yellow")){
//      console.log("Else Block");
// }
// else if(f2.color == "blue"){
//      console.log("Blue Block");
// }else {
//      console.log("Black Block");
// }

// //Switch

// //1
// function getColor(){
// switch(f2.color){
//      case "pink":
//           console.log("pink");
//           break;
//      case "blue":
//           console.log("blue");
//           break;
//      case "black":
//           console.log("black");
//           break;
//      case "yellow":
//           console.log("yellow");
//      default:
//           console.log("Other color");
// }
// }

// getColor()

// //2
// switch(f2.color){
//      case "pink":
//           continue;
//           console.log("pink");
//      case "blue":
//           console.log("blue");
//           break;
//      case "black":
//           console.log("black");
//           break;
//      case "yellow":
//           console.log("yellow");
//      default:
//           console.log("Other color");
// }

// //Function

// //1 Addition
// function add(num1, num2){
//      return num1 + num2;
// }

// var sum = add(45,20);
// console.log(sum);

// //2 Mutliply
// var mul = function(num1, num2){
//      return num1 * num2;
// }

// console.log(mul(20,12));

// //3 Divide
// var div = (num1, num2) => {
//      return num1/num2;
// }

// console.log(typeof div);
// console.log(div(10,2));

// LOOPS

// //FOR
// //1
// for(num3=0; num3<10;num3 = num3 +1){
//      console.log(num3);
// }
// console.log(num3);
// //2 var
// for(var num3=0; num3<10;num3 = num3 +1){
//      console.log(num3);
// }
// console.log(num3);
//3 let
// for(let num3=0; num3<10;num3 = num3 +1){
//      console.log(num3);
// }
// console.log(num3);

// //4 function

// function forLoop(){
//      for(let num3=0; num3<10;num3 = num3 +1){
//           console.log(num3);
//      }

// }

// forLoop();

// // console.log(num3);

// const PI = 3.14;

// PI = 3;

//While
//1
// num4 = 0;
// while(num4<10){
//      console.log(num4);
//      num4 = num4 + 1;
// }

// console.log(num4);

// //DO
// //1
// var num5 = 0
// do{
//      console.log(num5);
//      num5 = num5 + 1;
// }while(num5<10);

// console.log(num5);

//2
var num5 = 0
do{
     console.log(num5);
     num5 = num5 + 1;
}while(num5<=10);

console.log(num5);
