

// Side Bar

// Open Side Bar
let openBtn = document.getElementById("open-btn");
openBtn.addEventListener("click", function () {
    document.getElementById("sidebar").classList.add("active");
});

// Close Side Bar
let closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", function () {
    document.getElementById("sidebar").classList.remove("active");
});




// Buttons Selection
let homeBtns = document.getElementsByClassName("home-btn");
let abtBtns = document.getElementsByClassName("service-btn");
let menuBtns = document.getElementsByClassName("des-btn");
let cntBtns = document.getElementsByClassName("contact-btn");

// Sections
let home = document.getElementById("home");
let abt = document.getElementById("service-section");
let menu = document.getElementById("des-section");
let cnt = document.getElementById("contact-section");

// Scroll Function
function scrollToSection(section) {
    document.getElementById("sidebar").classList.remove("active");
    section.scrollIntoView({ behavior: "smooth" });
}

//click events
Array.from(homeBtns).forEach(btn => {
    btn.addEventListener("click", () => scrollToSection(home));
});
Array.from(abtBtns).forEach(btn => {
    btn.addEventListener("click", () => scrollToSection(abt));
});
Array.from(menuBtns).forEach(btn => {
    btn.addEventListener("click", () => scrollToSection(menu));
});
Array.from(cntBtns).forEach(btn => {
    btn.addEventListener("click", () => scrollToSection(cnt));
});









