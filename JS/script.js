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
let mainMenu = document.querySelectorAll(".nav-link>ul>li>a");

mainMenu.forEach((currentElem, Index)=>{
    currentElem.addEventListener("click", (event)=>{        
        event.preventDefault();

        console.log(mainMenu.lastchild);
        
        let targetElem = document.getElementById(currentElem.dataset.target);

            document.querySelectorAll(".sub-menus.active").forEach((menu)=>{
                if(menu !== targetElem){
                    menu.classList.remove("active");
                };
            });

            if(targetElem){
                targetElem.classList.toggle("active");

                // if(mainMenu.lastElementChild.contains("fa-angle-down")){
                //     mainMenu.lastElementChild.add("fa-angle-up");
                // }
            } 
            
            
    });
});

// ! End Sub Menu Show / Hide