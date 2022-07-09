
function checkexisting(){
          var ur1 = "https://script.google.com/macros/s/";
          var ur2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
          var url = ur1+ ur2+"/exec"+"?action=read";
          var emailch = $("#email").val();
          var flag =0;
          $.getJSON(url, function(json) {
             for (var i = 0; i < json.records.length - 1; i++) {
               if (emailch == json.records[i].Email) {
               flag = flag + 1;
               var elemin = json.records[i]
               var fname = elemin.FName;
               var lname = elemin.LName;
               var dob =elemin.DOB;
               var countryCode = elemin.CountryCode;
               var phoneNo = elemin.PhoneNo;
               var Class = elemin.Class +" (2)";
               var Board = elemin.Board;
               var Subject = elemin.Subject;
               var Resume = elemin.Resume;
               var Storage = elemin.Storage;
               }
            }
            // console.log(flag);
            if(flag == 1){
                
               var email = $("#email").val();
               var edpa = $('#confnwactpass').val();
                var d = new Date();
                var day = d.getDate();
                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var currentTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' - ' + d.getFullYear();
                var dtime = currentTime;
                var edid = "ED-"+ Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6)+"/2";
                var TPic = "https://mastrowall.com/images/mwalllogo.png";
                var script_url_edureg1 = "https://script.google.com/macros/s/";
                var script_url_edureg2 ="AKfycbxcb9RAuFYAyYt471GV9Jb3cLJGwI2D3HvrnzOO5Gv8-NSKcJm-eSa35-pjwF_-sEYJ1g";
                var script_url_edureg = script_url_edureg1 + script_url_edureg2 + "/exec";
                var url = script_url_edureg + "?callback=ctrlqnacnt&email=" + email + "&fname=" + fname + "&lname=" 
                + lname + "&dob=" + dob + "&countrycode=" + countryCode + "&phoneno=" + phoneNo + "&class_=" 
                + Class + "&board_=" + Board + "&subject_=" + Subject + "&resume=" + Resume + "&storage=" 
                + Storage + "&proPicT=" + TPic + "&eduregtime=" + dtime + "&eduregid=" + edid 
                + "&confirmpasswrd=" + edpa   + "&action=insert";
                createnewaccnt(url);
                document.getElementById('crtnewadjacnt').style.display ="none";
    
    }else{
        document.getElementById('crtnewadjacnt').style.display ="none";
    }  });

    function createnewaccnt(url){
        var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp"
          });
    }
}
function ctrlqnacnt(e){
    inwallEdu();
}
function onstartswitch(){
    document.getElementById('switchclsrm').style.pointerEvents ="none";
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 ="AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
    var url = ur1+ ur2+"/exec"+"?action=read";
    var emailch = $("#email").val();
    var pascd = $("#pcodeEdu").val();
    var flag =0;
    $.getJSON(url, function(json) {
       for (var i = 0; i < json.records.length - 1; i++) {
         if (emailch == json.records[i].Email) {
if(pascd !=json.records[i].Passcode){
    $('#switchnoti').slideDown();       
    document.getElementById('switchnoti').innerHTML = "Switch to Class: "+json.records[i].Class+" <svg xmlns='http://www.w3.org/2000/svg fill='currentColor' width='20px' height='20px' style='background-color:white;margin-left:10px;padding:2px;' class='bi bi-arrow-left-right' viewBox='0 0 16 16'>"+
    "<path fill-rule='evenodd' d='M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z'/></svg>";
    setTimeout(function(){
        $('#switchnoti').slideUp();},6000);


    document.getElementById('switchclsrm').innerHTML = "<div class='switchmenu' onclick='switchprof()'><svg xmlns='http://www.w3.org/2000/svg fill='currentColor' class='bi bi-arrow-left-right' viewBox='0 0 16 16'>"+
    "<path fill-rule='evenodd' d='M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z'/></svg>"
    +" | <span class='cardd'>"+json.records[i].CardId+"<input id='andpass' value='"+json.records[i].Passcode+"'></span></div>";
    document.getElementById('switchclsrm').style.pointerEvents ="auto";
   
}
            flag = flag + 1;
         }
        }
        // console.log(flag);
        if(flag == 1){
            document.getElementById('crtnewadjacnt').style.display ="block";
        }
        else{
            document.getElementById('crtnewadjacnt').style.display ="none";
        }
    });
}

swtchnwact.addEventListener('submit',checkexisting);
document.getElementById("confnwactpass").addEventListener("input", enableok);
function enableok() {
  if ($('#nwactpass').val() == $('#confnwactpass').val()) {
    document.getElementById("subnewactps").disabled = false;
  } else {
    document.getElementById("subnewactps").disabled = true;
  }
}

function switchprof(){
    document.getElementById('switchclsrm').style.pointerEvents ="none";
    var newpr = document.getElementById('andpass').value;
    var psmed = $("#email").val();
    var d = new Date();
    d.setTime(d.getTime() + (14 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "mwallced=true; expires=" + expires + ";path=/;domain=mastrowall.com";
    document.cookie = "mwallpswedus="+btoa(psmed)+"; expires=" + expires + ";path=/;domain=mastrowall.com";
    document.cookie = "mwallpswedud="+btoa(newpr)+"; expires=" + expires + ";path=/;domain=mastrowall.com";
    getCookie();
}