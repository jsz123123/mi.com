let baseUrl = "http://localhost/mi.com";
define(['jquery'], function ($) {
    'use strict';
    return {
        render: function () {
            $('.btn').on('click', function () {
                let iphone = $('.title1').val();
                let password = $('.title2').val();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/zhuce.php`,
                    data: {
                        iphone: iphone,
                        paw: password
                    },
                    dataType: "json",
                    success: function (res) {
                        console.log(res)
                        if (res.status) {
                            alert(res.msg);
                            location.href = '../../src/html/login.html';
                        } else {
                            alert(res.msg);
                            location.href = '../../src/html/zhuce.html';
                        }
                    }
                });
            });

        }
    }

});