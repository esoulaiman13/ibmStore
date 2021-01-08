
/*  
    calling aal sides in the page and setting variabls
*/
// nav bar 
const navbarContainer= document.querySelector('.nav-bar');
const navbar= document.querySelectorAll('nav');
const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('li');
const ahref = document.querySelectorAll('a');
const h3 = document.querySelectorAll('h3');

//top front info + items buttons
 
const btn=document.querySelectorAll('button');

// featured items

const itemsContainer= document.querySelector('.items-container');
const item = document.querySelectorAll('.item');

//subscribe 

const inputs = document.querySelectorAll('input');

//social icons

const icons=document.querySelectorAll('i');

/*-------------------------
    set evants
---------------------------*/

// nav bar 
const navIcon = btn[0];
console.log(navbarContainer);


    navIcon.onmouseenter = () =>{

        navbarContainer.style.display='block'
    }
    navbarContainer.onmouseleave = () =>{

        navbarContainer.style.display='none'
    }

    for (let i=0;i<ahref.length-1;i++){
        
        ahref[i].onmouseover=()=>{
            ahref[i].style.color='#3a8bcd'
    }
        ahref[i].onmouseleave=()=>{
            ahref[i].style.color='teal'
        }
        ahref[5].onmouseleave=()=>{
            ahref[5].style.color='#3a8bcd'
        }
        ahref[6].onmouseleave=()=>{
            ahref[6].style.color='#3a8bcd'
        }
    
}
//set inputs styles and events
for(let r=0;r<inputs.length;r++){
    inputs[r].onmousedown=()=>{
        inputs[r].style.outline='none'
    }
}