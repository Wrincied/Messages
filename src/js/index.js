console.log(navigator.userAgent);
$(document).ready(function(){
   
    $('.spoiler-body').hide();
    $('.spoiler-title').click(function(){
        document.title = "С новым город";
        $(this).toggleClass('opened').toggleClass('closed').next().slideToggle(800);
        if($(this).hasClass('opened')) {
            $(this).html('Скрыть');
        }
        else {
            $(this).html('Показать');
            document.title = "Больше чем слова";
        }
    });
    });