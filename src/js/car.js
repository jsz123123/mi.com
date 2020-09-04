let baseUrl = "http://localhost/mi.com";
define(['jquery', 'cookie'], function ($, cookie) {
    return {
        render: function (callback) {
            let shop = cookie.get('shop');
            // console.log(shop);
            if (shop) {
                shop = JSON.parse(shop);
                // console.log(shop);
                let id = shop.map(eml => eml.id).join();
    
                // console.log(id)
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/car.php`,
                    data: {
                        'idlist': id
                    },
                    dataType: "json",
                    success: function (res) {
                        // console.log(res);

                        let temp = '';
                        res.forEach(elm => {
                            // console.log(elm)
                            let pic = JSON.parse(elm.img_car);
                            // console.log(pic);
                            // console.log(shop)
                            let arr = shop.filter(val => val.id == elm.id);
                            // console.log(arr);
                            temp += `  
                       <ul class="car-msg">
                         <li data-id="${elm.id}">
                      <div class="check"><input class="one" type="checkbox" checked></div>
                      <img src="${baseUrl}/${pic.src}" alt="">
                    <a href="javascript:;">${elm.title4}</a>
                    <span class="price"><em>${elm.price}</em>元</span>
                    
                    <div>
                       <i class="reduce">-</i>
                        <input  value="${arr[0].num}" type="text" class="nums"></input>
                        <i class="add">+</i>
                    </div>
                    <span class="result"><em>${arr[0].num * elm.price}</em>元</span>
                    <span class="move">×</span>
                         </li>
                           </ul>`

                        })
                        $('.car-msg').append(temp);
                        callback && callback();
                    }

                });
                    
            }

        }
    }
});