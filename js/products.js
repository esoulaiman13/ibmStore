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

for(let b=0;b<btn.length;b++){
    btn[b].onmousedown=()=>{
        btn[b].style.outline='none'
    }
}
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


 //-------item styles

 const myDivAbsStyles=` background-color:rgba(255, 255, 255, 0.4);
                        transition:all 1s;`;
const myH3Styles = `color: #000;
                    transition:all 1s;`;


for(let x=0;x<item.length;x++){ //loop for all items in the home page and set events

item[x].onmouseenter = () => {

        item[x].style.cursor='pointer';

        const myDivAbs = document.createElement('div');

        item[x].appendChild(myDivAbs);

        myDivAbs.setAttribute('class','abs');

        h3[x].style.color='#3a8bcd';

    item[x].onmouseover= () => {
            myDivAbs.setAttribute('style',myDivAbsStyles);
        };
         item[x].onmouseleave = () => {
            
            item[x].removeChild(myDivAbs);

            h3[x].setAttribute('style',myH3Styles)
        };            
    };
};

//set inputs styles and events
for(let r=0;r<inputs.length;r++){
    inputs[r].onmousedown=()=>{
        inputs[r].style.outline='none'
    }
}










