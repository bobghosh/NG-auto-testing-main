function Add_Model_Definition_Version()
{
    var element = Aliases.browser.pageSapiensDecision2.linkApprovalStrategy.label.panel15;  // Obtain the web element
    var style = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element, "");
    let backgroundcolor=style.background;
    let Active="rgb(74, 207, 246) none repeat scroll 0% 0% / auto padding-box border-box";
    let Inactive="rgb(221, 221, 221) none repeat scroll 0% 0% / auto padding-box border-box";
   
    if(backgroundcolor == Active )
    {
      Log.Message("It is checked")
     
      //Picture_To_Log.PictureToLog();
     
    }
    else if(backgroundcolor == Inactive)
    {
      Log.Message("It is not checked")
     
      //Picture_To_Log.PictureToLog();
    }
    else
    {
      Log.Error("Color of the toggle button might be changed");
    } 

}
