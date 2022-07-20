var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader2").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

var urap = "https://script.google.com/macros/s/AKfycbyRFBjt5l76mEZ0dfBWoqVv4d4qhADwempGZjpZtnKF0KQRsfcyhv3v/exec";

function read_value_pic() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  $('#inm1').empty();
  $('#inm2').empty();
  $('#vid').empty();
  document.getElementById("loader_in").style.visibility = "visible";
  document.getElementById("showhtml").style.display = "block";
  var url = urap + "?action=read";
  $.getJSON(url, function(json) {
    var n;
    var news1 = JSON.parse(json.records[0].InMedia1);
    var maxMedia1 = news1.conTitle1.length;console.log(maxMedia1);
      for (var a=[],i=0;i<maxMedia1;++i) a[i]=i;
      function shuffle(array) {
        var tmp, current, top = array.length;
        if(top) while(--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
        return array;
      }
      a = shuffle(a);
      var fin;
      for(var d=0;d<a.length;d++){
        fin = a[d];
      document.getElementById("inm1").innerHTML += '<p style="color:black;" class="telenewsblock">' + news1.conTitle1[fin] + '</p><a target="_blank" class="readmore" href="' + news1.conLink1[fin] + '">' + news1.conSiteName1[fin] + '</a> <hr> ';
    }
    var m;
    var news2 = JSON.parse(json.records[0].InMedia2);
    var maxMedia2 = news2.conTitle1.length; 
    for (var a=[],i=0;i<maxMedia2;++i) a[i]=i;
    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }
    a = shuffle(a);
    var fin2;
    for(var d=0;d<a.length;d++){
      fin2 = a[d];
      document.getElementById("inm2").innerHTML += '<p style="color:black;" class="telenewsblock">' + news2.conTitle1[fin2] + '</p><a target="_blank" class="readmoren" href="' + news2.conLink1[fin2] + '">' + news2.conSiteName1[fin2] + '</a><hr> ';
    }
    var y = Math.floor((Math.random() * 3) + 1);
    var quotes = JSON.parse(json.records[0].Quote);
    for (prop in json.records[0]) {
      document.getElementById("dquote").innerHTML = '<div class="qu">' + quotes.dquoteWall[y] + '</div>';
    }
    var k, m;
    var VID = JSON.parse(json.records[0].YouVidWall);
    var k = VID.inmediamwallVid.length;
    
    for (var a=[],i=0;i<k;++i) a[i]=i;
    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }
    a = shuffle(a);
    var fin3;
    for(var d=0;d<a.length;d++){
      fin3 = a[d];
      var link = VID.inmediamwallVid[fin3];
      var vidid = link;
      document.getElementById("vid").innerHTML += '<div class="iteam"><div class="embed-responsive embed-responsive-16by9"><iframe width="100%"class="embed-responsive-item" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; autoplay ;picture-in-picture" allowfullscreen src="//www.youtube.com/embed/' + vidid + '" frameborder="0" allowfullscreen></iframe></div></div>';
    }
    $(".box").css('background-color','#6d0404');
    document.getElementById("loader_in").style.visibility = "hidden";
  });
}

$(document).ready(function() {
    $(".show").click(function() {
      $(".collap").toggle();
    });
  });

  jQuery(function($) {
    $.fn.hScroll = function(amount) {
      amount = amount || 120;
      $(this).bind("DOMMouseScroll mousewheel", function(event) {
        var oEvent = event.originalEvent,
          direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
          position = $(this).scrollLeft();
        position += direction > 0 ? -amount : amount;
        $(this).scrollLeft(position);
        event.preventDefault();
      })
    };
  });
  $(document).ready(function() {
    $('.box').hScroll(40);
    $('#showfeed').on('click',function(){
      var elem = document.getElementById('feedholder');
      if(elem.style.display != "block"){
        $('#feedholder').slideDown('slow');
      }
        else{$('#feedholder').slideUp('slow');}
    });
    $('#feedholder').on('click',function(){
        $('#feedholder').slideUp('fast');
    });
  });