
function smoothScroll() {
    const internLinks = document.querySelectorAll('.js-scroll a[href^="#"]');
    
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    
    internLinks.forEach(link => link.addEventListener("click", scrollToSection));
        
    }
    smoothScroll();

    const aEffect = document.querySelector(".a-effect");
    const navMenu = document.querySelector(".categories-section");
    
    function hooverCategories() {
        aEffect.addEventListener("mouseenter", () => navMenu.classList.toggle("hover-effect"));
        navMenu.addEventListener("mouseleave", () => navMenu.classList.toggle("hover-effect"));
    }
    
    hooverCategories();
        
    const liEffect = document.querySelector(".l-acronyms");
    const languageMenu = document.querySelector(".languages-section");
    const shadowModal = document.querySelector(".modal-container");
    
    function clickLanguage(){
        liEffect.addEventListener("click", () => {
            languageMenu.classList.toggle("hover-effect-language");
            shadowModal.classList.toggle("modal-active");
        })
        liEffect.addEventListener("touchstart", () => {
            languageMenu.classList.toggle("hover-effect-language");
            shadowModal.classList.toggle("modal-active");
        })
    }
    clickLanguage();
    const searchWrapper = document.querySelector(".search-wrapper");
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");

    searchIcon.addEventListener("click", () => {
        searchWrapper.classList.toggle("active");
        searchInput.focus();
    });
    document.addEventListener("click", (e) => {
        if (!searchWrapper.contains(e.target)) {
            searchWrapper.classList.remove("active");
        }
    });
  
    const accEffect = document.querySelector(".acc-effect");
    const accMenu = document.querySelector(".menu-acc")
    
    function accClick()  {
        accEffect.addEventListener("click", () => {
            accMenu.classList.toggle("menu-click-effect");
            shadowModal.classList.toggle("modal-active");
        })
    
        accEffect.addEventListener("touchstart", () => {
            accMenu.classList.toggle("menu-click-effect");
            shadowModal.classList.toggle("modal-active");
        })
    }
    
    accClick();
    
    // ================= THEME TOGGLE =================

const themeToggleBtn = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-theme");
    themeToggleBtn.textContent = "☀️";

} else {

    themeToggleBtn.textContent = "🌙";

}


    // Toggle theme on click
    themeToggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {

            localStorage.setItem("theme", "light");
            themeToggleBtn.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "dark");
            themeToggleBtn.textContent = "🌙";

        }

    });

    // Close Menus
    const selectMain = document.querySelector("#all");
    
    function closeMenus(){
        selectMain.addEventListener("click", ()=>{
            console.log("click")
            selectMain.classList.toggle("close")
            languageMenu.classList.add("hover-effect-language");
            accMenu.classList.add("menu-click-effect");
            shadowModal.classList.add("modal-active");
        })
    }
    closeMenus();    
    // ================= CONTACT FORM HANDLING =================

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if(name === "" || email === "" || message === "") {

        formStatus.textContent = "Please fill all fields.";
        formStatus.style.color = "red";
        return;

    }

    // Email validation
    if(!validateEmail(email)) {

        formStatus.textContent = "Please enter valid email.";
        formStatus.style.color = "red";
        return;

    }

    // Success
    showCustomAlert();


    contactForm.reset();

});
// ================= CUSTOM ALERT FUNCTION =================

const customAlert = document.getElementById("custom-alert");
const alertClose = document.querySelector(".alert-close");

function showCustomAlert() {

    customAlert.classList.add("show");

    // Auto hide after 4 seconds
    setTimeout(() => {
        customAlert.classList.remove("show");
    }, 4000);

}

// Close button
alertClose.addEventListener("click", () => {
    customAlert.classList.remove("show");
});


// Email validation function
function validateEmail(email) {

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);

}
