$(document).ready(function () {
  screenCheck();
});
function scrooll(sec) {
  if (sec==1) {
    $.scrollify.move('#s-one');
  }
  else if (sec==2) {
    $.scrollify.move('#s-two');
  }
  else if (sec==3) {
    $.scrollify.move('#s-three');
  }
  else if (sec==4) {
    $.scrollify.move('#s-foor');
  }
  else if (sec==5) {
    $.scrollify.move('#s-five');
  }
  else if (sec==6) {
    $.scrollify.move('#s-six');
  }
  else if (sec==7) {
    $.scrollify.move('#s-seven');
  }
  else if (sec==8) {
    $.scrollify.move('#s-eght');
  }
  else if (sec==9) {
    $.scrollify.move('#s-nine');
  }
  else if (sec==10) {
    $.scrollify.move('#s-ten');
  }
}
var prevScrollpos = window.pageYOffset;

$(window).on('resize', function () {
  screenCheck();
});

function applyScroll() {
  $.scrollify({
    section: '.scroll',
    sectionName: 'section-name',
    //standardScrollElements: 'section',
    easing: 'easeOutExpo',
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    setHeights: true,
    overflowScroll: true,
    updateHash: false,
    touchScroll: true,
    before:function(i,panels) {

    var ref = panels[i].attr("data-section-name");

    $(".pagination .active").removeClass("active");

    $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
    var pagination = "<ul class=\"pagination\">";
    var activeClass = "";
    $(".scroll").each(function(i) {
      activeClass = "";
      if(i===$.scrollify.currentIndex()) {
        activeClass = "active";
      }
      pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
    });

    pagination += "</ul>";

    $(".home").append(pagination);
    /*

    Tip: The two click events below are the same:

    $(".pagination a").on("click",function() {
      $.scrollify.move($(this).attr("href"));
    });

    */
    $(".pagination a").on("click",$.scrollify.move);
    }
  });
}

function screenCheck() {
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
  if (agentID || $(window).width() <= 930) {
    // its mobile screen
    $.scrollify.destroy();
    $('section').removeClass('scroll').removeAttr('style');
    $.scrollify.disable();
    //document.getElementsByClassName("normalx")[0].style.display = "none";
    //document.getElementsByClassName("abnormalx")[0].style.display = "grid";
    document.getElementsByClassName('pagination')[0].style.display = "none";
  } else {
    // its desktop
    $('section').addClass('scroll');
    applyScroll();
    $.scrollify.enable();
    //document.getElementsByClassName("normalx")[0].style.display = "flex";
    //document.getElementsByClassName("abnormalx")[0].style.display = "none";
    document.getElementsByClassName('pagination')[0].style.display = "grid";
  }
}
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  var currentScrollPos = window.pageYOffset;
  if ($(window).width() > 930) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    }
    else {
      document.getElementById("navbar").style.top = "-12%";
    }
  }
prevScrollpos = currentScrollPos;
}

function clemail() {
  document.getElementById("divmil").style.display ="block";
  document.getElementById('emailbyd').style.display ="block";
  document.getElementById('emails').select();
  document.execCommand("copy");
  document.getElementById("divmil").style.display ="none";
  hidebyd()
}
function hidebyd() {
  setTimeout(function(){
    document.getElementById('emailbyd').style.display ="none";
  }, 2000)
}
function openviwer(ing) {
  if (ing==0) {
    document.getElementById('img-viewer').style.display ="none";
  }
  else if (ing==1) {
    document.getElementById('img-viewer').style.display ="flex";
    document.getElementById('myimage').removeAttribute("src");
    document.getElementById('myimage').setAttribute("src", "Picture3.png");
  }
  else if (ing==2) {
    document.getElementById('img-viewer').style.display ="flex";
    document.getElementById('myimage').removeAttribute("src");
    document.getElementById('myimage').setAttribute("src", "Picture2png.png");
  }
  else if (ing==3) {
    document.getElementById('img-viewer').style.display ="flex";
    document.getElementById('myimage').removeAttribute("src");
    document.getElementById('myimage').setAttribute("src", "Picture4.png");
  }
}
setTimeout(function() {
  scrooll(1);
},500);
var check = 0;
function openhdr(sdkg) {
  if (sdkg==1) {
    document.getElementsByClassName('header')[0].style.left = "-100%";
    check=0;
  }
  else if (sdkg==2) {
    if (check==0) {
      document.getElementsByClassName('header')[0].style.left = "0";
      check=1;
    }
    else {
      document.getElementsByClassName('header')[0].style.left = "-100%";
      check=0;
    }
  }
}
function topFunction() {
  if ($(window).width() < 930) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
function jumponit(sesk) {
  if ($(window).width() < 930) {
    if (sesk==1) {
      window.location.hash = "#s-one"
    }
    else if (sesk==2) {
      window.location.hash = "#s-two"
    }
    else if (sesk==3) {
      window.location.hash = "#s-three"
    }
    else if (sesk==4) {
      window.location.hash = "#s-foor"
    }
    else if (sesk==5) {
      window.location.hash = "#s-five"
    }
    else if (sesk==6) {
      window.location.hash = "#s-six"
    }
    else if (sesk==7) {
      window.location.hash = "#s-seven"
    }
    else if (sesk==8) {
      window.location.hash = "#s-eght"
    }
    else if (sesk==9) {
      window.location.hash = "#s-nine"
    }
    else {
      window.location.hash = "#s-ten"
    }
  }
}
