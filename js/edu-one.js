/* M A S T R O W A L L */
document.getElementById("svconnect").addEventListener("click", upConnect);
var script_eduProCon1 = "https://script.google.com/macros/s/";
var script_eduProCon2 ="AKfycbzzs9VY3btS5x_fN13iyKrf7ClYGzOwZorkXu-bGrY3WZzTiRdFW-dIANlpwImr9kZroA";
var script_eduProCon =script_eduProCon1 + script_eduProCon2+"/exec";
function upConnect() {
  var gconnect = $("#connectivity").val();
  var email1 = $("#email").val();
  var pcon = $("#pcodeEdu").val();
  var url = script_eduProCon + "?callback=ctrlqcon&email=" + email1 + "&pcon="+pcon+"&connectivity=" + gconnect + "&action=upconnect";
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
var aseduPro1 = "https://script.google.com/macros/s/";
var aseduPro2 = "AKfycbwdJsH-RYY4k-w4M2bcXjtDS39OpC2qymDs_uxy1pyKpI_XQFSbJ21GVemavhcQTLazvQ";
var aseduPro = aseduPro1+ aseduPro2+"/exec";

function loadPrevData() {
  $('#scrollEdit').slideDown('fast');
  $('#updateNotice').empty();
  document.getElementById("loaderPro").style.display = "block";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var urled = aseduPro + "?callback=ldpredata&chemid=" + email1 + "&chpass=" + pass + "&action=cheduc";
  var request = $.ajax({
    crossDomain: true,
    url: urled,
    method: "GET",
    dataType: "jsonp"
  });  
}

function ldpredata(e){
  var reslt= e.records;
  if(reslt!="ID not found!"){
    document.getElementById("profilePic").innerHTML = '<img class="proedimgup" src="' + reslt[0].ProfilePic + '">';
    document.getElementById("ppic").value = reslt[0].ProfilePic;
    document.getElementById("fname").value = reslt[0].FName;
    document.getElementById("lname").value = reslt[0].LName;
    document.getElementById("dob").value = JSON.parse(reslt[0].DOB);
    document.getElementById("emailid").value = reslt[0].Email;
    document.getElementById("countrycode").value = reslt[0].CountryCode;
    document.getElementById("phoneno").value = reslt[0].PhoneNo;
    document.getElementById("class_").value = reslt[0].Class;
    document.getElementById("board_").value = reslt[0].Board;
    document.getElementById("subject_").value = reslt[0].Subject;
    document.getElementById("exidnote").value = reslt[0].ExternalNoteId;
    document.getElementById("exidlec").value = reslt[0].ExternalLecId;
    document.getElementById("pCodeEduPro").value = reslt[0].Passcode;
    document.getElementById("loaderPro").style.visibility = "hidden";
  }
}

function update_pro() {
  var script_eduPro1 = "https://script.google.com/macros/s/";
  var script_eduPro2 = "AKfycbzzs9VY3btS5x_fN13iyKrf7ClYGzOwZorkXu-bGrY3WZzTiRdFW-dIANlpwImr9kZroA";
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
  var m = $("#pCodeEduPro").val();
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
  setTimeout(function(){location.reload();},2000);
}
document.getElementById("confirmPcode").addEventListener("input", enableSave);

function enableSave() {
  var diffpass = $('#pCodeEduPro').val()
  if ( diffpass== $('#confirmPcode').val()) {
    document.getElementById("eduProUpdate").disabled = false;
  } else {
    document.getElementById("eduProUpdate").disabled = true;
  }
}
document.getElementById('df').addEventListener('submit',inwallEdu);
function inwallEdu() {
  document.body.style.pointerEvents ="none";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  allstudwait(); allstudapprv();readsaveexm();
  if (email1 != 0 && pass != 0) {
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader").style.visibility = "visible";
    document.getElementById("checkP").innerHTML = "";    
var pt_url1 = "https://script.google.com/macros/s/";
var pt_url2 = "AKfycbwdJsH-RYY4k-w4M2bcXjtDS39OpC2qymDs_uxy1pyKpI_XQFSbJ21GVemavhcQTLazvQ";
var pt_url = pt_url1+pt_url2+"/exec";
    var urled = pt_url + "?callback=ctrlqeduin&chemid=" + email1 + "&chpass=" + pass + "&action=cheduc";
    var request = $.ajax({
      crossDomain: true,
      url: urled,
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
  onstartswitch();
  document.getElementById("signInEdu").style.display = "none";
  document.getElementById("EduDashboard").style.display = "block";
  document.getElementById("showprofileInfoEdu").innerHTML = '<div align="center"><img id="propic" src="' + res[0].ProfilePic + '"><div id="name" style="padding-top:14px;"><h5 style="margin:0px;">' + res[0].Subject + ' </h5></div><p style="font-size:18px;margin:0px;">' + res[0].Class + ' (' + res[0].Board + ') </p><h4 style="margin:0px;color:#48485c;" id="mednam">' + res[0].FName + ' ' + res[0].LName + ' </h4><span class="geninfoid">&#8226; ID: '+res[0].CardId+' '+'&#8226; Email: '+res[0].Email+'</span></div>';
  if(res[0].ExternalNoteId !=0){
  document.getElementById("notes").innerHTML = '<a style="color:black;text-decoration:none;"target="_blank" href="' + res[0].ExternalNoteId + '"><div><img class="dashiconimg" src="images/nlimg.png"><svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/></svg> Notes</div></a>';
 }
 else{
  document.getElementById("notes").innerHTML = '<a style="color:black;text-decoration:none;" class="noextlink" onclick="noextlink(this);"><div><img class="dashiconimg" src="images/nlimg.png"><svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/></svg> Notes</div></a>';
 }
 if( res[0].ExternalLecId !=0){
  document.getElementById("lecture").innerHTML = '<a style="color:black;text-decoration:none;"target="_blank" href="' + res[0].ExternalLecId + '"><div><img class="dashiconimg" src="images/vdimg.png"><svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-file-play" viewBox="0 0 16 16"> <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/></svg> Lectures</div></a>';
 }else{
  document.getElementById("lecture").innerHTML = '<a style="color:black;text-decoration:none;" class="noextlink" onclick="noextlink(this);"><div><img class="dashiconimg" src="images/vdimg.png"><svg xmlns="http://www.w3.org/2000/svg" class="svgicondash" fill="currentColor" class="bi bi-file-play" viewBox="0 0 16 16"> <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"/> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/></svg> Lectures</div></a>';
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
      document.getElementById("prevsttod").innerHTML += '<div class="storedtd"><div class="sharebiton" title="Copy Link" onclick="crcpbitlink(this)"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"> <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/> <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></svg></div><p>TOD No. '+srno+'</p><p><span class="todcommnt">'+JSON.parse(singlesttod[st+2])+'</span><br><span class="todidstyl">ID: '+JSON.parse(singlesttod[st])+' Key: '+JSON.parse(singlesttod[st+1])+'</span></p>'+
      '<div align="right"><button onclick="showtopictod(this);" class="btn btn-warning showsttod">View</button>'+'<button class="btn btn-dark delsttod" onclick="deltopictod(this);">Delete</button>'+'<input class="tdcid" style="display: none;" value="'+
      JSON.parse(singlesttod[st])+'"/><input class="tdkeyid" style="display:none;" value="'+
      JSON.parse(singlesttod[st+1])+'"/></div></div><hr>';
      srno = srno + 1;
 }}

if(res[0].TOD!=""){
  var TOD = unescape(res[0].TOD);
  var singlest = TOD.split("{td},");
  var lenstr = singlest.length;
  document.getElementById("LiveTOD").style.display = "block";
  for (var w=0; w<lenstr-1;w++) {
    document.getElementById("LiveTOD").innerHTML += '<div class="wrapTOD"><div class="card">'+
    '<img class="card-img-top" src="' + singlest[w+3] + '"><div class="card-body"><h4>' + singlest[w+1] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + singlest[w+2] + '</p></div> </div><div class="notifyotcontain"><span class="rmvtopictd" onclick="notifyrmvtd(this);">Remove<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>'+
    '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></span></div></div><input class="topictdid" style="display: none;" value="'+singlest[w] +'"><br><hr style="width:90%;max-width:600px;"><br>';
     w= w+3;
  }
}
rfshcmnt();
var preevn = res[0].CalendarTODO;
document.getElementById('allsvevnt').value =preevn;
getcalendar();
document.body.style.pointerEvents ="auto";
  document.getElementById("loader").style.visibility = "hidden";
  document.getElementById("loader").style.display = "none";
var fname = res[0].FName;
var lname = res[0].LName;
var cardn = res[0].CardId;
var name = fname.toLowerCase()+'-'+lname.toLowerCase()+'?ed='+btoa(cardn)+'#true';
var shname = name.split(" ").join("-");
let stateObj = { id: "0" };
 window.history.replaceState(stateObj,
       "", shname);
document.title = res[0].FName + ' ' + res[0].LName +" | MASTROWALL";
ewfSetCookie(14);
$('#canved').empty();
document.getElementById('canved').innerHTML = "<div class='edcrdinf'><div class='infone'>"+
"<img src='"+res[0].ProfilePic+"'/><div><h4>EDUCATOR</h4><hr><p class='pinone'>"+fname+" "+lname+"</p><p class='pintwo'>"+res[0].Subject+" | "+res[0].Class+" | "+res[0].Board+
"</p></div><span class='spincrd'>mastrowall.com</span></div><div class='inftwo'>Contact: +"+res[0].CountryCode+" "+res[0].PhoneNo+" | "+res[0].Email+"</div><hr></div>"
var acstr = res[0].SubValue; 
  if(acstr !=''){
    var acst = JSON.parse(res[0].SubValue); 
  document.getElementById('accntstat').innerHTML = acst.status[0];
  document.getElementById('accntstart').innerHTML = acst.status[1];
  document.getElementById('accntend').innerHTML = acst.status[2];
  var endtim = acst.status[2];
  var entmstr = endtim.split(" ");
  var dt = entmstr[1]+"-"+entmstr[2]+"-"+entmstr[4]; var d =new Date(dt);
  var day= d.getDate(); var mnth = d.getMonth(); var year = d.getFullYear();
  ckeckactvst(day,mnth,year);
 }
 else{
  document.getElementById('accntstat').innerHTML = "TRIAL";
  var sttm = res[0].Timestamp;
  var sttmstr = sttm.split(" ");
  var dt = sttmstr[1]+"-"+sttmstr[2]+"-"+sttmstr[4];
  var d = new Date(dt); 
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  d.setDate(d.getDate() + 7);
  var endTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
  var day= d.getDate(); var mnth = d.getMonth(); var year = d.getFullYear();
  document.getElementById('accntstart').innerHTML = sttm;
  document.getElementById('accntend').innerHTML = endTime;
  ckeckactvst(day,mnth,year);
 }
}
else{
  document.body.style.pointerEvents ="auto";
  document.getElementById("checkP").innerHTML = "User email and password not found.";
  document.getElementById("loader").style.visibility = "hidden";
  document.getElementById("loader").style.display = "none";
}
}
function ckeckactvst(dy,mn,yr){
  var d = new Date();
  var tdy = d.getDate();
  var tmnth = d.getMonth();
  var tyr = d.getFullYear();
  if(tyr==yr){
    if(tmnth>mn){
      deleteAllCookies(); $('#notifypay').fadeIn();
    }
    else if(tmnth==mn){
        if(tdy>dy){
          deleteAllCookies(); $('#notifypay').fadeIn();
        }
    }
  }
}
function live_tod() {
document.getElementById("updateTOD").style.pointerEvents ="auto";
document.getElementById("LiveTOD").style.pointerEvents ="auto";
  $('#TODdash').slideDown('fast');
  $('#LiveTOD').empty();
  document.getElementById("loaderTOD").style.display = "block";
  document.getElementById("updatePro").style.display = "none";
  document.getElementById("goconnect").style.display = "none";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var urltd = aseduPro +  "?callback=ldlivetd&chemid=" + email1 + "&chpass=" + pass + "&action=cheduc";
  var request = $.ajax({
    crossDomain: true,
    url: urltd,
    method: "GET",
    dataType: "jsonp"
  });  
}

function ldlivetd(e){
  var reslt= e.records;
  if(reslt!="ID not found!"){
    if (reslt[0].TOD != "") {
      var TOD = unescape(reslt[0].TOD);
      var singlest = TOD.split("{td},");
      var lenstr = singlest.length;
      document.getElementById("LiveTOD").style.display = "block";
      for (var w=0; w<lenstr-1;w++) {
        document.getElementById("LiveTOD").innerHTML += '<div class="wrapTOD"><div class="card">'+
        '<img class="card-img-top" src="' + singlest[w+3] + '"><div class="card-body"><h4>' + singlest[w+1] + '</h4></div> <div class="card-footer" style="text-align:left;"><p>' + singlest[w+2] + '</p></div> </div><div class="notifyotcontain"><span class="rmvtopictd" onclick="notifyrmvtd(this);">Remove<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>'+
        '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg></span></div></div><input class="topictdid" style="display: none;" value="'+singlest[w] +'"><br><hr style="width:90%;max-width:600px;"><br>';
         w= w+3;
        document.getElementById("loaderTOD").style.display = "none";
      }
    }
    else if(reslt[0].TOD == ""){
      document.getElementById("updateTOD").style.display = "block";
      document.getElementById("LiveTOD").style.display = "block";
      document.getElementById("LiveTOD").innerHTML ='<div class="nocontenttod"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">'+
      '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>'+
      '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>'+
      '<br><h5 style="color:#474749;font-size:16px;">No Content</h5></div>';
      document.getElementById("loaderTOD").style.display = "none";

    }
  }
  document.getElementById('TODdash').scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
  }}

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
}


