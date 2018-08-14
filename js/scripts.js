
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

$(function () {
  $('#item1').tooltip();
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // function to change texarea background color
  $('#message').css('background-color', 'pink');

// function for form button click
$('#button').on('click', function() {
    var comment = $('#message').val();
    $('#visible-comment').html(comment);
    $('#message').hide();

    return false;
});


});
