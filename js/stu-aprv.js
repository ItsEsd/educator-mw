
var pt_url11 = "https://script.google.com/macros/s/";
var pt_url22 = "AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
var pt_url = pt_url11+pt_url22+"/exec";
function allstudwait() {
  $('#allstud-one').empty();
      document.getElementById('allstud-one').style.backgroundImage ="url('images/clsrm-loader.gif')";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  if (email1 != 0 && pass != 0) {   
    var url = pt_url + "?action=read";
    $.getJSON(url, function(json) {
      for (var i = 0; i < json.records.length - 1; i++) {
        if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
          var allst = json.records[i].StuWait;
          var singlest = allst.split(",");
          var lenstr = singlest.length;
          var stwaitnumcout = lenstr -1; 
          document.getElementById('stuwaitnum').innerHTML = "("+stwaitnumcout+")";
       
          if(allst==0){
            document.getElementById("allstud-one").innerHTML ='<div class="nocontentallst"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">'+
            '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />'+
            '<path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>'+
            '<br><h5 style="color:#474749;">Empty</h5></div>';
            document.getElementById('allstud-one').style.backgroundImage ="none";
          }
          else{
         var st = 0;
          for(st;st<lenstr;st++){

           
            var stidsrc = singlest[st];
            srcstid(stidsrc);
          
          }
          }
         
        }
}
    });
  }
}

function srcstid(stidsrc){
  var ur1 = "https://script.google.com/macros/s/";
 var ur2 ="AKfycbyEI27cuOCoOGf-hTzLpKjFDFgWCw8DHXrhfZuDYQ-Vdv32VvRxeZWzjvHOCZwy-yY9EQ";
 var url= ur1 +ur2+ "/exec"+"?action=read";
$.getJSON(url, function(json) {
  for (var i = 0; i < json.records.length - 1; i++) {
    if (stidsrc == json.records[i].STid) {
      document.getElementById("allstud-one").innerHTML +="<div class='stproclroom'><span class='stnametitle'>"+
       json.records[i].FName+" "+json.records[i].LName+"</span><img class='stpropic' src='"+
       json.records[i].ProfilePic+"'><button class='rmvwait' onclick='rmvstuwait(this);'><svg xmlns='http://www.w3.org/2000/svg' class='bi bi-trash-fill'  viewBox='0 0 16 16'>"+
       "<path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'/>"+
     "</svg></button><button onclick='addstclsrm(this);' class='addstbtn' class='btn btn-light'>"+
       "Approve</button><br>&#9679; "+ json.records[i].Class + " &#9679; "+json.records[i].Board+
       "<br>&#9679; <a href='mailto:"+ json.records[i].Email +"'>"+ json.records[i].Email + "</a>"+
       " &#9679; <a href=tel:"+json.records[i].CountryCode+json.records[i].PhoneNo+">"+
       json.records[i].CountryCode+" "+json.records[i].PhoneNo+
       "</div><input class='staddid' style='display: none;' value='"+
       json.records[i].STid+"'/>";
    }
    
      
   
  } 
  document.getElementById('allstud-one').style.backgroundImage ="none";
 
});
}


function addstclsrm(label)
{
   var list=document.getElementsByClassName("addstbtn");
   list = [].slice.call(list); 

   var posofinput = list.indexOf(label);

   var x = document.getElementsByClassName('staddid');
   //   var lenposition = x[v].val();
        var stadid = x[posofinput].value;
        document.getElementById('allstud-one').style.pointerEvents = "none";
        document.getElementById('stuid').value= stadid;
        document.getElementById('posof').value= posofinput;
        list[posofinput].disabled = true;
        list[posofinput].innerHTML= "Approving Request..";
        var eduid =$("#eduid").val();
        var studid =$("#stuid").val();
        var ur1= "https://script.google.com/macros/s/";
        var ur2="AKfycbyVcABPBYbhJQ1ZEQz9QTBxDzuG6Rdod5sS_fo6GIxnNHzjLBT81xsjDKjUPaF6fqrlDQ";
      
        var urledside = ur1+ur2+"/exec" + "?callback=ctrlqaddst&eduid=" + eduid + "&stuid=" + studid + "&action=apstup";
        var request = jQuery.ajax({
          crossDomain: true,
          url: urledside,
          method: "GET",
          dataType: "jsonp"
        });      
      
}

