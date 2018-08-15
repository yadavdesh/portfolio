
//facebook
/*
(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "https://connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

*/
//twitter
  (function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],
  p=/^http:/.test(d.location)?'http':'https';
  if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
  js.src=p+'://platform.twitter.com/widgets.js';
  fjs.parentNode.insertBefore(js,fjs);}}
  (document, 'script', 'twitter-wjs'));



$(document).ready(function(){

//smooth scrolling
var $root = $('html, body');
$('#navbar-example a').click(function() {
var href = $.attr(this, 'href');
if (href != undefined && href != '#') {
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
}
return false;
});

  // tooltip implementation --
  $('#item1').tooltip();

  $('[data-toggle="tooltip"]').tooltip();

// function for form button click
  $('#button').on('click', function() {
    var comment=$('#message').val();
    if(comment ===""){
      $('#message').css('border-color','red');
    }
    else {
      $('#visible-comment').html(comment);
      $('#message').hide();
      console.log(comment)
      return false;
    }
  });

  //function to count word in text texarea
  $('#message').on('keyup', function(){
    var char_count = $('#message').val().length;
    $('#visible-comment').html('Total Char:'+char_count);
    if(char_count > 50) {
      $('#visible-comment').css('color','red');
    }
    else{
      $('#visible-comment').css('color','steelblue');
    }
    console.log(char_count);
    return false;
  });




});
