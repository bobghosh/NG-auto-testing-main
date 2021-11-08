function AI_Click_Close()
{
  var page = Aliases.browser.pageSapiensDecision2;
  let ai_Closebtn = page.FindElement("//dcn-additional-info-side-bar//a[@role='button']");
  let add_Info_Panel = page.FindElement("//dcn-additional-info-side-bar//*[contains(@class,'ui-sidebar-right')]");
  
  ai_Closebtn.Click();
  Delay(1000);
  
  let add_Info_Panel_ClassAfter = add_Info_Panel.getAttribute('class');
  
  if(add_Info_Panel_ClassAfter.includes('ui-sidebar-active'))
  {
    Log.Error("Additional Information Panel not closed");
  }
  else
  {
    Log.Checkpoint("Additional Information Panel is closed Successfully");
  }
}