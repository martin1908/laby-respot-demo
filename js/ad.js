$('.toggle').click(function(e){
  e.preventDefault(); // The flicker is a codepen thing
  $(this).toggleClass('toggle-on');
});

// UP edit 1.2 - file selected
function triggerFileBrowser(){
  $('#hiddenFileBrowser').trigger('click');
}
function fileSelected(fileobj){
  var fileName = $('#hiddenFileBrowser').val();
  $('#shownInput').val(fileName);
}
