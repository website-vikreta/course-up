// include header and footer
$(function () {
   $("#includeNavbar").load("./includes/navbar.html");
})

// sticky navbar
const body = document.body
let previousScroll = 0

window.addEventListener("scroll", () => {
   currentScroll = window.pageYOffset

   if (currentScroll <= 0) {
      body.classList.remove("scroll-up")
   }

   if (currentScroll > previousScroll && !body.classList.contains('scroll-down')) {
      body.classList.remove('scroll-up')
      body.classList.add('scroll-down')
   }
   if (currentScroll < previousScroll && body.classList.contains('scroll-down')) {
      body.classList.remove('scroll-down')
      body.classList.add('scroll-up')
   }

   previousScroll = currentScroll
})