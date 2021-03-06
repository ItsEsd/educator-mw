document.getElementById("svconnect").addEventListener("click", upConnect);
var script_eduProCon1 = "https://script.google.com/macros/s/";
var script_eduProCon2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
var script_eduProCon =script_eduProCon1 + script_eduProCon2+"/exec";
function upConnect() {
  var gconnect = $("#connectivity").val();
  var email1 = $("#email").val();
  var url = script_eduProCon + "?callback=ctrlqcon&email=" + email1 + "&connectivity=" + gconnect + "&action=upconnect";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  document.getElementById("svconnect").disabled=true;
}

function ctrlqcon(){
  document.getElementById("connectUp").innerHTML = "Connectivity Updated.<br><br>";
  document.getElementById("loaderCON").style.display = "none";
  document.getElementById("svconnect").disabled=false;
  showconnect();
}

document.getElementById("editEduPro").addEventListener("click", loadPrevData);
var script_url_eduPro1 = "https://script.google.com/macros/s/";
var script_url_eduPro2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
var script_url_eduPro = script_url_eduPro1+ script_url_eduPro2+"/exec";

function loadPrevData() {
  $('#scrollEdit').show('fast');
  $('#updateNotice').empty();
  document.getElementById("loaderPro").style.display = "block";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var url = script_url_eduPro + "?action=read";
  $.getJSON(url, function(json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
        document.getElementById("profilePic").innerHTML = '<img class="proedimgup" src="' + json.records[i].ProfilePic + '">';
        document.getElementById("ppic").value = json.records[i].ProfilePic;
        document.getElementById("fname").value = json.records[i].FName;
        document.getElementById("lname").value = json.records[i].LName;
        document.getElementById("dob").value = JSON.parse(json.records[i].DOB);
        document.getElementById("emailid").value = json.records[i].Email;
        document.getElementById("countrycode").value = json.records[i].CountryCode;
        document.getElementById("phoneno").value = json.records[i].PhoneNo;
        document.getElementById("class_").value = json.records[i].Class;
        document.getElementById("board_").value = json.records[i].Board;
        document.getElementById("subject_").value = json.records[i].Subject;
        document.getElementById("exidnote").value = json.records[i].ExternalNoteId;
        document.getElementById("exidlec").value = json.records[i].ExternalLecId;
        document.getElementById("pCodeEdu").value = json.records[i].Passcode;
        document.getElementById("loaderPro").style.visibility = "hidden";
      }
    }
  });
  
}

function update_pro() {
  var script_eduPro1 = "https://script.google.com/macros/s/";
  var script_eduPro2 = "AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
  var script_eduPro = script_eduPro1+ script_eduPro2+ "/exec";
  document.getElementById("loaderPro").style.visibility = "visible";
  var a = $("#fname").val();
  var b = $("#lname").val();
  var c = JSON.stringify(($("#dob").val()));
  var d = $("#emailid").val();
  var e = $("#countrycode").val();
  var f = $("#phoneno").val();
  var g = $("#class_").val();
  var h = $("#board_").val();
  var i = $("#subject_").val();
  var j = $("#exidnote").val();
  var k = $("#exidlec").val();
  var m = $("#pCodeEdu").val();
  var o = $("#ppic").val();
  var email1 = $("#email").val();
  var url = script_eduPro + "?callback=ctrlqup&email=" + email1 + "&fname=" + a + "&lname=" + b + "&dob=" + c + "&emailid=" + d + "&countrycode=" + e + "&phoneno=" + f + "&class_=" + g + "&board_=" + h + "&subject_=" + i + "&exidnote=" + j + "&exidlec=" + k + "&pCodeEdu=" + m + "&ppic=" + o + "&action=update";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp"
  });
  document.getElementById("eduProUpdate").disabled =true;
}

function ctrlqup(e) {
  document.getElementById("loaderPro").style.visibility = "hidden";
  document.getElementById("eduProUpdate").disabled = true;
  document.getElementById("updateNotice").innerHTML = "<br>Information updated successfully<br>";
  let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", '/');
document.title = "Educator | MASTROWALL";
  deleteAllCookies();
  setTimeout(function(){ inwallEdu(),2000});
}
document.getElementById("confirmPcode").addEventListener("input", enableSave);

