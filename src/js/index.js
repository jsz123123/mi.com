let baseUrl = "http://localhost/mi.com";//基础路径必须是绝对路径
define(['jquery'], function ($) {
    return {
        render: function () {
            $.ajax({
                type: "get",
                url: `${baseUrl}/interface/getall.php`,
                dataType: "json",
                success: function (res) {
                    // console.log(res); 
                    let temp = '';
                    res.forEach(elm => {
                        // console.log(elm.img)
                        let pic = JSON.parse(elm.img);
                        // console.log(pic);
                        temp += `            
                    <a href="${baseUrl}/src/html/product.html?id=${elm.id}" class="row2-content float-left">
                    <img src="${baseUrl}/${pic[0].src}" alt="">
                    <h3>RedmiBook 13 i5 8G 512G SATA MX250 2G 银</h3>
                    <p class="des">${elm.title}</p>
                    <div class="price">
                        <h5>${elm.price}元</h5>
    
                        <del>399元</del>
                    </div>
                </a>`
                    });
                    $('.row2').append(temp);


                }
            })
        }
    }
})