//! Start Menu-Bar Show / Hide

let hamburgar = document.querySelector(".menu-bar");
let openModal = document.querySelector(".nav-link");
let closeModal = document.querySelector(".navbar-mid>.nav-link>span");

hamburgar.addEventListener("click", ()=>{
    openModal.classList.add("show-modal");
});

closeModal.addEventListener("click", ()=>{
    openModal.classList.remove("show-modal");
});

//! End Menu-Bar Show / Hide




//! Start FAQ Que / Ans

let question = document.querySelectorAll(".que-parts>.que>.question");

question.forEach((currentElem, currentIndex)=>{
    currentElem.addEventListener("click", ()=>{
        if(currentElem.lastElementChild.classList.contains("fa-angle-down")){
            currentElem.lastElementChild.classList.toggle("fa-angle-up");
        };
        if(currentElem.classList.contains("bg")){
            currentElem.classList.toggle("bg-color");
        }
        currentElem.nextElementSibling.classList.toggle("show-answer");

        question.forEach((Item, index)=>{
            if(currentIndex!==index){
                Item.nextElementSibling.classList.remove("show-answer");
                Item.lastElementChild.classList.remove("fa-angle-up")
                Item.classList.remove("bg-color");
            }
        })
    });
});


//! End FAQ Que / Ans




// ! Start Sub Menu Show / Hide
let mainmenu = document.querySelectorAll(".nav-link>ul>li>a");
let submenu = document.querySelector(".sub-menu");

mainmenu.forEach((curSubElem,curIndex)=>{
    curSubElem.addEventListener("click", ()=>{
        let submenubar = curSubElem.nextElementSibling;
        submenubar.classList.toggle("active");
        
    });
});
// ! End Sub Menu Show / Hide