$('form input[id="emailid"]').blur(function() {
  var email = $(this).val();
  var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
  if (re.test(email)) {
    $('.msg').slideUp('fast');
  } else {
    $('.msg').slideUp('fast');
    $('.error').slideDown('fast');
  }
});

$(document).ready(function() {
  $("#editEduPro").click(function() {
    $(".allHide").slideUp('fast');
    $("#updatePro").slideDown('fast');
    // $('#connectivityedu').slideUp('fast');
  });
});
$(document).ready(function() {
  $("#editpronotebtn").click(function() {
    loadPrevData();document.getElementById("updatePro").style.display = "block";
    $("#updatePro").slideDown('fast'); $("#noextlinkdiv").hide();
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
      $(wrap).append(`<div class="golive form-group" style="margin-bottom:16px; width:340px;margin-left:4px;margin-right:12px;"> <input class="form-control addconnect" type="url" style="width:120px; height:40px; display:inline-block;" placeholder="Link url" name="idConnect" required><select id="exidother" name="Connect" style=" display:inline-block;width:140px; height:40px;margin-left:6px;"><option value="../images/edconnect/teams.webp">Microsoft Teams</option><option value="../images/edconnect/gmeet.webp">Google Meet</option> <option value="../images/edconnect/linkedin.webp">Linkedin</option> <option value="../images/edconnect/facebook.webp">Facebook</option> <option value="../images/edconnect/whatsapp.webp">WhatsApp</option> <option value="../images/edconnect/gduo.webp">Google Duo</option> <option value="../images/edconnect/skype.webp">Skype</option> <option value="../images/edconnect/ytube.webp">YouTube</option> <option value="../images/edconnect/vimeo.webp">Vimeo</option><option value="../images/edconnect/zoom.webp">Zoom</option><option value="../images/connectlinks.png">Social & Other</option>  </select> <button class="btn-dark remove_field"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg></button> </div>`);
    }
  });
  $(wrap).on("click", ".remove_field", function(e) {
    e.preventDefault();
    $(this).parent('div').remove();
    $(".addmoreConnect").slideDown('fast');
    k--;
    if (k == 1) {
      $(".golive").slideUp('fast');
    }
  })
});


