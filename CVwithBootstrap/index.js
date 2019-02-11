var header;
var sticky;

$(document).ready(function(){
    header = document.getElementById("myHeader");
    sticky = header.offsetTop;
});

function loadPage(eleId){
    $("#main").load(eleId+".html");
}


window.onscroll = function() {myFunction()};


function myFunction() {
    var pageOffsetY = window.pageYOffset;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}