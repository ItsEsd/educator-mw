
var ewfSetCookie = function(exdays) {
    
  var psmed = $("#email").val();
  var pswed = $("#pcodeEdu").val();
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = "mwallced=true; expires=" + expires + ";path=/;domain=mastrowall.com";
  document.cookie = "mwallpswedus="+btoa(psmed)+"; expires=" + expires + ";path=/;domain=mastrowall.com";
  document.cookie = "mwallpswedud="+btoa(pswed)+"; expires=" + expires + ";path=/;domain=mastrowall.com";
};

function getCookie(cname) {
    var name = cname + "="; 
    var decodedCookie = decodeURIComponent(document.cookie); 
    var ca = decodedCookie.split(';'); 
    for (var i = 0; i < ca.length; i++) {
       var c = ca[i]; 
    
      } 
      console.log(ca);
for(var p=0;p<ca.length;p++){
var cookstr = ca[p].split('mwallced=')[1];
if(cookstr=="true"){
  var paem = window.atob(ca[p+1].split('mwallpswedus=')[1]);
  var pacd = window.atob(ca[p+2].split('mwallpswedud=')[1]);
  document.getElementById('email').value= paem;
  document.getElementById('pcodeEdu').value= pacd;
  inwallEdu();
}
}} 

  $(document).ready(function(){getCookie() })  ;

function deleteAllCookies() {
 var cookies = document.cookie.split(";");
     for (var i = 0; i < cookies.length; i++) {
       var cookie = cookies[i];
         var eqPos = cookie.indexOf("=");
       var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
       document.cookie = name + "=true;"+"expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
             }
            setTimeout(function(){location.reload();},2000);
     }     
     