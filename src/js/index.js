console.log(navigator.userAgent);
$(document).ready(function(){
    $('.spoiler-body').hide();
    $('.spoiler-title').click(function(){
        $(this).toggleClass('opened').toggleClass('closed').next().slideToggle(800);
        if($(this).hasClass('opened')) {
            $(this).html('Скрыть');
        }
        else {
            $(this).html('Показать');
        }
    });
    });