$('#confirmPcode').on('keyup', function() {
  if ($('#pCodeEduPro').val() == $('#confirmPcode').val()) {
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
    document.getElementById("connectivity").value = escape(JSON.stringify($('form[name="eduProConnect"]').serializeObject()));
    return false;
  });
});
connectup.addEventListener('submit',(event)=>{
  document.getElementById("nxt").style.display = "none";
  document.getElementById("sv").style.display = "block";
$('.remove_field').prop('disabled',true);
});

function openConnect() {
  $('#TODdash').slideUp('fast');
  $('#connectivityedu').slideDown('fast');
  document.getElementById("goconnect").style.display = "block";
  document.getElementById("nxt").style.display = "block";
  document.getElementById("sv").style.display = "none";
  document.getElementById("updatePro").style.display = "none";
  document.getElementById("LiveTOD").style.display = "none";
  document.getElementById("updateTOD").style.display = "none";
  showconnect();
}

function showconnect() {
  document.getElementById("loaderCON").style.display = "block";
  document.getElementById("nxt").style.display = "block";
  document.getElementById("sv").style.display = "none";
  $('.remove_field').prop('disabled',false);
  document.getElementById("svconnect").disabled=false;
  $("#connect1").empty();
  $("#connect2").empty();$("#connectUp").empty();
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  var urlcon = aseduPro + "?callback=ldconctdt&chemid=" + email1 + "&chpass=" + pass + "&action=cheduc";
  var request = $.ajax({
    crossDomain: true,
    url: urlcon,
    method: "GET",
    dataType: "jsonp"
  });
}
function ldconctdt(e){
  var reslt= e.records;
  if(reslt!="ID not found!"){
    if (reslt[0].Connectivity != "" ) {
      var Go = JSON.parse(unescape(reslt[0].Connectivity));
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
    else if(reslt[0].Connectivity == "") {
     
      document.getElementById("connect1").innerHTML ='Update Connectivity';
      document.getElementById("loaderCON").style.display = "none";
    }

  }
  
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
  

function showclroom(){
$('#educlassroom').slideDown('fast');}

function opensframe(){
  $("#fmcontainers").slideDown('fast');}

function openlframe(){
  $("#fmcontainert").slideDown('fast');}
  
$('.closefw').on('click',function(){
  $('.fullwidth').slideUp('fast');
});

$('.closefwtwo').on('click',function(){
  $('.fwidthtwo').slideUp('fast');
});

function noextlink(){
  $('#noextlinkdiv').slideDown('fast');
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
document.getElementById("updateTOD").style.pointerEvents ="auto";}}

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
 });}

