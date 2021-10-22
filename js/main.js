
function graphicsin() {
	document.getElementById("sticker1").style.zIndex = "1";
  }
  
  function graphicsout() {
	document.getElementById("sticker1").style.zIndex = "-1";
  
  }
  
  function photoin() {
	document.getElementById("sticker2").style.zIndex = "1";
  }
  function photoout() {
	document.getElementById("sticker2").style.zIndex = "-1";
  
  }
  
  function bigImg2() {
	document.getElementById("sticker3").style.zIndex = "1";
  
  }
  function normalImg2() {
	document.getElementById("sticker3").style.zIndex = "-2";
  
  }
  
  
  function drawpaintin() {
	document.getElementById("sticker4").style.zIndex = "1";
  }
  
  function drawpaintout() {
	document.getElementById("sticker4").style.zIndex = "-2";
  
  }

 
  function goBack() {
    window.history.back();
  } 
  
  Splitting();


  /*burger*/

  $(document).ready(function () {
    $('.hamburger-shell').click(function () {
    $('#menu').slideToggle(300);
    $('.top').toggleClass('rotate');
    $('.middle').toggleClass('rotate-back');
    $('.menu-name').toggleClass('bump');
    $('.bg-cover').toggleClass('reveal');
    });
    $('.bg-cover').click(function () {
    $('#menu').slideToggle(300);
    $('.top').toggleClass('rotate');
    $('.middle').toggleClass('rotate-back');
    $('.menu-name').toggleClass('bump');
    $('.bg-cover').toggleClass('reveal');
    });
    });



    const imgContent = document.querySelectorAll('.img-content-hover');
    
    function showImgContent(e) {
      for (var i = 0; i < imgContent.length; i++) {if (window.CP.shouldStopExecution(0)) break;
        x = e.pageX;
        y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }window.CP.exitedLoop(0);
    };
    
    document.addEventListener('mousemove', showImgContent);
  