$(function(){

  var sec_idx = [];
  $('.sec_wrap div').each(function(){
    sec_idx.push($(this).offset().top);
  })

  $(window).scroll(function(){
    var scrW = $(this).scrollTop();

    $('.sec_wrap div').each(function(i){
      var hei = $(this).height() + sec_idx[i];
      if(scrW > sec_idx[i] && scrW < hei){
        $(this).addClass('on').siblings().removeClass('on');
        $('.nav li').eq(i).addClass('on').siblings().removeClass('on');
      }

    })
  })

  $('.nav li a').click(function(e){
    e.preventDefault();
    var sel_idx = $(this).parent().index();
    $('body').stop().animate({
      'scrollTop' : sec_idx[sel_idx]
    })
  })
})
