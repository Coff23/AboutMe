"use strict";

let greeting = prompt("Hello, welcome to my site. What is your name?");
console.log(greeting);
alert("Thank you for coming to my site " + greeting);


let age = prompt ("I am 26 years old. Yes or no.").toLowerCase();
console.log(age);

if(age === "no" || age === "n"){
    alert ("Correct!"); 
    console.log("correct");
}else if(age === "yes" || age === "y"){
    alert ("Incorrect I am 28.");
    console.log("incorrect");
}else{
    console.log(age);
    alert("You do not follow instructions...");
}

let kids = prompt("I have 1 son. Yes or no.").toLowerCase();
console.log(kids);

if(kids === "no" || kids === "n"){
    console.log("correct");
    alert("Correct I have a daughter.");
}else if(kids === "yes" || kids === "y"){
    console.log("incorrect");
    alert("Incorrect I have a daughter.");
}else{
    console.log(kids);
    alert("You do not follow instructions...");
}

let job = prompt ("I was in the Army for six years. Yes or no.").toLowerCase();
console.log(job);

if (job === "yes" || job === "y"){
    console.log("correct");
    alert("That is correct");
}else if(job === "no" || job === "n"){
    console.log("incorrect");
    alert("Incorrect I was in for six years.");
}else{
    console.log(job);
    alert("You do not follow instructions...");
}

let education = prompt ("I have a degree in UAV applied science. Yes or no.").toLowerCase();
console.log(education);

if (education === "no" || education === "n"){
    console.log("correct");
    alert("Correct I have not finished that degree yet.");
}else if(education === "yes" || education === "y"){
    console.log("incorrect");
    alert("Incorrect I have not finished that degree yet.")
}else{
    console.log(education);
    alert("You do not follow instructions...");
}

let goals = prompt("I want to become a game developer eventually. Yes or no.").toLowerCase();
console.log(goals);

if(goals === "yes" || goals === "y"){
    console.log("correct");
    alert("Correct once I get a better understanding and am fluid in programming I would really enjoy developing games.");
}else if(goals === "no" || goals === "n"){
    console.log("incorrect");
    alert("Incorrect I would love to become a game developer one day.");
}else{
    console.log(goals);
    alert("You do not follow instructions...");
}

alert("Thank you for taking this quiz " + greeting);


