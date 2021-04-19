
(function($) {
    var scrollVal = 0;

    // Hiding/ Showing header
    $(window).scroll(function(){
        scrollVal = $(window).scrollTop();
        if(scrollVal>200){
            $('#header').slideUp(1000);
        }else{
            $('#header').slideDown(1000);
        }
    });

    // newest/ populat topics
    $(".choice h4").on('click', function(e){
        $(".choice h4").removeClass('active-title');
        $(this).addClass('active-title');
        $(".popular").toggleClass('active');
        $(".newest").toggleClass('active');
    });

    // like/dislike handling

    $(".likes").on('click',function(){
        var count = parseInt($(this).text());
        if($(this).hasClass('like-active')){
            count= count-1;
            $(this).removeClass('like-active').html('<i class="far fa-thumbs-up"></i>'+count);
        }else{
            count= count+1;
            $(this).addClass('like-active').html('<i class="far fa-thumbs-up"></i>'+count);
        }
    })
    $(".dislikes").on('click',function(){
        var count = parseInt($(this).text());
        if($(this).hasClass('dislike-active')){
            count= count+1;
            $(this).removeClass('dislike-active').html('<i class="far fa-thumbs-down"></i>'+count);
        }else{
            count= count-1;
            $(this).addClass('dislike-active').html('<i class="far fa-thumbs-down"></i>'+count);
        }
    })

})(jQuery);