$(function(){

  var hideCtl=0;
  var hide = setInterval(function(){
    if(hideCtl == 0){
      $('.title .line').css('display','none');
      hideCtl = 1;
    }else if(hideCtl == 1){
      $('.title .line').css('display','block')
      hideCtl = 0;
    }
  },700)

  $('.cWrap').mousedown(function(){
    $(this).css({
      'background-color' : '#555',
      'padding' : '10px 0 10px 40px'
    }).find('span').css('color','#fff');
    $('.cWrap ul').css('list-style','circle');
  })
  $('.cWrap').mouseup(function(){
    $(this).css({
      'background-color' : 'rgba(255,255,255,0)',
      'padding' : '0'
    }).find('span').css('color','#555');
    $('.liTitle').css('color','#fff');
    $('.cWrap ul').css('list-style','disc');
  })
})