function enableSave() {
  if ($('#pCodeEdu').val() == $('#confirmPcode').val()) {
    document.getElementById("eduProUpdate").disabled = false;
  } else {
    document.getElementById("eduProUpdate").disabled = true;
  }
}

function inwallEdu() {
  document.body.style.pointerEvents ="none";
  allstudwait();
  allstudapprv();
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  if (email1 != 0 && pass != 0) {
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").style.visibility = "visible";
    document.getElementById("checkP").innerHTML = "";    
var pt_url1 = "https://script.google.com/macros/s/";
var pt_url2 = "AKfycbxdJvyQbxBZZhZIYVKx_tchZN3krnZp2cJ2stKNhzhrxmgkNrmmk_kpqN1Ei_DhxCEWYw";
var pt_url = pt_url1+pt_url2+"/exec";
    var url = pt_url + "?callback=ctrlqeduin&chemid=" + email1 + "&chpass=" + pass + "&action=cheduc";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });

  } else {
    return false;
  }
}

function ctrlqeduin(e){
  var res= e.records;
if(res!="ID not found!"){

  document.getElementById("signInEdu").style.display = "none";
  document.getElementById("EduDashboard").style.display = "block";
  document.getElementById("showprofileInfoEdu").innerHTML = '<div align="center"><img id="propic" src="' + res[0].ProfilePic + '"><div id="name" style="padding-top:14px;"><h5 style="margin:0px;">' + res[0].Subject + ' </h5></div><p style="font-size:18px;margin:0px;">' + res[0].Class + ' (' + res[0].Board + ') </p><h4 style="margin:0px;color:#48485c;">' + res[0].FName + ' ' + res[0].LName + ' </h4><span class="geninfoid">&#8226; ID: '+res[0].CardId+' '+'&#8226; Email: '+res[0].Email+'</span></div>';
 if(res[0].ExternalNoteId !=0){
  document.getElementById("notes").innerHTML = '<a style="color:black;text-decoration:none;"target="_blank" href="' + res[0].ExternalNoteId + '"> <img class="dashiconimg" src="images/nlimg.png"><svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/></svg> Notes</button></a>';
 }
 else{
  document.getElementById("notes").innerHTML = '<a style="color:black;text-decoration:none;" class="noextlink" onclick="noextlink(this);"> <img class="dashiconimg" src="images/nlimg.png"><svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/></svg> Notes</button></a>';
 }
 if( res[0].ExternalLecId !=0){
  document.getElementById("lecture").innerHTML = '<a style="color:black;text-decoration:none;"target="_blank" href="' + res[0].ExternalLecId + '"> <img class="dashiconimg" src="images/vdimg.png"><svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-file-play" viewBox="0 0 16 16"> <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/></svg> Lectures</a>';
 }else{
  document.getElementById("lecture").innerHTML = '<a style="color:black;text-decoration:none;" class="noextlink" onclick="noextlink(this);"> <img class="dashiconimg" src="images/vdimg.png"><svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-file-play" viewBox="0 0 16 16"> <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/></svg> Lectures</a>';
 }

  document.getElementById("golive").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  class="svgicondash" fill="currentColor" class="bi bi-easel" viewBox="0 0 16 16"><path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z"/></svg> Classroom';
  document.getElementById("tod").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-chat-right-text" viewBox="0 0 16 16"> <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/> <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/></svg> Topic of The Day';
  document.getElementById("eduid").value= res[0].CardId;

  
 if( res[0].AllTOD !=0){
  $('#prevsttod').empty();
 var allsttod = res[0].AllTOD;
 var singlesttod = allsttod.split("{td},");
 var lenstr = singlesttod.length;
 var st = 0;
 var srno = 1;
 for(st;st<lenstr-1;st+=3){
      document.getElementById("prevsttod").innerHTML += '<div class="storedtd"><p>TOD No. '+srno+'</p><p><span class="todcommnt">'+JSON.parse(singlesttod[st+2])+'</span><br><span class="todidstyl">ID: '+JSON.parse(singlesttod[st])+' Key: '+JSON.parse(singlesttod[st+1])+'</span></p>'+
      '<div align="right"><button onclick="showtopictod(this);" class="btn btn-warning showsttod">View</button>'+'<button class="btn btn-dark delsttod" onclick="deltopictod(this);">Delete</button>'+'<input class="tdcid" style="display: none;" value="'+
      JSON.parse(singlesttod[st])+'"/><input class="tdkeyid" style="display:none;" value="'+
      JSON.parse(singlesttod[st+1])+'"/></div></div><hr>';
      srno = srno + 1;
 }

}
document.body.style.pointerEvents ="auto";
  document.getElementById("loader").style.visibility = "hidden";
//   document.getElementById("prepost").style.display = "none";
  document.getElementById("loader").style.display = "none";
//  live_tod();
var fname = res[0].FName;
var lname = res[0].LName;
var name = fname.toLowerCase()+'-'+lname.toLowerCase();
var shname = name.split(" ").join("-");
let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", shname);
document.title = res[0].FName + ' ' + res[0].LName +" | MASTROWALL";
ewfSetCookie(14);
}
else{

  document.body.style.pointerEvents ="auto";
  document.getElementById("checkP").innerHTML = "User email and password not found.";
  document.getElementById("loader").style.visibility = "hidden";
  document.getElementById("loader").style.display = "none";
}
}

