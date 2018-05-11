(function () {
    'use strict'
    /**
     * this is layout.js
     */
    layui.use('layer', function () {
        var layer = layui.layer;
    });
    $(function () {
        $('#test').click(function () {
            fullscreen();
        });
        var flag = true;
        // nav收缩展开
        $('.layout-navitem>a').on('click', function () {
            if (!$('.layout-nav').hasClass('layout-navmini')) {
                var self = $(this);
                if ($(this).next().css('display') == "none") {
                    //展开未展开
                    $('.layout-navitem').children('ul').slideUp(300);
                    $(this).next('ul').slideDown(300, function () {
                        isShowScroll();
                        var winH = $('body').height() - self.next().offset().top;
                        var ulH = self.next().height();
                        if ((winH - ulH) < 0) {
                            // self.parent().parent().scrollTop((self.parent().parent())[0].scrollHeight);
                            self.parent().parent().animate({ scrollTop: (ulH + self.parent().parent().scrollTop()) }, 500);
                        }
                    });
                    $(this).parent('li').addClass('layout-navshow').siblings('li').removeClass('layout-navshow');
                } else {
                    //收缩已展开
                    $(this).next('ul').slideUp(300, isShowScroll);
                    $('.layout-navitem.layout-navshow').removeClass('layout-navshow');
                }
            }
        });

        $('.layout-nav-scroll').mouseenter(function () {
            if (isScroll())
                layer.open({
                    anim: 3,
                    type: 4,
                    shade: 0,
                    tips: [2, '#333'],
                    closeBtn: 0,
                    time: 1000,
                    fixed: true,
                    content: ['向下滚动查看更多', '.toolTip'] //数组第二项即吸附元素选择器或者DOM
                });
        });

        $('.layout-navitem').hover(function () {
            if ($('.layout-nav').hasClass('layout-navmini')) {
                $('.layout-nav-scroll>ul').css('width', '220');
                $('.layout-nav-scroll').css('width', '200');
            }

            if (calDistance($(this)) < 50) {
                var height = $(this).find('ul').height();
                if (height > 0) {
                    $(this).find('ul').css('top', -1 * (height - 47));
                }
            }
        }, function () {
            if ($('.layout-nav').hasClass('layout-navmini')) {
                $('.layout-nav-scroll>ul').css('width', '80');
                $('.layout-nav-scroll').css('width', '60');
            }
        });
        //nav-mini切换
        $('#layout-mini').on('click', function () {
            if (!$('.layout-nav').hasClass('layout-navmini')) {
                $('.layout-navitem.layout-navshow').removeClass('layout-navshow');
                $('.layout-navitem').children('ul').removeAttr('style');
                $('.layout-nav').addClass('layout-navmini');
                $('.layout-nav-scroll>ul').css('width', '80');
                $('.layout-nav-scroll').css('width', '60');
                $('img', $(this)).attr('src', '../common/images/icon_close.png');
            } else {
                $('.layout-nav').removeClass('layout-navmini');
                $('img', $(this)).attr('src', '../common/images/icon_open.png');
                $('.layout-nav-scroll>ul').css('width', '200');
                $('.layout-nav-scroll').css('width', '180');
            }
        });

        window.onload = function () {
            if (isScroll()) {
                isShowScroll()
                flag = true
            } else {
                flag = false;
            }
        }
        $(window).resize(function () {
            if (isScroll()) {
                if ($('.layout-nav').hasClass('layout-navmini'))
                   {
                    $('.layout-nav-scroll>ul').css('width', '80');
                    $('.layout-nav-scroll').css('width', '60');
                   }
                flag = true
            } else {
                flag = false;
            }
        });
    });

    $(".layout-navitem>ul>li").each(function () {
        $(this).find("a").click(function () {
            $(this).addClass("layout-active");
            $(this).parent("li").siblings().find("a").removeClass("layout-active");
        })
    })
    function isShowScroll() {
        $('.layout-navmini .layout-nav-scroll').css('width', '220');
    }
    function isScroll() {
        if ($('.layout-nav-scroll>ul')[0].scrollHeight > $('.layout-nav-scroll>ul')[0].clientHeight) {
            return true;
        }
        else {
            return false
        }
    }
    function calDistance(selector) {
        var ele = selector.find('ul');
        var h = selector.find('ul').height();
        var topH = ele.offset().top;
        var wh = $(window).height();
        return wh - (h + topH);

    }
    // function currenttTime(){
    var date = new Date();
    var current = date.toLocaleString();
    $(".layui-nav-item-time").text(current);
    function setTime() {
        var date = new Date();
        var current = date.toLocaleString();
        $(".layui-nav-item-time").text(current);
        // console.log(current);
    }
    setInterval(setTime, 1000);
    //  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    //  currenttTime();
    var fullscreen = function () {
        var elem = document.body;
        if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.requestFullScreen) {
            elem.requestFullscreen();
        } else {
            //浏览器不支持全屏API或已被禁用  
            alert('浏览器不支持全屏API或已被禁用');
        }
    }
    var exitFullscreen = function () {
        var elem = document;
        if (elem.webkitCancelFullScreen) {
            elem.webkitCancelFullScreen();
        } else if (elem.mozCancelFullScreen) {
            elem.mozCancelFullScreen();
        } else if (elem.cancelFullScreen) {
            elem.cancelFullScreen();
        } else if (elem.exitFullscreen) {
            elem.exitFullscreen();
        } else {
            alert('浏览器不支持全屏API或已被禁用');
        }
    }
})();