function ctrlqtdrmvd(e){
  document.getElementById("LiveTOD").style.pointerEvents ="auto";
  live_tod();}


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
}})

/////////////////Calender////////////////

 function getcalendar() {
  var calendarEl = document.getElementById('calendar');
  var preevent =$('#allsvevnt').val();
  var elemev = preevent.split("{e},");
  var eventsup =[];
for(var i=0;i<elemev.length-1;i+=3){
var entry = {};
entry.title = JSON.parse(unescape(elemev[i]));
entry.start = JSON.parse(elemev[i+1]);
entry.end= JSON.parse(elemev[i+2]);
eventsup.push(entry);
}

var date = new Date();
var tois = date.toISOString();
var flcaldate = tois.substring(0, 10);
var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialDate: flcaldate,
    navLinks: true, 
    weekNumbers: true,
    weekNumberCalculation: 'ISO',
    selectable: true,
    selectMirror: true,
    select: function(arg) {
      var title = prompt('Event Title:');
      var checkstr = function(title) {  
        var fl1 = title.split('"');
        var fl2 = title.split('e}');
        if (fl1[1] != null || fl2[1] !=null){
          return true;
        }
      }
      if (title != ""  && checkstr(title) != true) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay
        })
      // console.log(title,arg.start,arg.allDay);
   var t = JSON.stringify(escape(title));
   var s = JSON.stringify(arg.start.toISOString());
   var e = JSON.stringify(arg.end.toISOString());
   var k = "{e},";
   var evnt = t+k+s+k+e+k;
         var email1 = $("#email").val();
         var pass = $("#pcodeEdu").val();
         var ur1="https://script.google.com/macros/s/";
         var ur2 ="AKfycbxVC3qMPiJWjSJXdls1n87pldEYjmPllLvtV5UYb_1cqMHZYkicpxg9ztFc5vLPk4cziA";
         var url = ur1+ur2+"/exec" + "?callback=ctrlqevsv&usem=" + email1 + "&usid=" + pass + "&event=" + evnt + "&action=upevnt";
         var request = jQuery.ajax({
          crossDomain: true,
          url: url,
          method: "GET",
          dataType: "jsonp"
        });
      }
      calendar.unselect();
    },
    eventClick: function(arg) {
      if (confirm('Are you sure you want to delete this event?')) {
        arg.event.remove();
var tt = JSON.stringify(escape(arg.event.title));
var st = JSON.stringify(arg.event.start.toISOString());
var et = JSON.stringify(arg.event.end.toISOString());
var kt = "{e},";
var delitm = tt+kt+st+kt+et+kt;
        var email1 = $("#email").val();
        var pass = $("#pcodeEdu").val();
        var ur1="https://script.google.com/macros/s/";
         var ur2 ="AKfycbxVC3qMPiJWjSJXdls1n87pldEYjmPllLvtV5UYb_1cqMHZYkicpxg9ztFc5vLPk4cziA";
         var url = ur1+ur2+"/exec" + "?callback=ctrlqevrmv&usem=" + email1 + "&usid=" + pass + "&event=" + delitm + "&action=rmvevnt";
        var request = jQuery.ajax({
         crossDomain: true,
         url: url,
         method: "GET",
         dataType: "jsonp"
       });
      }
    },

    // editable: true,
    dayMaxEvents: true, 
    events:eventsup
    
  });

  calendar.render();
}

