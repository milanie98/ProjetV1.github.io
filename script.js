//la fonction trigger
$(function(){
$("#pub").hide();
alert("coco");
setTimeout(function () {
   $('#pub').trigger('click');
}, 10000);

});

