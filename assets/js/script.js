$(function(){

  var sec_idx = [];
  var scrWidth = 17;
  var winWidth = $(window).width() + scrWidth;
  $('.sec_wrap>div').each(function(){
    sec_idx.push($(this).offset().top);
  })

  $(window).resize(function(){
    sec_idx = [];
    $('.sec_wrap>div').each(function(){
      sec_idx.push($(this).offset().top);
    });
    winWidth = $(window).width()+scrWidth;

    if(winWidth > 650){
      $('.nav ul').css('display','block');
    }
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
    if(winWidth <= 650){
      $('.nav i').trigger('click');
    }
    return false;
  })

  $('.upbtn').click(function(e){
    $('html,body').animate({'scrollTop' : sec_idx[0]});

  })

  var hamBurger = 0;
  $('.nav i').click(function(){
    if(hamBurger == 0){
      hamBurger = 1;
      $('.nav img').attr('src','assets/images/menu02.png');
      $('header').stop().animate({'height': '100%'});
      $('.nav ul').slideDown();
    }else if(hamBurger == 1){
      hamBurger = 0;
      $('.nav img').attr('src','assets/images/menu01.png');
      $('header').stop().animate({'height': '80px'});
      $('.nav ul').slideUp();
    }
  })

})
