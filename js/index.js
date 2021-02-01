window.onload=function(){
    $(".nav .navgo").click(function(){
        $(".navMenu").css({"right":"0px","transition":"all .6s"})
        $(".Mask").css("display","block")
    })



    $(".navMenu .navgo").click(function(){
        $(".navMenu").css({"right":"-260px","transition":"all .6s"})
        $(".Mask").css("display","none")
    })


    $(".Mask").click(function(){
        $(".navMenu").css({"right":"-260px","transition":"all .6s"})
        $(".Mask").css("display","none")
    })


        $(window).scroll(function () {
            var a = $(window).scrollTop()
            console.log(a)
            if(a >880){
                $(".a-top").css("display","block")
            }else{
                $(".a-top").css("display","none")

            }
            if (a >= 870) {
                $(".content").css("display","none")
                $(".navLink").css({"color":"#333"})
                $(".header1").css({"position":"fixed","box-shadow": "rgb(0 0 0 / 10%) 0px 5px 20px","background-color":"#fff"})
                $(".navgo").css({"border-color":"#333","background-color":"#333"})
                $(".logo").css("color","#333")
            }else { 
                $(".content").css("display","block")
                $(".navLink").css({"color":"#fff"})
                $(".header1").css({"position":"","box-shadow": "","background-color":""})
                $(".navgo").css({"border-color":" rgba(255, 255, 255, 0.6)","background-color":" rgba(255, 255, 255, 0.6)"})
                $(".logo").css("color","#fff")
            }
            if(a >= 871){
                $(".progress-0").css("width","65%")
                $(".progress-1").css("width","80%")
                $(".progress-2").css("width","70%")
                $(".progress-3").css("width","70%")
                $(".progress-4").css("width","30%")
            }else{
                $(".progress-0").css("width","0%")
                $(".progress-1").css("width","0%")
                $(".progress-2").css("width","0%")
                $(".progress-3").css("width","0%")
                $(".progress-4").css("width","0%")
            }  
            if (a < 145){
                $(".xian1").css("left","0px")
                $(".xian2").css("left","-32px")
                $(".xian3").css("left","-32px")
                $(".xian4").css("left","-32px")
            }
            if (a >= 870){
                $(".xian1").css("left","-32px")
                $(".xian2").css("left","0px")
                $(".xian3").css("left","-32px")
                $(".xian4").css("left","-32px")
            }
            if (a >= 1742){
                $(".xian1").css("left","-32px")
                $(".xian2").css("left","-32px")
                $(".xian3").css("left","0px")
                $(".xian7").css("left","-32px")
            }
            if (a >= 2370){
                $(".xian1").css("left","-32px")
                $(".xian2").css("left","-32px")
                $(".xian3").css("left","-32px")
                $(".xian4").css("left","0px")
            }
        })
        $(".a-top").click(function () {
            $("html").animate({ 'scrollTop': 0 }, 1200);
        })


        $("#navLink1").click(function () {
            let sy = $(".header").offset().top;
            $("html").animate({ 'scrollTop': sy }, 1200);
        })

        $("#navLink2").click(function () {
            let gy = $(".main").offset().top;
            $("html").animate({ 'scrollTop': gy }, 1200);
        })

        $("#navLink3").click(function () {
            let works = $(".works").offset().top;
            $("html").animate({ 'scrollTop': works }, 1200);
        })

        $("#navLink4").click(function () {
            let contact = $(".contact").offset().top;
            $("html").animate({ 'scrollTop': contact }, 1200);
        })
}
