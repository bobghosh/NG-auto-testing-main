﻿function AdditionalInfo_MainTabs_Select_Verify(selectMainTab)
{ 
  let page = Aliases.browser.pageSapiensDecision2;
  
  let mainTabs = page.FindElements("//p-tabview/div/ul/li[@role='presentation']/a")
  Log.Message(mainTabs.length)
  for(let i=0 ; i< mainTabs.length; i++)
  {
    let tabText = mainTabs[i].textContent;
    Log.Message(tabText)
    if(tabText.toLowerCase() == selectMainTab.toLowerCase())
    {
      mainTabs[i].Click();
      page.panel28.WaitProperty("VisibleOnScreen",false,50000);      
      let attr= mainTabs[i].getAttribute("aria-selected");
      Log.Message(attr)
      if(attr == 'true')
      {
        Log.Checkpoint(""+selectMainTab+" Tab is selected successfully");
        break;
      }
      
      else
      {
        Log.Error(""+selectMainTab+" Tab is not selected");
        break;
      }
      
    }
  }
  
}
