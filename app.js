"use strict";

let greeting = prompt("Hello, welcome to my site. What is your name?");
console.log(greeting);
alert("Thank you for coming to my site " + greeting);


let age = prompt ("I am 26 years old. Yes or no.").toLowerCase();
console.log(age);

if(age === "no" || "n"){
    alert ("Correct!"); 
    console.log("correct");
}else{
    alert ("I am 28.");
    console.log("incorrect");
}

let kids = prompt("I have 1 son. Yes or no.").toLowerCase();
console.log(kids);

if(kids === "no" || "n"){
    console.log("correct");
    alert("Correct I have a daughter.");
}else{
    console.log("incorrect");
    alert("I have a daughter.");
}

let job = prompt ("I was in the Army for six years. Yes or no.").toLowerCase();
console.log(job);

if (job === "yes" || "y"){
    console.log("correct");
    alert("That is correct");
}else{
    console.log("incorrect");
    alert("Incorrect I was in for six years.");
}

let education = prompt ("I have a degree in UAV applied science. Yes or no.").toLowerCase();
console.log(education);

if (education === "no" || "n"){
    console.log("correct");
    alert("Correct I have not finished that degree yet.");
}else{
    console.log("incorrect");
    alert("Incorrect I have not finished that degree yet.")
}

let goals = prompt("I want to become a game developer eventually. Yes or no.").toLowerCase();
console.log(goals);

if(goals === "yes" || "y"){
    console.log("correct");
    alert("Correct once I get a better understanding and am fluid in programming I would really enjoy developing games.");
}else{
    console.log("incorrect");
    alert("Incorrect I would love to become a game developer one day.")
}

alert("Thank you for taking this quiz " + greeting);


