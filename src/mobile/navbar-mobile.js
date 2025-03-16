document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const closeIcon = document.getElementById("close-icon");
    const mobileMenu = document.getElementById("mobile-menu");

    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        menuIcon.classList.toggle("active");
        closeIcon.classList.toggle("active");
    });

    closeIcon.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        menuIcon.classList.toggle("active");
        closeIcon.classList.toggle("active");
    });

    mobileMenu.addEventListener("click", (event) => {
        if (event.target.tagName === 'A') {
            mobileMenu.classList.remove("active");
            menuIcon.classList.add("active");
            closeIcon.classList.remove("active");
        }
    });
});


