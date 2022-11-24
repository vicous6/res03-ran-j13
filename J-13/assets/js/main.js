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



// let position = sec1.getBoundingClientRect().top;
// let position2 = sec2.getBoundingClientRect().top;
// let position3 = sec3.getBoundingClientRect().top;
// let position4 = sec4.getBoundingClientRect().top;
// let position5= sec5.getBoundingClientRect().top;
// let position6 = sec6.getBoundingClientRect().top;

// console.log(position, position2)
scroll(0,0);

// recup la pos a partir du haut du document



let sections = document.querySelectorAll("body > main > section");



    let countUp=0
    let countDown=0

for(let i = 0; i < sections.length ;i++){
    
    
        
    sections[i].addEventListener("wheel", function(event){
        
    let currentScrollPosition = document.documentElement.scrollTop;
    
    
    // let previousPosition= previousSection(sections[i]).getBoundingClientRect().top
    
    if(countDown>3 || countUp>3){
        
        countDown=0
        countUp=0
    }
    
    
        if(event.deltaY > 0) // je vais vers le bas
    {
        countDown++
        console.log(countDown)
    }
    else if(event.deltaY < 0) // je vais vers le haut
    {
    countUp++
    
    console.log(countUp)
    }

        if(event.deltaY > 0 &&  nextSection(sections[i])!= 0) 
        {
            
                // curent section pour sauvegarder la position de la section et pas le tiers restant avant la prochaine section 
                 let nextPosition= nextSection(sections[i]).getBoundingClientRect().top
        
    
            scroll(0,currentScrollPosition+nextPosition/3*countDown);
            
         console.log(`position actuelle ${currentScrollPosition} position next : ${nextPosition} current id ${sections[i].id}`)
       
    countDown=0

        }
        
        
        else if(event.deltaY < 0 && previousSection(sections[i])!= 0 && countUp==3) // je vais vers le haut
        {
        
       
           let previousPosition= previousSection(sections[i]).getBoundingClientRect().top
        
    
            scroll(0,currentScrollPosition+previousPosition);
            
       countUp=0
    

        }
    });

    
}


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
    else if(current.id==="purple")
    {
        return 0
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
    
    else if(current.id==="red")
    {
        return 0
    }
}


