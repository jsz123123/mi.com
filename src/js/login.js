let baseUrl = "http://localhost/mi.com";

define(['jquery'], function ($) {
    return {
        render: function () {
            $('.btn').on('click', function () {
                let username = $('.username').val();
                let password = $('.password').val();
                $.ajax({
                    type: "get",
                    url: `${baseUrl}/interface/login.php`,
                    data: {
                        uname: username,
                        paw: password
                    },
                    dataType: "json",
                    success: function (res) {
                        if(res.status){
                            alert(res.msg);
                            location.href=`${baseUrl}/src/html/index.html`;
                        }else{
                            alert(res.msg);
                            location.href=`${baseUrl}/src/html/login.html`;
                        }
                    }
                });

            });

        }
    }

});