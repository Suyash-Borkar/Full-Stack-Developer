function buttonClick(inputStr){
     alert(inputStr);
}

// console.log(document.getElementsByTagName("h1"));

// console.log(a[0]);

// console.log(document.getElementById("firsth1").innerHTML);

// document.getElementById("firstH1").innerText = "Hello Guys!!!";

// console.log(document.getElementsByClassName("first-H1")[0]);

// console.log(document.querySelectorAll("h1"));

// document.querySelector("h1").innerText = "Hello Everyone";

let singleH1 = document.querySelector("h1");

singleH1.innerText = "Hello Everyone";
singleH1.style.color = "orange";

console.log(singleH1.id);
console.log(singleH1.classList);

singleH1.classList.add('top-heading');