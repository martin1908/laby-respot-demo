var slide = $('.carousel img');

$('.carousel').carousel();

slide.on('click', function () {
    $('.testimonial ul li').hide();
    $($(this).data('testimonial')).fadeIn();
});

function tabCtrl() {
  var ctrls = document.getElementById('tabs-ctrl');
  
  ctrls.addEventListener('click', function(e) {
    var target = e.target;
    if(target.getAttribute('class') === 'tab-ctrl') {
      var ctrlsA = document.getElementsByClassName('tab-ctrl');
      var ctrlArray = Array.prototype.slice.call(ctrlsA);
      var index = ctrlArray.indexOf(target);
      var content = document.getElementsByClassName('tab-content');
      var contentArray = Array.prototype.slice.call(content);
      
      for(var i = 0; i < ctrlArray.length; i++) {
        ctrlArray[i].classList.remove('ctrl-active');
        contentArray[i].classList.remove('content-active');
      }
      target.classList.add('ctrl-active');
      contentArray[index].classList.add('content-active');
    }
  });
}

tabCtrl();
/*PERF IL*/