document.getElementById("tod").addEventListener("click", live_tod);

function live_tod() {
  document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
document.getElementById("updateTOD").style.pointerEvents ="auto";
document.getElementById("LiveTOD").style.pointerEvents ="auto";
  $('#TODdash').show('fast');
  $('#LiveTOD').empty();
  $('#updateTOD').hide();
  document.getElementById("loaderTOD").style.display = "block";
  document.getElementById("updatePro").style.display = "none";
  document.getElementById("goconnect").style.display = "none";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var url = script_url + "?action=read";
  $.getJSON(url, function(json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (email1 == json.records[i].Email && pass == json.records[i].Passcode && json.records[i].TOD != "") {
        $('#updateTOD').show('fast');
        var TOD = unescape(json.records[i].TOD);
        var singlest = TOD.split("{td},");
        var lenstr = singlest.length;
        document.getElementById("LiveTOD").style.display = "block";
        for (var w=0; w<lenstr-1;w++) {
     //     var j = 0;
          document.getElementById("LiveTOD").innerHTML += '<div class="wrapTOD"><div class="card">'+
          '<img class="card-img-top" src="' + singlest[w+3] + '"><div class="card-body"><h4>' + singlest[w+1] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + singlest[w+2] + '</p></div> </div><div class="notifyotcontain"><span class="rmvtopictd" onclick="notifyrmvtd(this);">Remove<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>'+
          '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></span></div></div><input class="topictdid" style="display: none;" value="'+singlest[w] +'"><br><hr style="width:90%;max-width:600px;"><br>';
           w= w+3;
        //  var maxTOD = TOD.title.length;
       /*   var wrapperTOD = $(".wrapTOD");
          var add_buttonTOD = $(".add_button_TOD");
          $(add_buttonTOD).on("click", function(e) {
            e.preventDefault();
            if (j < maxTOD) {
              j++;
              $(wrapperTOD).append('<br><div class="wrapTOD"><div class="card"> <img class="card-img-top" src="' + TOD.thumb_ref[j] + '"><div class="card-body"><h4>' + TOD.title[j] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + TOD.brief_topic[j] + '</p></div> </div></div>');
            }
            if (j == maxTOD - 1) {
              $(".add_button_TOD").hide();
            }
          });*/
          document.getElementById("loaderTOD").style.display = "none";
        }
      }
      else if(email1 == json.records[i].Email && pass == json.records[i].Passcode && json.records[i].TOD == ""){
        document.getElementById("updateTOD").style.display = "block";
        document.getElementById("LiveTOD").style.display = "block";
        document.getElementById("LiveTOD").innerHTML ='<div class="nocontenttod"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">'+
        '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
        '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>'+
        '<br><h5 style="color:#474749;font-size:16px;">No Content</h5></div>';
        document.getElementById("loaderTOD").style.display = "none";

      }
    }
  });
  document.getElementById("uptday").disabled = false;
}

function ProTOD() {
 
  var tdtitle = $("#ttdtitle").val();
  var tdbrief = $("#tbrief").val();
  var tdthumb = $("#tthumb").val();
  if(tdthumb != 0 && tdbrief != 0 && tdthumb != 0){
  document.getElementById("previewTOD").innerHTML = '<div class="wrapTODPre"><div class="card" style="border:1px solid black;"> <img class="card-img-top" src="' + tdthumb + '"><div class="card-body"><h4>' + tdtitle + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + tdbrief+ '</p></div> </div></div>';
  document.getElementById('previewt').disabled = false;limitchar();
  }
  else{
    document.getElementById('previewt').disabled = true;
  }

}