function ctrlqevsv(e){
inwallEdu();}

function ctrlqevrmv(e){
  inwallEdu();}

$('#skpad').click(function(){
  window.open('https://sketch.mastrowall.com', '_blank', 'location=center,height=670,width=1200,left=80,top=0,scrollbars=yes,status=yes');
});

  $('#opcal').click(function(){
    $('#showServiceEdu').show();
    $('#calendar').show();
   });

   $('#opensrvc').click(function(){
    $('#showServiceEdu').show();
    $('#calendar').hide();
   });
   $('#hidenavl').click(function(){
    $('#showServiceEdu').hide();
   });
   window.addEventListener("resize", displayWindowSize);
   function displayWindowSize(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
       if(w>1320){
        $('#showServiceEdu').show();
         $('#calendar').show();
       }
    }

    $('#loaderTOD').click(function(){
      $('#loaderTOD').hide();});
  
 $('#opecrd').click(function(){
$('#myerded').slideDown();
 });
 
 $('#clsecrd').click(function(){
  $('#myerded').slideUp();
   });

$(document).ready(function () {
$("#downecrd").on('click', function () {
  html2canvas(document.getElementById("canved"),
      {
          allowTaint: true,
          useCORS: true
      }).then(function (canvas) {
          var anchorTag = document.createElement("a");
          document.body.appendChild(anchorTag);
          anchorTag.download = "myEcard.png";
          anchorTag.href = canvas.toDataURL();
          anchorTag.target = '_blank';
          anchorTag.click();
      });
});

});

