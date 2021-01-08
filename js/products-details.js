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

// featured items

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

//set items scrolling buttons

let leftBtn = btn[5],
    rightBtn=btn[6];

    leftBtn.onclick = () => {

            itemsContainer.scrollBy(-80,0)


        rightBtn.style.backgroundColor='#3a8bcd'

    }
    
    rightBtn.onclick = () => {

        itemsContainer.scrollBy(80,0)

        leftBtn.style.backgroundColor='#3a8bcd'

        };

//set inputs styles and events
for(let r=0;r<inputs.length;r++){
    inputs[r].onmousedown=()=>{
        inputs[r].style.outline='none'
    }
};
const myImg = document.querySelectorAll('.myImg');
const myMainImg = document.getElementById('myMainImg');
const myImgContainer = document.querySelectorAll('.myImgContainer');

for(let S=0;S<myImgContainer.length;S++){
 
    /*myImgContainer[S].onmouseenter= ()=>{

        const myDivAbs = document.createElement('div');

        myImgContainer[S].appendChild(myDivAbs);

        myDivAbs.setAttribute('class','abs')

        const myDivAbsStyles='width: 100px; height: 100px; background-color: rgba(79, 79, 219, 0.37);left: 14px; cursor: pointer;transition: all 1s';

        myDivAbs.setAttribute('style','width: 100px; height: 100px;left: 14px;');

         myImgContainer[S].onmouseover= () => {
            myDivAbs.setAttribute('style',myDivAbsStyles);
        };
          */
        myImgContainer[S].onclick= () => {

                myMainImg.setAttribute('src',myImg[S].src);
            
        }

        //myImgContainer[S].onpointerleave= ()=> myImgContainer[S].removeChild(myDivAbs);

    //}
}
const multipleImgContainer = document.querySelector('.multible-imgs-container');
btn[3].onclick = () => {
    multipleImgContainer.scrollBy(-115,0)
}
btn[4].onclick = () => {
    multipleImgContainer.scrollBy(115,0)
}
console.log(btn);
