/* M A S T R O W A L L */
"use strict";

function checkexisting() {
  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbwcmeadv7TnuLDzwgEeh2KH7XFlJ3ui-NiRLn7z3yBhDIwr0-gW1yFSKwb706n10OplQQ";

  var emailch = $("#email").val();

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

  var url =
    ur1 +
    ur2 +
    "/exec" +
    "?act=n&email=" +
    emailch +
    "&edps=" +
    edpa +
    "&ppic=" +
    TPic +
    "&edid=" +
    edid +
    "&regtime=" +
    dtime +
    "&callback=ctrlqnacnt";

  var request = jQuery.ajax({
    crossDomain: true,
    url:
      "https://api.amrit-corp.com/_header/gate/mastrowall/?target_url=" +
      encodeURIComponent(url),
    method: "GET",
    dataType: "jsonp",
  });
}

function ctrlqnacnt(e) {
  inwallEdu();
}

function onstartswitch() {
  document.getElementById("switchclsrm").style.pointerEvents = "none";
  var emailch = $("#email").val();
  var pascd = $("#pcodeEdu").val();

  var ur1 = "https://script.google.com/macros/s/";
  var ur2 =
    "AKfycbwcmeadv7TnuLDzwgEeh2KH7XFlJ3ui-NiRLn7z3yBhDIwr0-gW1yFSKwb706n10OplQQ";
  var url =
    ur1 +
    ur2 +
    "/exec" +
    "?act=d&email=" +
    emailch +
    "&edps=" +
    pascd +
    "&callback=prcdswtch";

  var request = jQuery.ajax({
    crossDomain: true,
    url:
      "https://api.amrit-corp.com/_header/gate/mastrowall/?target_url=" +
      encodeURIComponent(url),
    method: "GET",
    dataType: "jsonp",
  });
}

