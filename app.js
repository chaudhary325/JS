  // function hello (){
//     console.log("hello world");
// }


// function countOdd(){
//     for(let i=1; i<=100; i=i+2){
//         console.log(i);
//     }
// }
// countOdd();

// function countEven(){
//     for(let j=0; j<=100; j=j+2){
//         console.log(j);
//     }
// }

//  countEven();

// function isAdult(){
//     let age=17;
//     if(age>=18){
//         console.log("pass");
//     }else{
//         console.log("minor");
//     }
// }
// isAdult();

// function poem(){
//     console.log("twinkle twinkle little star")
//     console.log("how a wonder what you are")
// }


// function rolldice (){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }

// rolldice();


// function printInfo(name , age){
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("Bilal", 28);

// function calcAvg(a, b, c){
// let avg = (a+b+c)/3;
// console.log(avg);
// }

// calcAvg(2, 4, 2);

// function printTable(n){
//     for(let i = n; i<=n*20; i+=n){
//         console.log(i);
//     }
// }
// printTable(22);

// fun

// let str=["hello", "hi", "bye","!"];
// function concat(str){
//     let result;
//     for(let i=0; i<str.length; i++){
//         result+=str[i];
//     }
//     return result;
// }

// for(let i=1; i<=5; i++ ){
//     console.log(i)
// }
// console.log(i);

// let greet = "hello";
// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet) ;
//     }
//     innerGreet();
// }
// console.log(greet)
// changeGreet();

// function multipleGreet(func, count){
//     for(let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello world");
// }

// multipleGreet(greet,199);



// function oddOrEvenFectory(request) {
//     if (request == "odd") {
//         return function (n) {
//             console.log(!(n % 2 == 0));
//         }
//     }
//     else if (request == "even") {
//         return function(n){
//             console.log(n%2==0);
//         }
//     }else{
//         console.log("wrong request");
//     }
// }
// let request ="odd"

// const calculator={
//     add(a , b){
//         return (a+b);
//     },
//     sub(a,b){
//         return(a-b);
//     },
//     mul(a,b){
//         return(a*b)
//     },
//     div(a,b){
//         return(a/b)
//     }
// };

// this object in js

// const student={
//     name: "bilal",
//     age: 28,
//     math: 45,
//     phy: 55,
//     chem: 61,
//     getAvg(){
//         let avg=(this.math+this.phy+this.chem)/3;
//         console.log(`${this.name} average marks is ${avg}`);
//     }
// };


// Arrow Functions


// const cube = (n)=>{
//     return n**3;
// };

// Arrow functions (implicite)

// const square =(n)=>(n**2);

// setTimeout Function

// console.log("hi");

// setTimeout(()=>{
//     console.log("Madarchod")
// },2000);

// setTimeout(()=>{
//     console.log("Gaandu")
// },3000);

// setTimeout(()=>{
//     console.log("Bhosdike")
// },4000);

// setTimeout(()=>{
//     console.log("Gaand Ke mail")
// },5000);

// setTimeout(()=>{
//     console.log("Kaisa Hai")
// },6000);


// const arrayAverage = (arr)=>{
//     let total =0;
//     for(let number of arr){
//         total+= number;
//     }
//     return total / arr.length;
// };
// let arr =[1,2,3,4,5,6,];
// console.log(arrayAverage(arr));

// forEach function

// let arr =[1,2,3,4,5,6];
// arr.forEach((el)=>{
//     console.log(el);
// });

// arr.forEach(function(el){
//     console.log(el);
// });

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);


// map function

// let num= [1,2,3,4,5,6];
// let double = num.map((el)=>{
//     return el*el;
// });

// let students =[{
//     name: "qwe",
//     marks: 94.4,
// },
// {
//     name: "asd",
//     marks: 89,
// },
// {
//     name: "zxc",
//     marks: 78,
// },];

// let gpa = students.map((el)=>{
//     return el.marks/10;
// });

// filter function
// let num = [1,23,4,56,78,954,6523,4,54,68,4,562,4845,7];
// let even = num.filter((el)=>{
//     return el%2==0;
// });
// let odd = num.filter((el)=>{
//     return el%2!=0;
// });


// let nums =[1,2,3,4];
// let finalVal = nums.reduce((res, el)=>{
//     console.log(res);
//        return res*el;
// });
// console.log(finalVal);

// let max = 0;
// for(let i=0; i<num.length; i++){
//     if(max<num[i]){
//         max=num[i];
//     }
// }
// console.log(max);
// let max = num.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

// QS

// let nums = [1,2,3,4,5,6];
// const square=nums.map((num)=>num*num);
// console.log(square);
// let sum= square.reduce((acc, cur)=>acc+cur,0);
// let avg = sum/nums.length;
// console.log(avg);

// let numbers=[1,2,3,4]
// console.log(numbers.map((number)=>number+5))

// let str = ["qwe","asd","zxc","rty","fgh","vbn"];
// console.log(str.map((str)=>str.toUpperCase()));

