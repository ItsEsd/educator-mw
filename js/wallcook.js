/* M A S T R O W A L L */
var ewfSetCookie = function (exdays, name) {
  var psmed = $("#email").val();
  var pswed = $("#pcodeEdu").val();
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
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
    btoa(pswed) +
    "; expires=" +
    expires +
    ";path=/;domain=mastrowall.com";
  document.getElementById("linkinfrm").src =
    "https://mastrowall.com/linkins/" + name;
  document.getElementById("srchfrm").src = "https://mastrowall.com/search";
};
function getCookie() {
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var p = 0; p < ca.length; p++) {
    var cookstrem = ca[p].split("mwallpswedus=");
    var cookstrkd = ca[p].split("mwallpswedud=");
    if (cookstrem[0] == 0) {
      var paem = window.atob(cookstrem[1]);
      document.getElementById("email").value = paem;
    } else if (cookstrkd[0] == 0) {
      var pacd = window.atob(cookstrkd[1]);
      document.getElementById("pcodeEdu").value = pacd;
      inwallEdu();
    }
  }
}
$(document).ready(function () {
  getCookie();
});
function deleteAllCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie =
      name +
      "=true;" +
      "expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=mastrowall.com";
  }
}

function signagn() {
  let stateObj = { id: "0" };
  window.history.replaceState(stateObj, "", "/");
  document.title = "Educator | MASTROWALL";
  deleteAllCookies();
  setTimeout(function () {
    location.reload();
  }, 2000);
}

$(document).ready(function () {
  var mn = "https://mastrowall.com/";
  // var mn = "http://127.0.0.1:5506/";
  var rcWidgetContainer = document.getElementById("rc-widget");

  var xhrHTML = new XMLHttpRequest();
  xhrHTML.onreadystatechange = function () {
    if (xhrHTML.readyState === 4 && xhrHTML.status === 200) {
      rcWidgetContainer.innerHTML = xhrHTML.responseText;
      loadScript(mn + "rc-widget/script.js");
      loadScript(mn + "/src-engines/scrpt.js");
    }
  };
  xhrHTML.open("GET", mn + "rc-widget/index.html");
  xhrHTML.send();
  $("<link>", {
    rel: "stylesheet",
    href: mn + "/rc-widget/style.css",
  }).appendTo("head");

  document.body.style.backgroundColor = "#cfcfcf";

  function loadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
  }
});

/* ===============================
   GistBox Link Interceptor
   =============================== */

(function () {
  const allowedDomains = [
    "library.mastrowall.in",
    "blog.mastrowall.in",
    "home.mastrowall.in",
  ];

  function isAllowedDomain(url) {
    try {
      const parsed = new URL(url, window.location.href);
      return allowedDomains.includes(parsed.hostname);
    } catch (e) {
      return false;
    }
  }

  function openInGistBox(url) {
    // showNotification("Opening external link in <u>GistBox</u>");
    setTimeout(() => {
      showGistBox(url);
    }, 1000);
  }

  /* -------------------------------
     1) Anchor <a target="_blank">
     ------------------------------- */
  document.addEventListener("click", function (e) {
    const anchor = e.target.closest("a");
    if (!anchor || anchor.target !== "_blank" || !anchor.href) return;

    if (!isAllowedDomain(anchor.href)) return;

    e.preventDefault();
    openInGistBox(anchor.href);
  });

  /* -------------------------------
     2) window.open interception
     ------------------------------- */
  const originalWindowOpen = window.open;

  window.open = function (url, target, features) {
    if (target === "_blank" && isAllowedDomain(url)) {
      openInGistBox(url);
      return null; // stop new tab
    }

    return originalWindowOpen.call(window, url, target, features);
  };
})();

function showGistBox(url) {
  document.body.style.overflowY = "hidden";
  let existinggist = document.getElementById("gistbox");
  if (existinggist instanceof HTMLElement) {
    existinggist.style.display =
      existinggist.style.display === "none" || !existinggist.style.display
        ? "block"
        : "none";
    updateFetchUrl(url);
  } else {
    const box = document.createElement("div");
    box.id = "gistbox";
    box.className = "gistbox";
    box.style.display = "block";
    const closeBtn = document.createElement("button");
    closeBtn.className = "gistbox-close";
    closeBtn.textContent = "Close GistBox";
    closeBtn.onclick = () => {
      box.style.display = "none";
      document.body.style.overflowY = "auto";
    };

    const iframe = document.createElement("iframe");
    iframe.src =
      "https://gistbox.mastrowall.com/?fetchurl=" + encodeURIComponent(url);
    iframe.className = "gistbox-iframe";
    iframe.id = "gistbox-iframe";
    iframe.allowFullscreen = true;
    box.appendChild(closeBtn);
    box.appendChild(iframe);
    document.body.appendChild(box);
  }
}

function updateFetchUrl(newUrl) {
  const iframegist = document.getElementById("gistbox-iframe");
  if (iframegist && iframegist.contentWindow) {
    iframegist.contentWindow.postMessage(
      {
        type: "navigatelinkins",
        url: newUrl,
        headtit: "Testing",
      },
      "https://gistbox.mastrowall.com/",
    );
  } else {
    console.warn("iframe not ready or not found");
  }
}