var optionsS = {
  "key": "rzp_live_LTmvi7swL9EliZ",
  "amount": "240000",
  "currency": "INR",
  "name": "M A S T R O W A L L",
  "image": "https://cdn.razorpay.com/logos/KEwE9wPPBouRjf_original.png",
  "handler": function(response) {
      var rzres = JSON.stringify(response);
      var exid = $('#email').val();
      var rzpid= response.razorpay_payment_id;
      var refid = "srv"+Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 10);
      var d = new Date();
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
      d.setDate(d.getDate() + 365);
      var endTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
      var ur1='https://script.google.com/macros/s/';
var ur2='AKfycbxQa74qRza0FUMmbxHk_ddzC6zF4Z2UEHleViJavGknb6xedNMmjgIfUW1wGJADhEuC6Q';
var url= ur1+ur2+'/exec'+'?callback=ctrlqpcheck&tostamp='+currentTime+  '&toendtm='+endTime+ '&torzres='+rzres+  '&toemid='+exid+ 
'&torzpid='+rzpid+ '&torfid='+refid+  '&action=paychecksrv';
var request = jQuery.ajax({
crossDomain: true,
url: url,
method: "GET",
dataType: "jsonp"
}); 
  },
  "notes": {
    "address": "Razorpay Corporate Office"
  },
  "theme": {
    "color": "#ffffff"
  }
};
var rzp4 = new Razorpay(optionsS);
rzp4.on('payment.failed', function(response) {
  alert(response.error.code);
  alert(response.error.description);
  alert(response.error.source);
  alert(response.error.step);
  alert(response.error.reason);
  alert(response.error.metadata.order_id);
  alert(response.error.metadata.payment_id);
});

$('#cmpltpay').click(function(e) {
  rzp4.open();
  e.preventDefault();
});

function ctrlqpcheck(e){
if(e.result=="active"){
  window.location.reload();
}
}