The purpose of these scripts are to automatically sign you in to SonicWall. This works by logging you off after 89 minutes and then relogging you in. If you need it shorter or longer than that change the "timer" variable. 

In order to use these scripts you will need to add the TamperMonkey extension to your browser:
  -For Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
  -For Firefox: https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
  -For Safari: https://www.tampermonkey.net/?browser=safari

Then in the upper right hand corner of your browser click on the TamperMonkey icon (it looks like a square with two circles on it). In the dropdown on select "Dashboard". Next create a new script by clicking on the tab with a + sign on it. For each script listed here on GitHub create a new script and just copy my code into TamperMonkey.
 
IMPORTANT: 
-In the SonicWall Auth script insert your username in between the quotation marks where it says UserName and where it says password.
-Lastly do not close the SonicWall windows as this will close the scripts as well.