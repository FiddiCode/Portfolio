// ====================toggle icon navbar===================
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");




// ===================scroll section active navbar==================

let sections= document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
console.log(sections);
console.log(navLinks);

window.onscroll=()=>{
    sections.forEach((sec) => {
        console.log(sec);
        let top=window.scrollY;
        let offset= sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');
        console.log(id);
        

       if(top >= offset && top<= offset + height){
        navLinks.forEach((links) =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
       }

    })

    // -------------------------sticky Navbar-------------------------

    let header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

