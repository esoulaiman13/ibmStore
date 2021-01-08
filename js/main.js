
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
            ahref[i].style.color='#000'
        }
        ahref[5].onmouseleave=()=>{
            ahref[5].style.color='#3a8bcd'
        }
        ahref[6].onmouseleave=()=>{
            ahref[6].style.color='#3a8bcd'
        }
    
}

//front info

const onmuseoverStyles='transition:all 1s;background-color:#3a8bcd93;cursor:pointer;';
const onmouseleaveStyles='transition:all 1s;background-color:#3a8bcd';

btn[0].onmouseover = () => {
    btn[0].setAttribute('style',onmuseoverStyles);
}
btn[0].onmouseleave = () => {
    btn[0].setAttribute('style',onmouseleaveStyles);
}

 //-------item styles

const myDivAbsStyles=` background-color:rgba(255, 255, 255, 0.4);
                        transition:all 1s;`;
const myH3Styles = `color: #000;
                    transition:all 1s;`;

for(let x=0;x<item.length-1;x++){ //loop for all items in the home page and set events

    item[x].onmouseenter = () => {

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

//set items scrolling buttons


let leftBtn = btn[2],
    rightBtn=btn[3];

    leftBtn.onclick = () => {

            itemsContainer.scrollBy(-80,0)


        rightBtn.style.backgroundColor='#3a8bcd'

    }
    
    rightBtn.onclick = () => {

        itemsContainer.scrollBy(80,0)

        leftBtn.style.backgroundColor='#3a8bcd'

        };

//remove outline
        
for(let y=0;y<btn.length;y++){

    btn[y].onmousedown=()=>{

        btn[y].style.outline='none'
    };
};

//set inputs styles and events

for(let r=0;r<inputs.length;r++){
    inputs[r].onmousedown=()=>{
        inputs[r].style.outline='none'
    }
}