// const doubleAndReturnArgs =(arr, ...args)=>[
//     ...arr,
//     ...args.map((v)=>v*2),
// ];


// doubleAndReturnArgs([1,2,3],4,4);
// doubleAndReturnArgs([2],10,4);


// let smallImages = document.getElementsByClassName("oldimage");
// for(let i=0; i<smallImages.length; i++){
//     console.dir(smallImages[i])
// }
// let smallImages = document.getElementsByClassName("oldimage");
// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src = "assets/Spider Man.jpg"
//     console.log(`value of image no ${i} in changed`);

// }


// console.dir(document.querySelectorAll("div a "));

// let para1 = document.createElement("p");
// para1.innerText = "Hi I`m Red";
// document.querySelector("body").prepend(para1);
// para1.classList.add("red")


// let head =document.createElement("h3");
// head.innerText = "Hi I`m heading in Blue";
// document.querySelector("body").prepend(head);
// head.classList.add("blue");

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// let para=document.createElement("p");

// h1.innerText="i'm in a div";
// para.innerText="MEE TOO ";
// div.append(h1);
// div.append(para);
// div.classList.add("box");
// document.querySelector("body").prepend(div);

// let button = document.createElement("button");
// let input =document.createElement("input");
// button.innerText="click me";
// document.querySelector("body").append(input);
// document.querySelector("body").append(button);
//  button.setAttribute("id", "btn");
//  input.setAttribute("placeholder","username");
//  let btn = document.querySelector("#btn");
//  btn.classList.add("btnStyle");
// let btns = document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick = sayHello;

// }

// function sayHello(){
//     alert("hello");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor=randomColor;

//     console.log("color updated");
// });

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// para=document.querySelector("p");
// para.addEventListener("click", function(){
//     console.log("para was clicked");
// } )

// let box = document.querySelector(".box")
// box.addEventListener("mouseenter",function(){
//     console.log("mouse in the box");
// })

// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let p = document.querySelector("p");

// btn.addEventListener("click", function(){
    //     console.dir(this.innerText);
    //     this.style.backgroundColor="grey"
    // })
// h1.addEventListener("click", function(){
    //     console.dir(this.innerText);
    //     this.style.backgroundColor="green"
    // })
    // h2.addEventListener("click", function(){
        //     console.dir(this.innerText);
        //     this.style.backgroundColor="brown"
        // })
        // p.addEventListener("click", function(){
            //     console.dir(this.innerText);
            //     this.style.backgroundColor="pink"
            // })
// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function(event){
//     console.log("button clicked");
// });

// const test = document.getElementById("mouseout")
// test.addEventListener(
//     "mouseleave",
//     (event)=>{
//         event.target.style.color="blue";
//         setTimeout(()=>{
//             event.target.style.color="";
//         },1000);
//     },
//     false,
// );
//  test.addEventListener(
//     "mouseout",
//     (event)=>{
//         event.target.style.color="orange";
//         setTimeout(()=>{
//             event.target.style.color="";
//         },500);
//     },
//     false,
//  );

// To Do app

// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function(){
//     let item =document.createElement("li");
//     item.innerText=inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText="done";
//     delBtn.classList.add("delete");
//     item.appendChild(delBtn);

//     ul.appendChild(item);
//     console.log(inp.value);
//     inp.value="";
// });

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("delete");
//     }
// });


// let gameSeq=[];
// let userSeq=[];

// let btns =["yellow","red","purple","green"];

// let started=false;
// let level=0;

// let h2=document.querySelector("h2");

// document.addEventListener("keypress", function(){
//     if(started==false){
//         console.log("game is started");
//         started=true;
//         levelUp();
//     }
// });

// function gameFlash(btn){
//     btn.classList.add("flash"); 
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },250);
// }
// function userFlash(btn){
//     btn.classList.add("userFlash"); 
//     setTimeout(function(){
//         btn.classList.remove("userFlash");
//     },250);
// }

// function levelUp(){
//     userSeq=[];
//     level++,
//     h2.innerText=`level ${level}`;

//     let randIdx = Math.floor(Math.random()*4);
//     let randColor =btns[randIdx];
//     let randBtn=document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     gameFlash(randBtn);
// } 

// function checkAns(idx){

//     if(userSeq[idx]===gameSeq[idx]){
//         if(userSeq.length==gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }else {
//         h2.innerHTML=`Game Over!</br> Your Score Was<b> ${level}</b> </br> Press any key to start`;
//         document.querySelector("body").style.backgroundColor="red";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor="black";
//         },300);
//         reset();

//     }
// }

// function btnPress(){ 
//     console.log(this);
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length-1);
// }

// let allBtns =document.querySelectorAll(".btn");
// for(btn of allBtns){
//     btn.addEventListener("click",btnPress);
// }

// function reset(){
//     gameSeq=[];
//     userSeq=[];
//     level=0;
//     started=false;
// }

const arr = [5,2,7,1,9,3,4,9,4,2,1,0];

function sort(arr){
    for (let i=0; i<arr.length; i++){
        setTimeout(()=> console.log(arr[i]),arr[i]);
    }
}