function openTOD() {
  var x = document.getElementById("updateTOD");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showServices() {
  document.getElementById("showServiceEdu").style.display = "block";
  document.getElementById("showprofileInfoEdu").style.display = "block";
  document.getElementById("updateTOD").style.display = "none";
}

function reset_editor() {
  document.getElementById("text_editor").reset();
 // document.getElementById("prepost").style.display = "none";
}

document.getElementById("editEduPro").addEventListener("click", updateEduPro);

function updateEduPro() {
  document.getElementById("updatePro").style.display = "block";
  document.getElementById("goconnect").style.display = "none";
}

$('form input[id="emailid"]').blur(function() {
  var email = $(this).val();
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
  if (re.test(email)) {
    $('.msg').hide();
  } else {
    $('.msg').hide();
    $('.error').show('fast');
  }
});

$(document).ready(function() {
  $("#editEduPro").click(function() {
    $(".allHide").hide();
    $("#updatePro").show('fast');
    $('#connectivityedu').hide();
  });
});


$(document).ready(function() {
  var max_fi = 10;
  var wrap = $(".goconnect");
  var add_btn = $(".addmoreConnect");
  var k = 2;
  $(add_btn).on("click", function(e) {
    e.preventDefault();
    if (k < max_fi) {
      k++;
      $(wrap).append(`<div class="golive form-group" style="margin-bottom:16px; width:340px;margin-left:4px;margin-right:12px;"> <input class="form-control addconnect" type="url" style="width:120px; height:40px; display:inline-block;" placeholder="Link url" name="idConnect" required><select id="exidother" name="Connect" style=" display:inline-block;width:140px; height:40px;margin-left:6px;"><option value="../images/edconnect/linkedin.webp">Linkedin</option> <option value="../images/edconnect/facebook.webp">Facebook</option> <option value="../images/edconnect/whatsapp.webp">WhatsApp</option> <option value="../images/edconnect/gduo.webp">Google Duo</option> <option value="../images/edconnect/skype.webp">Skype</option> <option value="../images/edconnect/ytube.webp">YouTube</option> <option value="../images/edconnect/vimeo.webp">Vimeo</option><option value="../images/edconnect/zoom.webp">Zoom</option><option value="../images/edconnect/teams.webp">Microsoft Teams</option><option value="../images/edconnect/gmeet.webp">Google Meet</option> <option value="../images/connectlinks.png">Social & Other</option>  </select> <button class="addmoreConnect btn-danger remove_field" style="width:40px; height:40px;margin-left:6px;background-color:#cc6600;color:white;border:none; border-radius:6px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button> </div>`);
    }
  });
  $(wrap).on("click", ".remove_field", function(e) {
    e.preventDefault();
    $(this).parent('div').remove();
    $(".addmoreConnect").show('fast');
    k--;
    if (k == 1) {
      $(".golive").hide();
    }
  })
});


$('#confirmPcode').on('keyup', function() {
  if ($('#pCodeEdu').val() == $('#confirmPcode').val()) {
    $('#message').html('Matching').css('font-size', '12px');
  } else $('#message').html('Not Matching').css('font-size', '12px');
});


$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};
$(function() {
  $('form[name="eduProConnect"]').submit(function() {
    document.getElementById("connectivity").value = JSON.stringify($('form[name="eduProConnect"]').serializeObject());
    document.getElementById("nxt").style.display = "none";
    document.getElementById("sv").style.display = "block";
    document.getElementsByClassName("addmoreConnect")[0].disabled = false;
    document.getElementsByClassName("addmoreConnect")[1].disabled = false;
    return false;
  });
});


document.getElementById("golive").addEventListener("click", openConnect);

function openConnect() {
  $('#TODdash').hide();
  $('#connectivityedu').show('fast');
  document.getElementById("goconnect").style.display = "block";
  document.getElementById("nxt").style.display = "block";
  document.getElementById("sv").style.display = "none";
  document.getElementById("updatePro").style.display = "none";
  document.getElementById("LiveTOD").style.display = "none";
  document.getElementById("updateTOD").style.display = "none";
  showconnect();
}


