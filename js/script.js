// JavaScript Document
$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});

$(document).ready(function () {
  $('#autoWidth2').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth2').removeClass('cS-hidden2');
    }
  });
});


function lowAgeBtnClick() {
  //window.scrollTo({top:300,behavior: 'smooth'});

  var element = document.getElementById("lowage");

  element.scrollIntoView();
  element.scrollIntoView(true);
  element.scrollIntoView({ block: "start" });
  element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

}