function prcdswtch(e) {
  if (e.result === "Second class found") {
    $("#switchnoti").slideDown();
    document.getElementById("switchnoti").innerHTML =
      "Switch to Class: " +
      e.class +
      " <svg xmlns='http://www.w3.org/2000/svg fill='currentColor' width='20px' height='20px' style='background-color:white;margin-left:10px;padding:2px;margin-top:-4px;' class='bi bi-arrow-left-right' viewBox='0 0 16 16'>" +
      "<path fill-rule='evenodd' d='M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z'/></svg>";
    setTimeout(function () {
      $("#switchnoti").slideUp();
    }, 6000);
    document.getElementById("switchclsrm").innerHTML =
      "<div class='switchmenu' onclick='switchprof()'><svg xmlns='http://www.w3.org/2000/svg fill='currentColor' class='bi bi-arrow-left-right' viewBox='0 0 16 16'>" +
      "<path fill-rule='evenodd' d='M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z'/></svg>" +
      " | <span class='cardd'>" +
      e.id +
      "<input id='andpass' value='" +
      e.pass +
      "'></span></div>";
    document.getElementById("switchclsrm").style.pointerEvents = "auto";
    document.getElementById("crtnewadjacnt").style.display = "none";
  }
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
  const container = document.getElementById("examContainer");
  const loading = document.getElementById("loading");
  loading.style.display = "block";
  container.innerHTML = "";
  $("#prevsttod").empty();
  $("#prevexperform").empty();
  $("#prevsttod").html(`<div style="padding: 40px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style="color: #8a8a8b"
                  width="60"
                  height="60"
                  fill="currentColor"
                  class="bi bi-info-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                  />
                </svg>
                <br />
                <br />
                <p>No Stored TOD for Students.</p>
              </div>`);

  $("#prevexperform").html(`<div class="nosvdexm">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="color: #8a8a8b"
                    width="60"
                    height="60"
                    fill="currentColor"
                    class="bi bi-info-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                    />
                  </svg>
                </p>
                <p>No saved exams for Students.</p>
              </div>`);
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
  if (strlen <= 400) {
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
    $("#subcmntbx").attr("disabled", false);
    return false;
  }
  $("#subcmntbx").attr("disabled", false);
  clsrmcmntfm.reset();
});
document.getElementById("medcmmnt").addEventListener("input", checkchlimit);
function checkchlimit() {
  var subcmntbx = document.getElementById("subcmntbx");
  var strmn = encodeURIComponent(JSON.stringify($("#medcmmnt").val()));
  var length = strmn.length;
  if (length > 400) {
    subcmntbx.value = "Character limit exceeded!";
    subcmntbx.disabled = true;
  } else {
    subcmntbx.value = "Submit";
    subcmntbx.disabled = false;
  }
}
function ctrlqcmnt(e) {
  document.getElementById("rfrshcmtsv").style.animation = "none";
  $("#rfshcmntbx").prop("disabled", false);
  $("#rfshcmntbx").css("pointer-events", "auto").css("opacity", "1");
  var cmelm = e.result.split("{-/},");
  var cmntlen = cmelm.length;
  var comlem = document.getElementById("divcmntbx");
  totlcmnt((cmntlen - 1) / 6);
  var nmF = document.getElementById("mednam").innerText;
  if (cmntlen > 6) {
    $("#divcmntbx").empty();
    for (var k = 0; k <= cmntlen - 1; k += 6) {
      let content = cmelm[k + 5];
      try {
        if (content && content !== "undefined") {
          content = JSON.parse(content);
        } else {
          return;
        }
      } catch (err) {
        content = "[broken comment]";
      }
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
        content +
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
  document.getElementById("rfrshcmtsv").style.animation = "spin 2s infinite";
  $("#rfshcmntbx").prop("disabled", true);
  $("#rfshcmntbx").css("pointer-events", "none").css("opacity", "0.5");
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
    "Classroom Comments " + "(" + nof + ")";
}

function loadegames() {
  if (window.innerWidth < 1000) return;
  if (document.getElementById("egames") || document.getElementById("megame"))
    return;
  const egamesButton = document.createElement("div");
  egamesButton.className = "btn btn-primary";
  egamesButton.style.cssText = "width:95%;margin-top:10px;max-width:225px;";

  const egamesDiv = document.createElement("div");
  egamesDiv.id = "egames";
  egamesDiv.textContent = "E-Games 🎮";
  egamesDiv.onclick = () => {
    document.getElementById("megame").style.display = "block";
    $("#megame").slideDown("fast");
  };

  egamesButton.appendChild(egamesDiv);

  const dashicons = document.querySelectorAll(".dashicon");
  if (dashicons.length > 0) {
    const lastDashicon = dashicons[dashicons.length - 1];
    lastDashicon.parentNode.insertBefore(
      egamesButton,
      lastDashicon.nextSibling,
    );
  }

  const megameSection = document.createElement("section");
  megameSection.id = "megame";
  megameSection.style.cssText =
    "display:none;top:0px;left:0px;width:100%;height:100vh;position:fixed;z-index:9999999999 !important;margin:0px;padding:0px;";

  const iframe = document.createElement("iframe");
  iframe.src = "https://mastrowall.com/e-games/";
  iframe.style.cssText = "height:96vh;border:none;width:100%;";
  iframe.allowFullscreen = true;

  const closeBar = document.createElement("div");
  closeBar.style.cssText = `
  width: 100%;
  bottom: 0;
  position: fixed;
  height: 4vh;
  padding: 0 10px;
  background-color: black;
  cursor: pointer;
  color: #eee;
  display: flex;
  font-size:12px;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
`;

  const leftLabel = document.createElement("span");
  leftLabel.textContent = "E-Games | MASTROWALL";

  const closeText = document.createElement("span");
  closeText.textContent = "Close";
  closeText.onclick = () => {
    $("#megame").slideUp("fast");
  };

  closeBar.appendChild(leftLabel);
  closeBar.appendChild(closeText);

  closeBar.onclick = () => {
    $("#megame").slideUp("fast");
  };

  megameSection.appendChild(iframe);
  megameSection.appendChild(closeBar);

  document.body.appendChild(megameSection);
}
