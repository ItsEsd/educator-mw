/* M A S T R O W A L L */
function checkexisting() {
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycby3RhmKbS-aQdwN0Q2sc-Uz7cEn4w58_Lssq01Zh2NhwysDTUS2D4FBbPpEnVCyIu-9FQ";
  var url = ur1 + ur2 + "/exec" + "?act=d";
  var emailch = $("#email").val();
  var flag = 0;
  $.getJSON(url, function (json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (emailch == json.records[i].Email) {
        flag = flag + 1;
        var elemin = json.records[i];
        var fname = elemin.FName;
        var lname = elemin.LName;
        var dob = elemin.DOB;
        var countryCode = elemin.CountryCode;
        var phoneNo = elemin.PhoneNo;
        var Class = elemin.Class + " (2)";
        var Board = elemin.Board;
        var Subject = elemin.Subject;
        var Resume = elemin.Resume;
        var Storage = elemin.Storage;
        var ActvST = elemin.SubValue;
      }
    }
    if (flag == 1) {
      var email = $("#email").val();
      var edpa = $("#confnwactpass").val();
      var d = new Date();
      var day = d.getDate();
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var currentTime =
        days[d.getDay()] +
        ", " +
        months[d.getMonth()] +
        " " +
        d.getDate() +
        " - " +
        d.getFullYear();
      var dtime = currentTime;
      var edid =
        "ED-" +
        Math.random().toString(26).substring(2, 6) +
        Math.random().toString(26).substring(2, 6) +
        "/2";
      var TPic = "https://mastrowall.com/images/logoCircleBW.png";
      var asedureg1 = "https://script.google.com/macros/s/";
      var asedureg2 =
        "AKfycby3RhmKbS-aQdwN0Q2sc-Uz7cEn4w58_Lssq01Zh2NhwysDTUS2D4FBbPpEnVCyIu-9FQ";
      var asedureg = asedureg1 + asedureg2 + "/exec";
      var url =
        asedureg +
        "?callback=ctrlqnacnt&email=" +
        email +
        "&fname=" +
        fname +
        "&lname=" +
        lname +
        "&dob=" +
        dob +
        "&countrycode=" +
        countryCode +
        "&phoneno=" +
        phoneNo +
        "&class_=" +
        Class +
        "&board_=" +
        Board +
        "&subject_=" +
        Subject +
        "&resume=" +
        Resume +
        "&storage=" +
        Storage +
        "&proPicT=" +
        TPic +
        "&eduregtime=" +
        dtime +
        "&eduregid=" +
        edid +
        "&confirmpasswrd=" +
        edpa +
        "&actvst=" +
        ActvST +
        "&act=n";
      createnewaccnt(url);
      document.getElementById("crtnewadjacnt").style.display = "none";
    } else {
      document.getElementById("crtnewadjacnt").style.display = "none";
    }
  });

  function createnewaccnt(url) {
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  }
}
function ctrlqnacnt(e) {
  inwallEdu();
}

function onstartswitch() {
  document.getElementById("switchclsrm").style.pointerEvents = "none";
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycby3RhmKbS-aQdwN0Q2sc-Uz7cEn4w58_Lssq01Zh2NhwysDTUS2D4FBbPpEnVCyIu-9FQ";
  var url = ur1 + ur2 + "/exec" + "?act=d";
  var emailch = $("#email").val();
  var pascd = $("#pcodeEdu").val();
  var flag = 0;
  $.getJSON(url, function (json) {
    for (var i = 0; i < json.records.length - 1; i++) {
      if (emailch == json.records[i].Email) {
        if (pascd != json.records[i].Passcode) {
          $("#switchnoti").slideDown();
          document.getElementById("switchnoti").innerHTML =
            "Switch to Class: " +
            json.records[i].Class +
            " <svg xmlns='http://www.w3.org/2000/svg fill='currentColor' width='20px' height='20px' style='background-color:white;margin-left:10px;padding:2px;margin-top:-4px;' class='bi bi-arrow-left-right' viewBox='0 0 16 16'>" +
            "<path fill-rule='evenodd' d='M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z'/></svg>";
          setTimeout(function () {
            $("#switchnoti").slideUp();
          }, 6000);
          document.getElementById("switchclsrm").innerHTML =
            "<div class='switchmenu' onclick='switchprof()'><svg xmlns='http://www.w3.org/2000/svg fill='currentColor' class='bi bi-arrow-left-right' viewBox='0 0 16 16'>" +
            "<path fill-rule='evenodd' d='M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z'/></svg>" +
            " | <span class='cardd'>" +
            json.records[i].CardId +
            "<input id='andpass' value='" +
            json.records[i].Passcode +
            "'></span></div>";
          document.getElementById("switchclsrm").style.pointerEvents = "auto";
        }
        flag = flag + 1;
      }
    }
    if (flag == 1) {
      document.getElementById("crtnewadjacnt").style.display = "block";
    } else {
      document.getElementById("crtnewadjacnt").style.display = "none";
    }
  });
}

swtchnwact.addEventListener("submit", checkexisting);
document.getElementById("confnwactpass").addEventListener("input", enableok);
function enableok() {
  if (
    $("#nwactpass").val() == $("#confnwactpass").val() &&
    $("#confnwactpass").val() != $("#pcodeEdu").val()
  ) {
    document.getElementById("subnewactps").disabled = false;
  } else {
    document.getElementById("subnewactps").disabled = true;
  }
}

