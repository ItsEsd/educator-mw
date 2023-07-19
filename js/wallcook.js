/* M A S T R O W A L L */
var ewfSetCookie = function(exdays,name) {
  var psmed = $("#email").val();
  var pswed = $("#pcodeEdu").val();
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "mwallced=true; expires=" + expires + ";path=/;domain=mastrowall.com";
  document.cookie = "mwallpswedus="+btoa(psmed)+"; expires=" + expires + ";path=/;domain=mastrowall.com";
  document.cookie = "mwallpswedud="+btoa(pswed)+"; expires=" + expires + ";path=/;domain=mastrowall.com";
  document.getElementById('linkinfrm').src="https://mastrowall.com/linkins/"+name;
  document.getElementById('srchfrm').src="https://mastrowall.com/search";
};
function getCookie() {
    var decodedCookie = decodeURIComponent(document.cookie); 
    var ca = decodedCookie.split(';'); 
for(var p=0;p<ca.length;p++){
var cookstrem = ca[p].split('mwallpswedus='); 
var cookstrkd = ca[p].split('mwallpswedud='); 
if(cookstrem[0] == 0){
  var paem = window.atob(cookstrem[1]);
  document.getElementById('email').value= paem;
}
else if(cookstrkd[0]== 0){
  var pacd = window.atob(cookstrkd[1]);
  document.getElementById('pcodeEdu').value= pacd;
  inwallEdu();
}}} 
  $(document).ready(function(){getCookie() })  ;
function deleteAllCookies() {
 var cookies = document.cookie.split(";");
     for (var i = 0; i < cookies.length; i++) {
       var cookie = cookies[i];
         var eqPos = cookie.indexOf("=");
       var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
       document.cookie = name + "=true;"+"expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=mastrowall.com";
             }
     }     

   function signagn(){
      deleteAllCookies();
      setTimeout(function(){window.open('../','_self');},1000);
   }

  $(document).ready(function() {
    var mn= "https://mastrowall.com/"
    $('#rc-widget').load(mn+'rc-widget/index.html');
    $.getScript(mn+'rc-widget/script.js');
    $.getScript(mn+'src-engines/scrpt.js');
    $('<link>', {
      rel: 'stylesheet',
      href: mn+'rc-widget/style.css'
    }).appendTo('head');
  });