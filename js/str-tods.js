
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
            document.getElementById("prevsttod").innerHTML += '<div class="storedtd"><div class="sharebiton" title="Copy Link" onclick="crcpbitlink(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"> <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/> <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg></div><p>TOD No. '+srno+'</p><p><span class="todcommnt">'+
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

function crcpbitlink(label){
  var list=document.getElementsByClassName("sharebiton");
  list = [].slice.call(list); 
  var posofinput = list.indexOf(label);
  var x = document.getElementsByClassName('tdcid');
  var y = document.getElementsByClassName('tdkeyid');
       var tdid = window.btoa(x[posofinput].value);
       var tdkid = window.btoa(y[posofinput].value);
  var newlk = "https://tods.mastrowall.com?topictd="+tdid+"&tdkey="+tdkid+"&td=valid";
  copytodlink(newlk);
}
function copytodlink(newlk){
  var textA = document.createElement("input");
  textA.value = newlk;
  textA.select();
  textA.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textA.value);
  $('#lkcopied').slideDown('fast');
  setTimeout(function(){$('#lkcopied').slideUp('fast');},2000);
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


srcandsvex.addEventListener('submit', (event) => { 
  $('#stresultall').empty();
 var exid=$("#cpexid").val();
 var expass=JSON.stringify($("#cppass").val());
var url1 = "https://script.google.com/macros/s/";
var url2 = "AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
var url = url1+url2+"/exec"+ "?action=gentestrd";
document.getElementById('loaderback').style.display = "block";
document.getElementById('srcexambtn').disabled = true;
$.getJSON(url, function(json) { 

//console.log(json);
for (var i = 0; i < json.records.length - 1; i++) {
 if (exid === json.records[i].ExamID && expass === json.records[i].ExamPass) {
   var restren = JSON.parse(JSON.stringify(json.records[i].EnrolledStuFinal));
   var sprestren = restren.split(',');
   var lenstren = sprestren.length;

   var restr = JSON.parse(JSON.stringify(json.records[i].StuAnsFinal));
   var sprestr = restr.split('{anst},');
   var lenstr = sprestr.length;
   var ansk = JSON.parse(JSON.stringify(json.records[i].AnsSTfinal));
   var anskey = ansk.split('{qfin}",');
   var lenstrkey = anskey.length;
   //console.log(sprestr);
   for(var k =0; k<lenstr-1;k+=2){
     
     var stenid = JSON.parse(sprestr[k]);
     var res = sprestr[k+1];
     var resone = JSON.parse(res);
     var count = 0;
     for(var j=0; j<lenstrkey-1;j++){
     if(resone.qnst[j] === anskey[j].substring(1)){
     count = count+1;
     }
     else{
       count = count;
     }
     }
   for(var v=0;v<lenstren;v++){
          if(stenid == JSON.parse(sprestren[v+2])){
           var stname = sprestren[v];break;
       }
   }
   document.getElementById('loadercp').style.display = "block";
   document.getElementById('stresultall').innerHTML += "<p style='font-size:14px;color:black;text-align:left;'>("+(k+2)/2+") Enrollment ID: "+JSON.parse(sprestr[k])+"</p><br><p style='font-size:14px;color:black;'><span style='float:left;'>Name: <span style='text-transform:uppercase;color:blue;'>"+JSON.parse(stname)+"</span></span><span <span style='float:right;color:green;'>Correct Answer: <span style='font-weight:bold;'>"+ count+"</span></span></p><br><hr>"  ;   
   document.getElementById('backcp').style.display = "block";
     
   }
   
    document.getElementById('examdescpin').innerHTML ="<div><p style='text-align:left;'>Educator: "+json.records[i].EducatorName+
    "<br>Exam Title: "+json.records[i].ExamTitle+"<br>Description: "+json.records[i].ExamDescp+"<br>Duration: "+json.records[i].TDuration+"</p></div>" ;
 
    document.getElementById('srcexambtn').disabled = false;
  }
  else{
    document.getElementById('loaderback').style.display = "none";
    document.getElementById('srcexambtn').disabled = false;
  }
}
});
});