function switchprof() {
  document.getElementById("switchclsrm").style.pointerEvents = "none";
  var newpr = document.getElementById("andpass").value;
  var psmed = $("#email").val();
  var d = new Date();
  d.setTime(d.getTime() + 14 * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie =
    "mwallced=true; expires=" + expires + ";path=/;domain=mastrowall.com";
  document.cookie =
    "mwallpswedus=" +
    btoa(psmed) +
    "; expires=" +
    expires +
    ";path=/;domain=mastrowall.com";
  document.cookie =
    "mwallpswedud=" +
    btoa(newpr) +
    "; expires=" +
    expires +
    ";path=/;domain=mastrowall.com";
  getCookie();
}

/////////////////Add Comments /////////////////

$("#clsrmcmts").click(function () {
  $("#clsrmcmntbox").slideDown("fast");
});

$("#clscmntbx").click(function () {
  $("#clsrmcmntbox").slideUp("fast");
});
$("#rfshcmntbx").click(function () {
  rfshcmnt();
});

clsrmcmntfm.addEventListener("submit", (event) => {
  $("#subcmntbx").attr("disabled", true);
  var nmF = document.getElementById("mednam").innerText;
  var primg = document.getElementById("propic").src;
  var cmcon = encodeURIComponent(JSON.stringify($("#medcmmnt").val()));
  var edid = window.btoa($("#eduid").val());
  var d = new Date();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var cTime =
    days[d.getDay()] +
    ", " +
    months[d.getMonth()] +
    " " +
    d.getDate() +
    " - " +
    d.getFullYear();
  var cmnd =
    Math.random().toString(26).substring(2, 6) +
    Math.random().toString(26).substring(2, 6);
  var strlen = cmcon.length;
  if (strlen < 400) {
    var ur1 = "https://script.google.com/macros/s/";
    var ur2 =
      "AKfycbz0Okd0T9pMS-Q4nLUstxONTlswNXbKu4qUud4tfge6_ToM0uQZQxda5SrpcRPNUsCKrA";
    var url =
      ur1 +
      ur2 +
      "/exec" +
      "?callback=ctrlqcmnt&cmid=" +
      cmnd +
      "&cdid=" +
      edid +
      "&cttm=" +
      cTime +
      "&ccon=" +
      cmcon +
      "&cnam=" +
      nmF +
      "&cpic=" +
      primg +
      "&action=mcmnt";
    var request = $.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    return false;
  }
  $("#subcmntbx").attr("disabled", false);
  clsrmcmntfm.reset();
});

function ctrlqcmnt(e) {
  var cmelm = e.result.split("{-/},");
  var cmntlen = cmelm.length;
  var comlem = document.getElementById("divcmntbx");
  totlcmnt((cmntlen - 1) / 6);
  var nmF = document.getElementById("mednam").innerText;
  if (cmntlen > 6) {
    $("#divcmntbx").empty();
    for (var k = 0; k <= cmntlen - 1; k += 6) {
      comlem.innerHTML +=
        '<center><div class="edcmnt"><span class="delcmnted" onclick="deletecmnted(this)">Delete</span><input class="cmntidval" style="display:none;"value="' +
        cmelm[k] +
        '"><div class="cmntinfo"><p class="cmmntor"><span class="cmntrimg"><img src="' +
        cmelm[k + 4] +
        '"></span><span class="cmnttrnm">' +
        cmelm[k + 3] +
        '</span></p><p class="cmnttim">' +
        cmelm[k + 2] +
        "</p></div>" +
        '<div class="cmntcon">' +
        JSON.parse(cmelm[k + 5]) +
        "</div>" +
        "</div><hr><center>";
      if (cmelm[k + 3] != nmF) {
        document
          .getElementsByClassName("edcmnt")
          [k / 6].classList.add("stcmnt");
      }
    }
  } else {
    comlem.innerHTML =
      '<center><div class="nocmntedc"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">' +
      '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>' +
      '<path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>' +
      "<br><h5>Empty</h5></div></center>";
  }
}

function deletecmnted(label) {
  var list = document.getElementsByClassName("delcmnted");
  list = [].slice.call(list);
  var posof = list.indexOf(label);
  var x = document.getElementsByClassName("cmntidval");
  document.getElementsByClassName("edcmnt")[posof].classList.add("loading");
  var cmid = x[posof].value;
  var edid = window.btoa($("#eduid").val());
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbz0Okd0T9pMS-Q4nLUstxONTlswNXbKu4qUud4tfge6_ToM0uQZQxda5SrpcRPNUsCKrA";
  var url =
    ur1 +
    ur2 +
    "/exec" +
    "?callback=ctrlqcmnt&cmid=" +
    cmid +
    "&cdid=" +
    edid +
    "&action=dcmnt";
  var request = $.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp",
  });
}

function rfshcmnt() {
  var edid = window.btoa($("#eduid").val());
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbz0Okd0T9pMS-Q4nLUstxONTlswNXbKu4qUud4tfge6_ToM0uQZQxda5SrpcRPNUsCKrA";
  var url =
    ur1 + ur2 + "/exec" + "?callback=ctrlqcmnt&cdid=" + edid + "&action=rcmnt";
  var request = $.ajax({
    crossDomain: true,
    url: url,
    method: "GET",
    dataType: "jsonp",
  });
}

function totlcmnt(nof) {
  document.getElementById("allcmntsnm").innerHTML =
    "All Comments " + "(" + nof + ")";
}