var script_url1 = "https://script.google.com/macros/s/";
var script_url2 = "AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
var script_url = script_url1+script_url2+"/exec";

function showconnect() {
  document.getElementById("loaderCON").style.display = "block";
  document.getElementById("nxt").style.display = "block";
  document.getElementById("sv").style.display = "none";
  $("#connect1").empty();
  $("#connect2").empty();$("#connectUp").empty();
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var url = script_url + "?action=read";
  $.getJSON(url, function(json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (email1 == json.records[i].Email && pass == json.records[i].Passcode && json.records[i].Connectivity != "" ) {
        var Go = JSON.parse(json.records[i].Connectivity);
        for (var prop in Go.idConnect) {
          var j = 0;
          var totalConnect = Go.idConnect.length;
          document.getElementById("loaderCON").style.display = "none";
          document.getElementById("connect1").innerHTML = '<a href="tel:' + Go.idConnect[0] + '"><img class="connectIcon" src="' + Go.Connect[0] + '"></a><a href="mailto:' + Go.idConnect[1] + '"><img class="connectIcon" src="' + Go.Connect[1] + '"></a>';
        }
        for (j = 2; j < totalConnect; j++) {
          document.getElementById("connect2").innerHTML += '<a target="_blank" href="' + Go.idConnect[j] + '"><img class="connectIcon" src="' + Go.Connect[j] + '"></a>';
          document.getElementById("loaderCON").style.display = "none";
        }
      }
      else if(email1 == json.records[i].Email && pass == json.records[i].Passcode && json.records[i].Connectivity == "") {
       
        document.getElementById("connect1").innerHTML ='Update Connectivity';
        document.getElementById("loaderCON").style.display = "none";
      }
    }
  });
}

$(function() {
  $('.proThumb').on("click", function() {
    var z = document.getElementById("ppic").value;
    document.getElementById("profilePic").innerHTML = '<img width="140px" src="' + z + '">';
  });
});


function showavatarBrd() {
  var x = document.getElementById("avatarBrd");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



$('#editEduPro').click(function(){
  $('#TODdash').hide();
document.body.scrollTop = 460;
document.documentElement.scrollTop = 460;
}) ;   

function showclroom(){
$('#educlassroom').show('fast');

}

function opensframe(){
  $("#fmcontainers").show('fast');

  
}

function openlframe(){
  $("#fmcontainert").show('fast');
 
}
$('.closefw').on('click',function(){
  $('.fullwidth').hide();
});

$('.closefwtwo').on('click',function(){
  $('.fwidthtwo').hide();
});


function noextlink(){
  $('#noextlinkdiv').show('fast');
  setTimeout(function() {
    jQuery('#noextlinkdiv').fadeOut('fast');
  }, 6000);
}

 function limitchar() {
  var tdtitle = $("#ttdtitle").val();
  var tdbrief = $("#tbrief").val();
  var tdthumb = $("#tthumb").val();
  var randno = Math.random().toString(26).substring(2, 5) + Math.random().toString(26).substring(2, 5);
   var valuee =randno+"{td},"+ tdtitle+"{td},"+tdbrief+"{td},"+tdthumb;
   document.getElementById("json_tod").value = escape(valuee);
  var str = String(valuee);
  var len = str.length;
  if (len >= 5000) {
    document.getElementById("CharExcd").style.display = "block";
    document.getElementById("uptday").disabled = true;
document.getElementById('previewt').disabled = true;
  } else {
    document.getElementById("CharExcd").style.display = "none";
    document.getElementById("uptday").disabled = false;
  }
}

$('#resetuptopic').click(function(){
  text_editor.reset();
  document.getElementById('previewt').disabled = true;
  document.getElementById("uptday").disabled = false;
  document.getElementById("todconedit").innerHTML = ` <p onclick="document.getElementById('todconedit').innerHTML='';" style="height:200px;">Topic briefing..</p>`;
});
  

text_editor.addEventListener('submit', (event) => {
 // document.getElementById("updateTOD").style.pointerEvents ="none";
 document.getElementById("uptday").disabled = true;
  updatetopicday();
});



function updatetopicday(){
  var pt_url11 = "https://script.google.com/macros/s/";
var pt_url22 = "AKfycbwsg7R9ZKP-Xw5E95ZReGDtt7hm-vmVq1R-5nO0BGojEBqAbcm70RWV54fDnLAx3H6O1Q";
var pt_url = pt_url11 + pt_url22 +"/exec";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var data = $("#json_tod").val();
  var url = pt_url + "?callback=ctrlqaddtod&email=" + email1 + "&pcodeEdu=" + pass + "&json_tod=" + data + "&action=uptopicday";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url,
    method: "POST",
    dataType: "jsonp"
  }); 

  //setTimeout( function(){live_tod();},2000);
}

