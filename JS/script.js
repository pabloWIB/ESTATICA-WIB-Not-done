let durationDefault = 1.47;

initPageTransitions();

function initPageTransitions() {
   barba.init({
      transitions: [,{
         once() {
            initScript();
         },
      }]
   });
}  

/* Magnetic */

function initScript() {
    initMagnetic();
} 

function initMagnetic() {
    
   var magnets = document.querySelectorAll('[data-magnetic-target]');
   
   if(window.innerWidth > 1024){
      
      magnets.forEach((magnet) => {
         magnet.addEventListener('mousemove', moveMagnet );
         magnet.addEventListener('mouseleave', function(event) {
            gsap.to( $(event.currentTarget).find('#Z'), durationDefault, {
               x: 0, 
               y: 0, 
               ease: Expo.easeOut
            });    
         });
      });

      function moveMagnet(event) {
         var magnetButton = event.currentTarget;
         var bounding = magnetButton.getBoundingClientRect();
         var magnetsStrength = magnetButton.getAttribute("data-magnetic-strength");
         
         if($(event.currentTarget).parent().hasClass('hover')) {
            gsap.to($(magnetButton).find('#Z'), 1, {
               x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
               y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
               ease: Expo.easeOut
            });
         } else {
            gsap.to($(magnetButton).find('#Z'), durationDefault, {
               x: (event.clientX - bounding.left) - (bounding.width / 2),
               y: (event.clientY - bounding.top) - (bounding.height / 2),
               ease: Expo.easeOut
            }); 
         }
      }
   }
}





 // Function to check if an element is in the viewport
 function isElementInViewport(element) {
   var rect = element.getBoundingClientRect();
   return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
}

// Function to add or remove animationN1 class based on viewport visibility
function toggleAnimationN1() {
   var targetSection = document.getElementById("target-section2");
   if (isElementInViewport(targetSection)) {
       targetSection.classList.add('animationN1');
   } else {
       targetSection.classList.remove('animationN1');
   }
}

window.addEventListener("scroll", toggleAnimationN1);
window.addEventListener("resize", toggleAnimationN1);

// Run the function initially to check the initial state
toggleAnimationN1();