function examresultpdf() {
var elem = document.getElementById("stresultall");
var elemtw = document.getElementById("examdescpin");
var oPrntWin = window.open("", "_blank", "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
    oPrntWin.document.open();
    oPrntWin.document.write("<!doctype html><html><head><title>M A S T R O W A L L - Test Result<\/title><link rel=\"stylesheet\" href=\"vendor/style/bootstrap4.5.2.min.css\"><link rel=\"stylesheet\" href=\"style.css\"><\/head><body style=\"width:100%;padding:10px;background-color:white;\" onload=\"print();\"><div align=\"center\"><div style=\"max-width:800px;padding:10px;border:2px solid grey;\">" + elemtw.innerHTML +"<hr>"+elem.innerHTML + "<\/div><\/div><\/body><\/html>");
    oPrntWin.document.close();
}


$("#backcp").click(function(){
  document.getElementById('prevexperform').style.display = 'block';
  $('#loadercp').slideUp('fast');
});

$("#loaderback").click(function(){
  $('#loaderback').slideUp('fast');
});
document.getElementById('svexminfo').addEventListener('click',saveexaminfo);
function saveexaminfo(){
  $('#loaderback').slideDown('fast');
var edemid = $('#email').val();
var examidst = $('#cpexid').val();
var enridst1 = $('#cppass').val(); 
var examdtls = document.getElementById('examdescpin').innerHTML;
var enridst = enridst1+'{ex},'+ examdtls +'{ex}';
var ur1 = "https://script.google.com/macros/s/";
var ur2 = "AKfycbw6SaFivVhk016J_zM3mqrGleSc6WxhokhwhfkSw47PnxW-tXIAlVz23p9--mYXMov0UQ";
var url = ur1+ur2+"/exec"+ "?callback=ctrlqsvex&email="+edemid+"&checkexamid="+examidst+"&chechenid="+enridst+"&action=edsvexm";
var request = jQuery.ajax({
  crossDomain: true,
  url: url,
  method: "GET",
  dataType: "jsonp"
});
}


function ctrlqsvex(){
  $('#loaderback').slideUp('fast');
  readsaveexm();document.getElementById('prevexperform').style.display = 'block';
  $('#loadercp').slideUp('fast');
}


function readsaveexm(){
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 = "AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
  var url = ur1+ur2+"/exec"+ "?action=read";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  $.getJSON(url, function(json) {
  for (var i = 0; i < json.records.length - 1; i++) {
    if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
          
      if( json.records[i].AllExam !=0){
        $('#prevexperform').empty();
       var allsvexm = json.records[i].AllExam;
       var singlessvexm = allsvexm.split("{ex},");
       var lenstr = singlessvexm.length;
       var st = 0;
       var srno = 1;
       for(st;st<lenstr-1;st+=3){
            document.getElementById("prevexperform").innerHTML += '<div align="left" class="savevexmdiv"><div style="text-align:left"><span style="float:left">No. '+srno+'</span>'+
            '<span style="float:right;"><button class="btn btn-primary svshowexres" onclick="shoeprevexresult(this);">Check Performance</button></span></div><br>'+
            '<p style="font-size:14px;"><span style="float:left;">Exam ID: '+singlessvexm[st]+'</span><br><span style="float:left;">Exam Pass: '+singlessvexm[st+1]+'</span></p><div class="exdtlsst">'+singlessvexm[st+2]+'</div>'+
            '<input class="exidsv" style="display:none;" value="'+singlessvexm[st]+'"><input class="enidsv" value="'+singlessvexm[st+1]+'" style="display:none;"><br><hr>';
            srno = srno + 1;

       }
     
      }
    }
  }
  
  });
}


function shoeprevexresult(label){
  $("#stresultall").empty();
  document.getElementById('loaderback').style.display = "block";
  var list=document.getElementsByClassName("svshowexres");
  list = [].slice.call(list); 

  var posofinput = list.indexOf(label);

  var x = document.getElementsByClassName('exidsv');
  var y = document.getElementsByClassName('enidsv');
       var examid = x[posofinput].value;
       var enpass = JSON.stringify(y[posofinput].value);
       var url1 = "https://script.google.com/macros/s/";
       var url2 = "AKfycbxYC7rpKpnZmgpNVsmgoCu-Wi9Bt604MjkH9LaH0Gd9LA5QLtH1bjgUfvRlQGyIKCiQ";
       var url = url1+url2+"/exec"+ "?action=gentestrd";
       document.getElementById('loaderback').style.display = "block";
       $.getJSON(url, function(json) { 

        //console.log(json);
        for (var i = 0; i < json.records.length - 1; i++) {
         if (examid === json.records[i].ExamID && enpass === json.records[i].ExamPass) {
           var restren = JSON.parse(JSON.stringify(json.records[i].EnrolledStuFinal));
           var sprestren = restren.split(',');
           var lenstren = sprestren.length;
        
           var restr = JSON.parse(JSON.stringify(json.records[i].StuAnsFinal));
           var sprestr = restr.split('{anst},');
           var lenstr = sprestr.length;
           var ansk = JSON.parse(JSON.stringify(json.records[i].AnsSTfinal));
           var anskey = ansk.split('{qfin}",');
           var lenstrkey = anskey.length;
           //console.log(sprestr);
           for(var k =0; k<lenstr-1;k+=2){
             
             var stenid = JSON.parse(sprestr[k]);
             var res = sprestr[k+1];
             var resone = JSON.parse(res);
             var count = 0;
             for(var j=0; j<lenstrkey-1;j++){
             if(resone.qnst[j] === anskey[j].substring(1)){
             count = count+1;
             }
             else{
               count = count;
             }
             }
           for(var v=0;v<lenstren;v++){
                  if(stenid == JSON.parse(sprestren[v+2])){
                   var stname = sprestren[v];break;
               }
           }
           document.getElementById('loadercp').style.display = "block";
           document.getElementById('stresultall').innerHTML += "<p style='font-size:14px;color:black;text-align:left;'>("+(k+2)/2+") Enrollment ID: "+JSON.parse(sprestr[k])+"</p><br><p style='font-size:14px;color:black;'><span style='float:left;'>Name: <span style='text-transform:uppercase;color:blue;'>"+JSON.parse(stname)+"</span></span><span <span style='float:right;color:green;'>Correct Answer: <span style='font-weight:bold;'>"+ count+"</span></span></p><br><hr>"  ;   
           document.getElementById('backcp').style.display = "block";
             
           }
           
            document.getElementById('examdescpin').innerHTML ="<div><p style='text-align:left;'>Educator: "+json.records[i].EducatorName+
            "<br>Exam Title: "+json.records[i].ExamTitle+"<br>Description: "+json.records[i].ExamDescp+"<br>Duration: "+json.records[i].TDuration+"</p></div>" ;
            document.getElementById('svexminfo').style.display = "none";
           
          }
          else{
            document.getElementById('loaderback').style.display = "none";
          }
        }
        });
}