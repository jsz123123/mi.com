let baseUrl = "http://localhost/mi.com";
define(['jquery','cookie'], function ($,cookie) {
    return {
        render: function (callback) {
            let id = location.search.split("=")[1];
            $.ajax({
                type: 'get',
                url: `${baseUrl}/interface/getitem.php`,
                data: {
                    id: id
                },
                dataType: 'JSON',
                success: function (res) {
                    // console.log(res);
                    let temp1 = '';
                    let temp2 = '';
                    let pic = JSON.parse(res.banner);
                    // console.log(pic)
                    let title3 = res.title3;
                    let title = res.title;
                    // console.log(title)
                    let add = JSON.parse(res.address);
                    // console.log(add);
                    temp1 += `
                   
                    <div class="top-con">
                        <div class="navwrap container">
                            <h2>小米10</h2>
                            <div class="left">
                                <span class="separator">|</span>
                                <a href="">${title}</a>
                            </div>
                            <div class="right">
                                <a href="">概述</a> <span class="separator">|</span>
                                <a href="">F码通道</a>
                                <span class="separator">|</span>
                                <a href="">咨询客服</a>
                                <span class="separator">|</span>
                                <a href="">用户评价</a>
                            </div>
                        </div>
                    </div>`
                    $('.topNav-bar').html(temp1)

                    temp2 +=
                        `<div class="product-box">
                    <div class="product-bigpic">
                    <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="background: url(${baseUrl}${pic[0].src})30% 30%;"><a href="#"></a>
                        </div>
                        <div class="swiper-slide" style="background: url(${baseUrl}${pic[1].src})30% 30%;"><a href="#"></a>
                        </div>
                        <div class="swiper-slide" style="background: url(${baseUrl}${pic[2].src})30% 30%;"><a href="#"></a>
                        </div>
                        <div class="swiper-slide" style="background: url(${baseUrl}${pic[3].src})30% 30%;"><a href="#"></a>
                        </div>
                    </div>

                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
                </div>
                <div class="product-con clearfix">
                    <div class="product-info">
                        <h2>
                        ${title3}
                        </h2>
                        <!-- 地址 -->
                        <div class="address-box">
                            <i></i>
                            <div class="address-con">
                                <div class="address-info">
                                    <span>${add.span1}</span>
                                    <span>${add.span2}</span>
                                    <span>${add.span3}</span>
                                    <span>${add.span4}</span>
                                    <a href="javascript:;" class="edit">修改</a>
                                </div>
                            </div>
                            <div class="desc">
                                <span class="">该地区暂时缺货</span>
                            </div>
                        </div>
                        <div class="active-box">
                            <span>选择版本</span>
                            <ul>
                                <li><a href="">8GB+128GB</a></li>
                                <li><a href="">8GB+256GB</a></li>
                                <li><a href="">12GB+256GB</a></li>
                            </ul>
                            <span>选择颜色</span>
                            <ul>
                                <li><a href="">钛银黑</a></li>
                                <li><a href="">冰海蓝</a></li>
                                <li><a href="">蜜桃金</a></li>
                            </ul>
                        </div>
                        <div class="selected-list">
                            <ul>
                                <li class="buytips">已成功加入购物车!</li>
                                <li class="logintips">您还没有登录，请先登录
                                    <a href="login.html">登录</a></li>
                                <span class="total-price">${res.price}元</span>
                            </ul>
                        </div>
                        <div class="buy-option">
                            <button class="btn btn-primary btn-small quantity-down ">
                                &minus;
                            </button>
                            <input type="text" id="cart-item-quanlity" value="1" />
                            <button class="btn btn-primary btn-small quantity-add">
                                &plus;
                            </button>
                            <a id="add-cart" target="_blank" href="${baseUrl}/src/html/shopcar.html">加入购物车</a>
    
                            <a id="buy-action" target="_blank" href="${baseUrl}/src/shopcar.html">进入购物车</a>
                           
                        </div>`
                    $('.mi-detail').html(temp2);
                    callback&&callback(res.id,res.price);
                    var swiper = new Swiper('.swiper-container', {
                        cssMode: true,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },
                        speed: 300,
                        autoplay: {
                            delay: 3000
                        },
                        loop: true,
                        mousewheel: true,
                        keyboard: true,
                    });
                }
            });


        },
        addItem:function(id,price,num){
            let shop = cookie.get('shop');

            let product = {
                id:id,
                price:price,
                num:num
            }
            if (shop){
                shop = JSON.parse(shop);
                // shop.push(product);
                if(shop.some(elm=>elm.id==id)){
                  
                    shop.forEach(elm=>{
                        elm.id==id?elm.num=num:null;
                    });
                }else{
                    shop.push(product);
                }
            }else{
                shop = [];
                shop.push(product);  
                
            }
          cookie.set('shop',JSON.stringify(shop),1);
        }
    }
})