function ctrlqaddst(){
  var p = $('#posof').val();
  var z =document.getElementsByClassName('addstbtn');
 var addeduid =$("#eduid").val();
 var studid =$("#stuid").val();
 var ur1= "https://script.google.com/macros/s/";
 var ur3 ="AKfycbzdqCARxjYEiFSqo1QK6We2qeNboHlLOBCXnmN9ekENSP6HXfd24C3n_EHvQlVekW4oAQ";
 var urlstside = ur1+ur3+"/exec" + "?callback=ctrlqaddedu&eduid=" + addeduid + "&stuid=" + studid + "&action=apdedup";
 var request = jQuery.ajax({
   crossDomain: true,
   url: urlstside,
   method: "GET",
   dataType: "jsonp"
 });

}

function ctrlqaddedu(){
  var p = $('#posof').val();
  var z =document.getElementsByClassName('addstbtn');
  z[p].innerHTML = "Approved";
  z[p].style.backgroundColor = "#0ba705";
  document.getElementById('allstud-one').style.pointerEvents = "auto";
  allstudapprv();
  allstudwait();
}

function rmvstuwait(label){

  var list=document.getElementsByClassName("rmvwait");
  var list2=document.getElementsByClassName("addstbtn");
  list = [].slice.call(list); 

  var posofinput = list.indexOf(label);

  var x = document.getElementsByClassName('staddid');
  //   var lenposition = x[v].val();
       var stadid = x[posofinput].value;
       document.getElementById('allstud-one').style.pointerEvents = "none";
       document.getElementById('stuid').value= stadid;
       document.getElementById('posof').value= posofinput;
       list[posofinput].disabled = true;
       list2[posofinput].innerHTML= "Deleting..";
       var eduid =$("#eduid").val();
       var studid =$("#stuid").val();
       var ur1= "https://script.google.com/macros/s/";
       var ur2="AKfycbziqCoxM3UiL1B2o_cZNwHX_tx-Yzr-mzAKOryWI_BNq-HoLAz4LuAIB_HA4LCXGQBXPQ";
     
       var urledside = ur1+ur2+"/exec" + "?callback=ctrlqrmvwaitst&eduid=" + eduid + "&stuid=" + studid + "&action=rmvstwait";
       var request = jQuery.ajax({
         crossDomain: true,
         url: urledside,
         method: "GET",
         dataType: "jsonp"
       });      
     
}


function ctrlqrmvwaitst(){
  document.getElementById('allstud-one').style.pointerEvents = "auto";
  allstudwait();

}


var pt_url111 = "https://script.google.com/macros/s/";
var pt_url222 = "AKfycbzQb1AFfuHBzUQZx-OYWzoMa-wGbrgwY13_nsVw9ndaV_57Mr--ondYLkpUJKVjSmn-5w";
var pt_url = pt_url111+pt_url222+"/exec";
function allstudapprv() {
    $('#allstud-two').empty();
    document.getElementById('allstud-two').style.backgroundImage ="url('images/clsrm-loader.gif')";
  var email1 = $("#email").val();
  var pass = $("#pcodeEdu").val();
  if (email1 != 0 && pass != 0) {   
    var url = pt_url + "?action=read";
    $.getJSON(url, function(json) {
      for (var i = 0; i < json.records.length - 1; i++) {
        if (email1 == json.records[i].Email && pass == json.records[i].Passcode) {
          var allst = json.records[i].StuAppr;
          var singlest = allst.split(",");
          var lenstr = singlest.length; 
          var staprvtnumcout = lenstr -1; 
          document.getElementById('stuapprvnum').innerHTML = "("+staprvtnumcout+")";
         
          if(allst==0){
            document.getElementById("allstud-two").innerHTML ='<div class="nocontentallst"><svg xmlns="http://www.w3.org/2000/svg" style="color:#8a8a8b;" width="60" height="60" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">'+
            '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />'+
            '<path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>'+
            '<br><h5 style="color:#474749;">Empty</h5></div>';
            document.getElementById('allstud-two').style.backgroundImage ="none";
          }
          else{
         var st = 0;
          for(st;st<lenstr;st++){
            var stidsrc = singlest[st];
            srcstidapprv(stidsrc);
          }
        }
      
        }
}
    })
  }
}

