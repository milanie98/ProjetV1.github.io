//la fonction trigger
$(function(){
$("#pub").hide();
setTimeout(function () {
   $('#pub').trigger('click');
}, 2000);

});

