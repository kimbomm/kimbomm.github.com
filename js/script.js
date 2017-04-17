

  var sec_idx = [];
  $('sec_wrap > div').each(function(){
    sec_idx.push($(this).offset().top);
  })

  console.log(sec_idx);