function ctrlqaddtod(e){
  var res = e.result;
if(res =="Value updated successfully!"){ 
document.getElementById("uptday").disabled = false;
document.getElementById('previewt').disabled = true;
document.getElementById("updateTOD").style.pointerEvents ="auto";
document.getElementById("text_editor").reset();
document.getElementById("todconedit").innerHTML = ` <p onclick="document.getElementById('todconedit').innerHTML='';" style="height:200px;">Topic briefing..</p>`;
live_tod();}
else{
  document.getElementById("uptday").disabled = false;
document.getElementById('previewt').disabled = true;
document.getElementById("updateTOD").style.pointerEvents ="auto";

}
 
 
}

function notifyrmvtd(label){
  document.getElementById("LiveTOD").style.pointerEvents ="none";
  var list=document.getElementsByClassName("rmvtopictd");
  list = [].slice.call(list); 
  var posoftd = list.indexOf(label);
  var x = document.getElementsByClassName('topictdid');
       var rmtdid = x[posoftd].value;
       document.getElementById('tdtopicidrmv').value= rmtdid;
       document.getElementById('posinthumb').value= posoftd;

 var eduid =$("#eduid").val();
 var pass = $("#pcodeEdu").val();
 var tdrmvid =$("#tdtopicidrmv").val();
 var ur1= "https://script.google.com/macros/s/";
 var ur3 ="AKfycbwsg7R9ZKP-Xw5E95ZReGDtt7hm-vmVq1R-5nO0BGojEBqAbcm70RWV54fDnLAx3H6O1Q";
 var urlstside = ur1+ur3+"/exec" + "?callback=ctrlqtdrmvd&eduid=" + eduid +"&pcodeEdu=" + pass + "&tdtopicidrmv=" + tdrmvid + "&action=rmvtopicid";
 var request = jQuery.ajax({
   crossDomain: true,
   url: urlstside,
   method: "GET",
   dataType: "jsonp"
 });

}

function ctrlqtdrmvd(e){
  document.getElementById("LiveTOD").style.pointerEvents ="auto";
  live_tod();

}


document.getElementById("insthttp").addEventListener("input", embed_vid);

function embed_vid() {
  document.getElementById("previewvid").style.display = "block";
  var link = document.getElementById("crVideo").value;
  var myId = getId(link);
  if (link != '' && link != 'http://') {
    document.getElementById("previewvid").innerHTML = '<iframe class="youvidF" src="' + myId + '" frameborder="0" allowfullscreen="true"></iframe>';
   
  } else {
    return false;
  }
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

function insert_vid(){
  var tbriefmod = document.getElementById('tbrief').value;
  var link = document.getElementById("crVideo").value;
  var myId = getId(link);
  var tbrf = tbriefmod + '<iframe class="youvidF" src="' + myId + '" frameborder="0" allowfullscreen="true"></iframe>'
  document.getElementById("tbrief").value = tbrf;
  document.getElementById("todconedit").innerHTML = tbrf;
}

var input = document.getElementById("tbrief");
input.addEventListener("keyup", function(event) {
  var tbriefmod = document.getElementById('tbrief').value;
  if (event.keyCode === 13) {
   event.preventDefault();
   var tbrf = tbriefmod + "<br/>"
   document.getElementById("tbrief").value = tbrf;
  }
});

$('#todconedit').on('input',function(event){
var tdvalue = document.getElementById('todconedit').innerHTML;
document.getElementById('tbrief').value = tdvalue;
if(tdvalue ==""){
  event.preventDefault();
  document.getElementById('nocontent').style.display='block';
  document.getElementById('nocontent').innerHTML='Please add topic briefing';
}
else{
  ProTOD();limitchar();
  document.getElementById('nocontent').style.display='none';
}

})