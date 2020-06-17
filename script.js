const hamburgerBtn = document.querySelector('.navigation__hamburger')
const navMobile = document.querySelector('.navigation-mobile')
hamburgerBtn.addEventListener('click', () => {
    navMobile.style.display = "block"
})
const navMobileCancelBtn = document.querySelector('.navigation__hamburger-cancel')
navMobileCancelBtn.addEventListener('click', () => {
    navMobile.style.display = "none"
})