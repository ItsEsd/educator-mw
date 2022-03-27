
function deltopictod(label){
  $("#showdelnote").show();
var click = 1;
document.getElementById('varvrdigit').value = click;
  var list=document.getElementsByClassName("delsttod");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('tdcid');
  var y = document.getElementsByClassName('tdkeyid');
       var todid = JSON.stringify(x[posofinput].value);
       var todkey = JSON.stringify(y[posofinput].value);
       var eduid =$('#eduid').val();
       var ur1 = "https://script.google.com/macros/s/";
       var ur2 = "AKfycbzdo5abHFtSSXazxfC8HAfo4dCQ-NsAl21DHCGJT-TQfhoBHTBcf07AMZ_rFIEWvkjZaA";
       var urlrmv = ur1+ur2+"/exec" + "?callback=removefrmlst&tdid="+todid+"&eduid="+eduid+"&action=rmvtod";
       document.getElementById('varvrdigit').value = urlrmv;
}

$('#deletetodst').click(function(click){
  document.getElementById("deletetodst").disabled = true;
  var url = $('#varvrdigit').val();
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  document.getElementById('varvrdigit').value = 0;
});  

 $('#hidedelnote').click(function(){
  $("#showdelnote").hide();
    }); 



function removefrmlst(e){
  storedtods();
  $("#showdelnote").hide();
}


strtodedu.addEventListener('submit', (event) =>{
  $('#renotitod').show();
  $('#renotitod').empty();
  document.getElementById('storetdbtnfin').disabled = true;
var tdid =JSON.stringify($('#todid').val());
var tdpass =JSON.stringify($('#todpass').val());
var tdcomnt =escape(JSON.stringify($('#todcmnt').val()));
var eduid =$('#eduid').val();
var ur1= "https://script.google.com/macros/s/";
 var ur3 ="AKfycbxg7rXgSOFW9q0OCYH3wqviTxNMAf1KPOsDyDkdC-URdZ2myYoUx18s6okzyVu2LCmu";
 var url = ur1+ur3+"/exec" + "?callback=ctrlqsttd&todid=" + tdid + "&todpass=" + tdpass + 
 "&todcmnt=" + tdcomnt + "&eduid=" + eduid + "&action=rdtod";
 var request = jQuery.ajax({
   crossDomain: true,
   url: url,
   method: "GET",
   dataType: "jsonp"
 });

});

function ctrlqsttd(e){
    document.getElementById('storetdbtnfin').disabled = false;
    storedtods();
    strtodedu.reset();
    document.getElementById("prevsttod").scrollTop = 0;
    if(e.result == "TOD not found!"){
      document.getElementById('renotitod').innerHTML="TOD not found!";
    }else if(e.result == "TOD Found!"){
      document.getElementById('renotitod').innerHTML="TOD stored!";
    }
    setTimeout(function() {
      jQuery('#renotitod').fadeOut('fast');
    }, 6000);

}

function storedtods(){
  var ur1 = "https://script.google.com/macros/s/";
 var ur2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
 var url= ur1 +ur2+ "/exec"+"?action=read";
 var email1 = $("#email").val();
 var pass = $("#pcodeEdu").val();
$.getJSON(url, function(json) {
  for (var i = 0; i < json.records.length - 1; i++) {
    if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
          
      if( json.records[i].AllTOD !=0){
        $('#prevsttod').empty();
       var allsttod = json.records[i].AllTOD;
       var singlesttod = allsttod.split("{td},");
       var lenstr = singlesttod.length;
       var st = 0;
       var srno = 1;
       for(st;st<lenstr-1;st+=3){
            document.getElementById("prevsttod").innerHTML += '<div class="storedtd"><p>TOD No. '+srno+'</p><p><span class="todcommnt">'+
            JSON.parse(singlesttod[st+2])+'</span><br><span class="todidstyl">ID: '+JSON.parse(singlesttod[st])+
            ' Key: '+JSON.parse(singlesttod[st+1])+'</span></p>'+
            '<div align="right"><button class="btn btn-warning showsttod" onclick="showtopictod(this);">View</button>'+
            '<button class="btn btn-dark delsttod" onclick="deltopictod(this);">Delete</button>'+'<input class="tdcid" style="display: none;" value="'+
            JSON.parse(singlesttod[st])+'"/><input class="tdkeyid" style="display:none;" value="'+
            JSON.parse(singlesttod[st+1])+'"/></div></div>'+
            '<hr>';
            srno = srno + 1;
       }
     
      }
      else{
        document.getElementById("prevsttod").innerHTML=`<div style="padding:40px;"> <svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg> 
        <br> <br><p>No Stored TOD</p></div>`;
      }
    }
  } 
});
}

function showtopictod(label){
  var list=document.getElementsByClassName("showsttod");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('tdcid');
  var y = document.getElementsByClassName('tdkeyid');
  document.getElementsByClassName("showsttod")[posofinput].disabled = true;
  //   var lenposition = x[v].val();
       var todid = JSON.stringify(x[posofinput].value);
       var todkey = JSON.stringify(y[posofinput].value);
   var ur1 = "https://script.google.com/macros/s/";
   var ur2 = "AKfycbzGI2GphM15BFPHN6Fow5pzs13UmZy5_AGRMkz7z3qT8tkop4l3M7JkYg";
       var url = ur1+ur2+"/exec" + "?action=readTD";
       $.getJSON(url, function(json) {
         for (var i = 0; i < json.records.length - 1; i++) {
           if (todid === json.records[i].TODidd && todkey === json.records[i].TODFood) {
            document.getElementById("preview").style.display = "block";
            var prepostpre = JSON.parse(JSON.parse(json.records[i].TODhtm));
            var inHTML = atob(prepostpre.TODContent);
            document.getElementById("previewPost").innerHTML = unescape(inHTML);
            document.getElementById("previewPostTime").innerHTML = json.records[i].TimeStamp;
            document.getElementById("previewPostId").innerHTML = "ID: " + JSON.parse(json.records[i].TODidd);
            document.getElementById("previewPostCreator").innerHTML = JSON.parse(json.records[i].TODAddmin);
            document.getElementById("avthumb").innerHTML = '<img width="60px" src="' + prepostpre.AVPic + '" style="padding:4px;">';
            document.getElementById("previewPostTitle").innerHTML = prepostpre.TODTitle;
            document.getElementById('preview').scrollTop = 0;
            document.getElementsByClassName("showsttod")[posofinput].disabled = false;  
          }         
           }       
       })     
}


function getId(url) {
  var regExpYT = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var regExpVM = /^.*(vimeo.com\/)([^#\&\?]*).*/;
  var matchYT = url.match(regExpYT);
  var matchVM = url.match(regExpVM);

  if (matchYT && matchYT[2].length == 11) {
    return "https://www.youtube.com/embed/"+matchYT[2];
  } 
  
  else if(matchVM){
    return "https://player.vimeo.com/video/"+matchVM[2];
  }
  else {
    return 'error';
  }
}

$('#backtotdbrd').click(function(){
  $('#preview').slideUp('fast');
});

$('#avthumb').click(function(){
  $('#preview').slideUp('fast');
});
