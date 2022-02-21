
repassone.addEventListener('submit', (event) => {
    $('#checkemid').hide();
    document.getElementById("loader-fp").style.visibility = "visible";
    var mailat =  document.getElementById('mailrepass').value;
    var ur1 = "https://script.google.com/macros/s/";
var ur2= "AKfycbzEjdgac0XtZRxKgc1Pie6viAp8cEEjcklhbNe9XIeZjnrO6CQ5TMpO1f5YLwsVRag3";
    var url = ur1+ur2+"/exec" + "?callback=ctrlqchemid&chemid="+mailat+"&action=chedum";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp"
    });
  });
  
function ctrlqchemid(e){
  var res= e.records;
if(res=="ID found!"){
  document.getElementById("checkemid").style.display = "none";
          $("#resetp_two").show();
          $("#resetp_one").hide();
          var k =Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
          document.getElementById('vercodepre').value = k;
          sendEmail();
          document.getElementById("loader-fp").style.visibility = "hidden";
}
else{
  document.getElementById("checkemid").style.display = "block";
  document.getElementById("checkemid").innerHTML = "User email not found.";
  document.getElementById("loader-fp").style.visibility = "hidden";
  setTimeout(function() {
    jQuery('#checkemid').fadeOut('fast');
  }, 5000);
}
}


  function sendEmail() {
    var k =Math.random().toString(26).substring(2, 6) + Math.random().toString(26).substring(2, 6);
    var mailat =  document.getElementById('mailrepass').value;
    document.getElementById('vercodepre').value = k;
      Email.send({
        SecureToken : "2ecae5a7-d0bc-4df8-a933-fedd48053e4c",
        To: mailat,
        From: "noreply@mastrowall.com",
          Subject: "Email Verification",
          Body:  "<html><body style='background-color:#161616;color:white;border-radius:10px;'><div align='center' style='padding:40px;'><h2 style='color:white'>W E L C O M E</h2><h2><a target='_blank' href='https://mastrowall.com' style='text-decoration:none;'>M A S T R O W A L L</a></h2>" + "<p style='color:white;'>Your Confirmation Code is: </p><h3 style='color:black;width:140px;background-color:#e6e6e6;border-radius:4px;padding:6px;'>"+ k +"</h3><br><p style='color:white;'>Contact: <a href='mailto:mail@mastrowall.in'>mail@mastrowall.in</a></p><h4 style='color:white;'>Thank You</h4><p style='font-size:12px;color:#cccccc;'>N.B. Do not reply to this email</p></div></body></html>",
      })
          .then(function (message) {
        document.getElementById('checkemid-2').style.display= 'block';
        document.getElementById('checkemid-2').innerHTML= 'Verification code send to your email.';
        setTimeout(function() {
          jQuery('#checkemid').fadeOut('fast');
        }, 10000);
          
          });
      }
  
    $('#confirm_passwordnew').on('keyup', function() {
      if ($('#passwordnew').val() == $('#confirm_passwordnew').val()) {
        $('#messagenew').html('Matching').css('font-size', '12px');
        document.getElementById('repassconfirm').disabled = false;
      } else {
        $('#messagenew').html('Not Matching').css('font-size', '12px');
        document.getElementById('repassconfirm').disabled = true;
      }
    });
  
  function verfycode(){
   var verc = $('#vercode').val();
   var prec = $('#vercodepre').val();
   if(verc == prec){
    document.getElementById('verconfirm').disabled = false;
   }
   else{
    document.getElementById('verconfirm').disabled = true;
     return false;
   }
  }
  
  
  repassthree.addEventListener('submit', (event) => {
    document.getElementById("loader-fp").style.visibility = "visible";
    var pass1 = "https://script.google.com/macros/s/";
    var pass2 = "AKfycbyLmpEnIXb7onV0oTJbhYGWDhV7B7VI5B7Y2Xq3BclO6zA5hLM_iEsL55O6cDxoyJF5Aw";
    var newP = $('#passwordnew').val();
    var emid = $('#mailrepass').val();
      var urlp = pass1+pass2+"/exec" + "?callback=ctrlqrepass&mailrepass=" + emid + "&passwordnew=" + newP + "&action=cuiweryuiwrnweroumorilewr-wer";
      var request = jQuery.ajax({
        crossDomain: true,
        url: urlp,
        method: "GET",
        dataType: "jsonp"
      });
  });
  
  
  function ctrlqrepass(){
  
    document.getElementById("loader-fp").style.visibility = "hidden";
    $('#resetp_three').hide();
    $('#resetp_four').show();
  }