function srcstidapprv(stidsrc){
  var ur1 = "https://script.google.com/macros/s/";
 var ur2 ="AKfycbyEI27cuOCoOGf-hTzLpKjFDFgWCw8DHXrhfZuDYQ-Vdv32VvRxeZWzjvHOCZwy-yY9EQ";
 var url= ur1 +ur2+ "/exec"+"?action=read";
$.getJSON(url, function(json) {
  for (var i = 0; i < json.records.length - 1; i++) {
    if (stidsrc == json.records[i].STid) {
      document.getElementById("allstud-two").innerHTML +="<div class='stproclroom'><span class='stnametitle'>"+
       json.records[i].FName+" "+json.records[i].LName+"</span><img class='stpropic' src='"+
       json.records[i].ProfilePic+"'><button onclick='rmvstclsrm(this);' class='rmvstbtn' class='btn btn-light'>"+
       "Remove</button><br>&#9679; "+ json.records[i].Class + " &#9679; "+json.records[i].Board+
       "<br>&#9679; <a href='mailto:"+ json.records[i].Email +"'>"+ json.records[i].Email + "</a>"+
       " &#9679; <a href=tel:"+json.records[i].CountryCode+json.records[i].PhoneNo+">"+
       json.records[i].CountryCode+" "+json.records[i].PhoneNo+
       "</div><input class='strmvid' style='display: none;' value='"+
       json.records[i].STid+"'/>";
    }
  }
  document.getElementById('allstud-two').style.backgroundImage ="none";
});
}


function rmvstclsrm(label)
{
   var list=document.getElementsByClassName("rmvstbtn");
   list = [].slice.call(list); 

   var posofinput = list.indexOf(label);

   var x = document.getElementsByClassName('strmvid');
   //   var lenposition = x[v].val();
        var stadid = x[posofinput].value;
        document.getElementById('allstud-two').style.pointerEvents = "none";
        document.getElementById('stuid').value= stadid;
        document.getElementById('posof').value= posofinput;
        list[posofinput].disabled = true;
        list[posofinput].innerHTML= "Removing..";
        var eduid =$("#eduid").val();
        var studid =$("#stuid").val();
        var ur1= "https://script.google.com/macros/s/";
        var ur2="AKfycbxs7gRSD9zK7tDZby_yTWmhFpYuMJCOI2BCgdl74gI-0nFxFbJxv7IARFRhJF_bbVVn";
      
        var urlrmvst = ur1+ur2+"/exec" + "?callback=ctrlqrmvst&eduid=" + eduid + "&stuid=" + studid + "&action=rmvstu";
        var request = jQuery.ajax({
          crossDomain: true,
          url: urlrmvst,
          method: "GET",
          dataType: "jsonp"
        });      
}

function ctrlqrmvst(){
  var p = $('#posof').val();
  var z =document.getElementsByClassName('rmvstbtn');
  z[p].innerHTML = "Removed";
  z[p].style.backgroundColor = "black";
  document.getElementById('allstud-two').style.pointerEvents = "auto";
  allstudapprv();
/*var addeduid =$("#eduid").val();
 var studid =$("#stuid").val();
 var ur1= "https://script.google.com/macros/s/";
 var ur3 ="AKfycbzdqCARxjYEiFSqo1QK6We2qeNboHlLOBCXnmN9ekENSP6HXfd24C3n_EHvQlVekW4oAQ";
 var urlstside = ur1+ur3+"/exec" + "?callback=ctrlqaddedu&eduid=" + addeduid + "&stuid=" + studid + "&action=apdedup";
 var request = jQuery.ajax({
   crossDomain: true,
   url: urlstside,
   method: "GET",
   dataType: "jsonp"
 }); */

}
/*
function ctrlqaddedu(){
  var p = $('#posof').val();
  var z =document.getElementsByClassName('rmvstbtn');
  z[p].innerHTML = "Approved";
  z[p].style.backgroundColor = "#0ba705";
  document.getElementById('allstud-one').style.pointerEvents = "auto";
}
*/