// JavaScript Document
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
  });


  function lowAgeBtnClick() {
    //window.scrollTo({top:300,behavior: 'smooth'});
    
    var element = document.getElementById("lowage");

    element.scrollIntoView();
    element.scrollIntoView(true);
    element.scrollIntoView({block: "start"});
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }
