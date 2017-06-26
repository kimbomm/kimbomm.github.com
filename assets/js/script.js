$(function(){

  var sec_idx = [];
  $('.sec_wrap>div').each(function(){
    sec_idx.push($(this).offset().top);
  })

  $(window).scroll(function(){
    var scrW = $(this).scrollTop();

    $('.sec_wrap div').each(function(i){
      var hei = $(this).height() + sec_idx[i];
      if(scrW >= sec_idx[i] && scrW < hei){
        $(this).addClass('on').siblings().removeClass('on');
        $('.nav li').eq(i).addClass('on').siblings().removeClass('on');
      }
    })

    if(sec_idx[1]>scrW){
      $('.upbtn').fadeOut(500);
    }else if(scrW > sec_idx[1]){
      $('.upbtn').fadeIn(500);
    }
  })

  $('.nav li a').click(function(e){
    console.log('aaaa');
    var sel_idx = $(this).parent().index();
    $('body,html').stop().animate({
      'scrollTop' : sec_idx[sel_idx]
    })
    return false;
  })

  $('.upbtn').click(function(e){
    $('html,body').animate({'scrollTop' : sec_idx[0]});

  })
})
