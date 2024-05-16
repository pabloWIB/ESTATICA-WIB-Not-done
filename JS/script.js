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
    var targetSection = document.getElementById("target-section1");
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