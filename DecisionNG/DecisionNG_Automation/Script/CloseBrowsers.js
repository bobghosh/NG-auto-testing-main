﻿var Picture_To_Log = require("Picture_To_Log");
function Close()
{

//  while (Sys.WaitBrowser().Exists)
//    Sys.WaitBrowser().Close();
//    if(Sys.Browser("Chrome"))
//    {
//      Sys.Browser("Chrome").Close();
//      Log.Message("Chrome Exists")
//    }
//Aliases.browser.ToUrl("chrome://extensions/")

Delay(5000)
 var PropArray, ValuesArray;
PropNames = new Array("processname", "index");

  PropValues = new Array("chrome", 1);



  var page = Sys.FindChild(PropNames, PropValues, 1);

  if(page.Exists)  
  Picture_To_Log.PictureToLog();
  Browsers.Item(btChrome).Run("chrome://extensions/");

  //Aliases.browser.Navigate("chrome://extensions/")
Delay(5000)
}



