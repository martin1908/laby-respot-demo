$('.toggle').click(function(e){
  e.preventDefault(); // The flicker is a codepen thing
  $(this).toggleClass('toggle-on');
});
<<<<<<< HEAD

=======
>>>>>>> 22c26f7b9402907252dd26ec7d9b1af869b9b4b4

// UP edit 1.2 - file selected
function triggerFileBrowser(){
  $('#hiddenFileBrowser').trigger('click');
}
function fileSelected(fileobj){
  var fileName = $('#hiddenFileBrowser').val();
  $('#shownInput').val(fileName);
}
<<<<<<< HEAD

=======
>>>>>>> 22c26f7b9402907252dd26ec7d9b1af869b9b4b4
