window.addEventListener("DOMContentLoaded", function(event){

});



window.addEventListener("click", function(event){

console.log(currentScrollPosition)
});

let sec1 = document.getElementById("red")
let sec2 = document.getElementById("orange")
let sec3 = document.getElementById("yellow")
let sec4 = document.getElementById("green ")
let sec5 = document.getElementById("red")
let sec6 = document.getElementById("purple")


let secontion = document.querySelectorAll("body > main > section")


let position = sec1.getBoundingClientRect().top;
let position2 = sec2.getBoundingClientRect().top;
let position3 = sec3.getBoundingClientRect().top;
let position4 = sec4.getBoundingClientRect().top;
let position5= sec5.getBoundingClientRect().top;
let position6 = sec6.getBoundingClientRect().top;

console.log(position, position2)


// recup la pos a partir du haut du document
let currentScrollPosition = document.documentElement.scrollTop;





let positionToGo = 0;

scroll(0, positionToGo)


function nextSection(current){
    if(current.id==="red"){
        
        return document.getElementById("orange")
    }
    else if(current.id==="orange")
    {
        return document.getElementById("yellow")
    }
    else if(current.id==="yellow")
    {
        return document.getElementById("green")
    }
    else if(current.id==="green")
    {
        return document.getElementById("blue")
    }
    else if(current.id==="blue")
    {
        return document.getElementById("purple")
    }
    
    
}










function previousSection(current){
    
    
    if(current.id==="purple")
    {
        return document.getElementById("blue")
    }
    else if(current.id==="blue")
    {
        return document.getElementById("green")
    }
    else if(current.id==="green")
    {
        return document.getElementById("yellow")
    }
    else if(current.id==="yellow")
    {
        return document.getElementById("orange")
    }
    else if(current.id==="orange")
    {
        return document.getElementById("red")
    }
}