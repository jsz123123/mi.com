import Swiper from './lib/swiper.js';
var  swiper  =  new  Swiper(".swiper-container",   {  
    pagination:   ".swiper-pagination",
      paginationClickable:  true,
      loop:  true,
      // 循环模式选项
      pagination:  {     el:   ".swiper-pagination",     clickable:  true,     bulletActiveClass:   "my-bullet-active",    },
      navigation:  {     nextEl:   ".swiper-button-next",     prevEl:   ".swiper-button-prev",    },
      autoplay:  {     delay:  3000,     disableOnInteraction:  true,    },
      effect:   "fade",
      //动画效果：渐变
      fadeEffect:  {     crossFade:  true,    },
});
//鼠标划过停止自动切换
swiper.el.onmouseover  =   function ()  {  
    swiper.autoplay.stop();
};
//鼠标离开开始自动切换
swiper.el.onmouseout  =   function ()  {  
    swiper.autoplay.start();
};

export { swiper };