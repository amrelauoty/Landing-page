/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const lists = document.querySelector('ul'); 
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for(let i = 0;i < sections.length; i++)
{
    const list = document.createElement('li');
    fragment.appendChild(list);

    const link = document.createElement('a');
    link.textContent = sections[i].getAttribute('data-nav');
    list.appendChild(link);
}
lists.appendChild(fragment);

const scrollToTop = document.querySelector('.scroll-to-top');
scrollToTop.onclick= function(e){
    e.preventDefault();
    window.scrollTo(0,0);
};

    
// Add class 'active' to section when near top of viewport
const anch  = document.querySelectorAll('li a');
anch[0].classList.add('active');
for(let i = 0;i < anch.length; i++)
{
   anch[i].setAttribute('href',("#"+sections[i].getAttribute('id')));
}
/*function handle(ev)
{
    ev.target.ParentElement.querySelectorAll(".active").forEach(element =>{
        element.classList.remove("active");
    });
    ev.target.classList.add("active");
}*/

window.onscroll = function(){
        for(let i = 0;i<sections.length;i++)
        {
            
            
            if(sections[i].getBoundingClientRect().top <=50 && sections[i].getBoundingClientRect().top >=-600)
            {
                sections[i].classList.add("your-active-class");
                document.querySelectorAll('a')[i].classList.add("active");
            }
            else
            {
                sections[i].classList.remove("your-active-class");
                document.querySelectorAll('a')[i].classList.remove("active");
            }
        
        }
}
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click

// Set sections as active


