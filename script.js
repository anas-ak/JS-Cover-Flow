var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 40,
        stretch: 25,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});