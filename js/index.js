
           $(".btn_1").click(function() {
            $("#ty-login-cover")[0].style.display="block";   //显示遮罩层
            $("#ty-login-modal")[0].style.display="block";   //显示弹出层
            $(".btn_1")[0].style.display="none";
        })

      $("#ty-close").click(function(){
            $("#ty-login-cover")[0].style.display="none";   //隐藏遮罩层
            $("#ty-login-modal")[0].style.display="none";   //隐藏弹出层
        })
