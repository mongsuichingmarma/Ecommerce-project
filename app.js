
///hero slider
const swiper = new Swiper(".ok-slider", {

    spaceBetween:140,
    speed: 900,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
     type:'bullets'
    }
   
  });

///about slider
  const lwiper = new Swiper('.about-slid',{
    speed:900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })



  ////lightbox
  
  $(document).ready(function() {
$('.image-pop').magnificPopup({

type:'image',
gallery: {
enabled: true
},
});
});

//team slide
const team = new Swiper('.team-slide',{
  speed:900,
  slidesPerView:3,
  spaceBetween:30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})

//testi
const testi = new Swiper('.testi-swiper',{
  speed:900,
  slidesPerView:3,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})

//work process
const workProcess = new Swiper('.work-slider',{
  speed:900,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
   type:'bullets'
  }
})






////nav toggle
const mainNav = document.querySelector('nav')
const nav = document.querySelector('.main-nav')

const ham = document.querySelector('.hamburger')

ham.addEventListener('click',()=>{
   nav.classList.toggle('active')
   ham.classList.toggle('toggle')
})


window.addEventListener('scroll', (e)=>{
 
  if(window.scrollY > 140){
mainNav.classList.add('nave')
  }else{
    mainNav.classList.remove('nave')
  }
})


