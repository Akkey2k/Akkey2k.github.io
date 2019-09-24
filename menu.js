$(document).ready(function() {
    // открыть/закрыть
    $("#open_menu").click(function(){
        $("#menu_list").fadeIn("slow");
    });

    $("#close_menu").click(function(){
        $("#menu_list").fadeOut("slow");
    });
    // скрол
    $("#services").click(function (){
        $('html, body').animate({
            scrollTop: $(".wrapper_service").offset().top
        }, 1500);
        $("#menu_list").fadeOut("slow");
    });
    $("#advantages").click(function (){
        $('html, body').animate({
            scrollTop: $(".wrapper_advantages").offset().top
        }, 1500);
        $("#menu_list").fadeOut("slow");
    });
    $("#contacts").click(function (){
        $('html, body').animate({
            scrollTop: $(".wrapper_contact").offset().top
        }, 1500);
        $("#menu_list").fadeOut("slow");
    });
    $("#development").click(function (){
        $('html, body').animate({
            scrollTop: $(".wrapper_development").offset().top
        }, 1500);
        $("#menu_list").fadeOut("slow");
    });
    $("#targeting").click(function (){
        $('html, body').animate({
            scrollTop: $(".wrapper_targeting").offset().top
        }, 1500);
        $("#menu_list").fadeOut("slow");
    });
    $("#goto").click(function (){
        $('html, body').animate({
            scrollTop: $("header").offset().top
        }, 1000);
    });
    // goto up
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            $('#goto').fadeIn("slow")
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop()<300){
            $('#goto').fadeOut("slow")
        }
    })
});  