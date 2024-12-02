let cards = {
  fruits:[`<div class="flex justify-between flex-wrap gap-10 mb-[100px]">
  <div class="max-w-[375px] w-full bg-[#F8766B] px-[25px] py-[60px] rounded-3xl">
      <h3 class="text-[44px] text-white font-bold">Strawberry</h3>
      <p class="text-[18px] text-white">Plant</p>
      <img class="mx-auto" src="./img/card-strawberry.png" alt="">
  </div>
  <div class="max-w-[375px] w-full bg-[#EDD251] px-[25px] py-[60px] rounded-3xl">
      <h3 class="text-[44px] text-white font-bold">Banana</h3>
      <p class="text-[18px] text-white">Plant</p>
      <img class="mx-auto" src="./img/ban.png" alt="">
  </div>
  <div class="max-w-[375px] w-full bg-[#9C9344] px-[25px] py-[60px] rounded-3xl">
      <h3 class="text-[44px] text-white font-bold">Kiwi</h3>
      <p class="text-[18px] text-white">Plant</p>
      <img class="mx-auto" src="./img/kiwi.png" alt="">
  </div>
</div>`],
  vegetables:[`<div class="flex justify-between flex-wrap gap-10 mb-[100px]">
  <div class="max-w-[375px] w-full bg-[#F7B18C] px-[25px] py-[60px] rounded-3xl">
      <h3 class="text-[44px] text-white font-bold">Carrot</h3>
      <p class="text-[18px] text-white">Plant</p>
      <img class="mx-auto" src="./img/carrot.png" alt="">
  </div>
  <div class="max-w-[375px] w-full bg-[#A3DDD6] px-[25px] py-[60px] rounded-3xl">
      <h3 class="text-[44px] text-white font-bold">Cauliflower</h3>
      <p class="text-[18px] text-white">Plant</p>
      <img class="mx-auto" src="./img/Cauliflower.png" alt="">
  </div>
  <div class="max-w-[375px] w-full bg-[#F47775] px-[25px] py-[60px] rounded-3xl">
      <h3 class="text-[44px] text-white font-bold">Chili</h3>
      <p class="text-[18px] text-white">Plant</p>
      <img class="mx-auto" src="./img/Chili.png" alt="">
  </div>
</div>`]
}

















const swiperBig = new Swiper('.swiperBig', {
    // Optional parameters

    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



let btn = document.querySelectorAll('.btns')
let wrap = document.querySelector('.wrap')

    wrap.innerHTML = cards.fruits

btn.forEach((btns, index)=> {
  btns.addEventListener('click', function () {
    btn.forEach(links => {
      links.classList.remove('active')
    });
    btns.classList.add('active')
    if (index == 0) {
      wrap.innerHTML = cards.fruits
    }
    else if (index == 1) {
      wrap.innerHTML = cards.vegetables
    }
  })
});