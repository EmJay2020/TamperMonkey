// ==UserScript==
// @name         SonicWall Auth
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This will auto-fill the username and password fields and then press submit it for you.
// @author       You
// @match        https://10.20.51.1/auth1.html
// @grant        none


// ==/UserScript==
(function() {
    document.getElementById('userName').value ="MJacobs@shoryoshuv.org";
    document.getElementsByName("pwd")[0].value = "Qob55360";
    document.getElementsByName("Submit")[0].click();
})();