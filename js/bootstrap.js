
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
