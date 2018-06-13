$('.toggle').click(function(e){
  e.preventDefault(); // The flicker is a codepen thing
  $(this).toggleClass('toggle-on');
});
<<<<<<< HEAD

// UP edit 1.2 - file selected
function triggerFileBrowser(){
  $('#hiddenFileBrowser').trigger('click');
}
function fileSelected(fileobj){
  var fileName = $('#hiddenFileBrowser').val();
  $('#shownInput').val(fileName);
}
=======
>>>>>>> 4b6eb59c1dddade665baa7a51189f72970c2e8cf
