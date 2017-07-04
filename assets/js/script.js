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
})
