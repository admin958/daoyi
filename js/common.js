window.onload = function () {
    //滚动条距离顶部有高度值的时候，头部添加背景颜色
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        if (st > 0) {
            $(".top").css("background", "rgba(251,5,5,0.6)");
        } else {
            $(".top").css("background", "none");
        }
    });
    //动画效果初始化语句
    if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        new WOW().init();
    }
    ;

    //分类产品右边块的高度限制
    var sh = (window.screen.height) - 50;
    $(".cate-small").css("height", sh);
    $(".cate-big").css("height", sh);

    //购物车数量加减js
    $(document).ready(function () {
        //加的效果
        $(".add").click(function () {
            var n = $(this).prev().val();
            var num = parseInt(n) + 1;
            if (num == 0) {
                return;
            }
            $(this).prev().val(num);
        });
        //减的效果
        $(".jian").click(function () {
            var n = $(this).next().val();
            var num = parseInt(n) - 1;
            if (num == 0) {
                return
            }
            $(this).next().val(num);
        });
    });

    //购物车最后一项不要下划线
    $(".cartlist ul li:last-child").css("border-bottom", "none");

    //个人中心第四和第八不要右边框
    $(".pc-box ul li:eq(3)").css("border-right", "none");
    $(".pc-box ul li:eq(7)").css("border-right", "none");

    $(".love-pro ul li:nth-child(2n)").css("float", "right");
    $(".love-pro ul li:nth-child(2n)").css("padding-right", "5%");
    $(".love-pro ul li:nth-child(2n)").css("padding-left", "2%");
    $(".love-pro ul li:nth-child(2n+1)").css("float", "left");
    $(".love-pro ul li:nth-child(2n+1)").css("padding-left", "5%");
    $(".love-pro ul li:nth-child(2n+1)").css("padding-right", "2%");

    //定位的下拉菜单
    $(".citylist ul li").click(function () {
        var s = $(this).next("div").css("display");
        if (s == "none") {
            $("citylist-2").hide();
            $(this).next("div").slideDown();
        } else {
            $("citylist-2").hide();
            $(this).next("div").slideUp();
        }
    });

    //点击首页的地址弹出定位层
    $(".position a").click(function () {
        $(".position-pop").show();
    });
    $(".pospop-t a").click(function () {
        $(".position-pop").hide();
    });

    //商品详情tab切换
    $('.priceTab .span1').click(function () {
        $(this).addClass('active');
        $('.priceTab .span2').removeClass('active');
        $('.productIntroduction').show();
        $('.commodityDetails').hide()
    });
    $('.priceTab .span2').click(function () {
        $(this).addClass('active');
        $('.priceTab .span1').removeClass('active');
        $('.commodityDetails').show();
        $('.productIntroduction').hide()
    });


    //商品详情页好评率
    (function () {
        var num1 = $('.progressBar_01 .progressBarNum span').text();
        var num2 = $('.progressBar_02 .progressBarNum span').text();
        var num3 = $('.progressBar_03 .progressBarNum span').text();
        $('.progressBar_01 .progressBarCont > div').css('width', num1 + '%');
        $('.progressBar_02 .progressBarCont > div').css('width', num2 + '%');
        $('.progressBar_03 .progressBarCont > div').css('width', num3 + '%');
    })();


    //商品详情页点击图片放大预览
    $('.ul3 li img').click(function () {
        var imgSrc = $(this).attr("src");
        $('.clickImg').show();
        $('.clickImg img').attr("src", imgSrc);
        $('.clickImg').click(function () {
            $(this).hide();
        });
    });

    //购物车点击删除
    $('.del').click(function () {
        $('.deleteCart_01').show();
        $('.deleteCart_01 .p3').hide();
        $('.deleteCart_01 .p1').show();
    });
    //购物车点击删除 确认取消
    (function () {
        $('.deleteCart_01_a1').click(function () {
            $('.deleteCart_01').hide(300);
            $('.deleteCart_01 .p3').hide();
            $('.deleteCart_01 .p1').show();
        });
        $('.deleteCart_01_a2').click(function () {
            $('.deleteCart_01 .p3').show();
            $('.deleteCart_01 .p1').hide();
            (function () {
                var fun = function () {
                    $('.deleteCart_01').hide(300);
                }
                setTimeout(fun, 1000);
            })();
        });
    })();

    /*修改1.3*/
    //点击添加购物车弹窗
    $('.addCart_show').click(function(){
        $('.addCart_02').show();
        (function () {
            var fun = function () {
                $('.addCart_02').hide();
            }
            setTimeout(fun, 1000);
        })();
    });
    //购物车tab切换
    $(".cartTabul li").click(function () {
        var tabContent = $('.cartCarList');
        $(".cartTabul li").eq($(this).index()).addClass("active").siblings().removeClass("active");
        $(tabContent).eq($(this).index()).show().siblings().hide();
    });

    //微信支付页 点击切换图片
    $('.clickToggle img').click(function () {
        var imgSrc = $(this).attr('src');
        if (imgSrc == 'images/panner06.png') {
            $(this).attr('src', 'images/panner07.png');
        } else if (imgSrc == 'images/panner07.png') {
            $(this).attr('src', 'images/panner06.png');
        }
    });

}
//商品详情添加至购物车图标显示
window.onscroll = function () { //绑定scroll事件
    var t = $(window).scrollTop();  //获取滚动距离
    //console.log(t);
    var m = $('.priceTextPro').height();
    var s = $('body').height();
    //console.log(s-m);
    //console.log(m);
    if (t >= s - m) { //判断
        $('.addCart_01').show();
    } else {
        $('.addCart_01').hide();
    }
}





