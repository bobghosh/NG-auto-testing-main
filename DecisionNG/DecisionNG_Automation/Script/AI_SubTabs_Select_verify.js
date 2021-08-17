function AdditionalInfo_SubTab_Select_Verify(selectSubTab)
{ 
  
  let page = Aliases.browser.pageSapiensDecision2;
  
  let subTabs = page.FindElements("//*[@aria-hidden='false']//ul//li//span");
  
  Log.Message(subTabs.length);
  
  for(let i=0 ; i< subTabs.length; i++)
  {
    
    let tabText = subTabs[i].textContent;
    
    tabTextLowcase = tabText.substr(3).toLowerCase().trim();
    
    if(tabTextLowcase == selectSubTab.toLowerCase())
    {
      subTabs[i].Click();
      page.panel28.WaitProperty("VisibleOnScreen",false,50000);
      let attr= subTabs[i].getAttribute("class");

      if(attr.includes('tabs--selected'))
      {
        Log.Checkpoint(""+selectSubTab+" Tab is selected successfully");
        break;
      }
      
      else
      {
        Log.Error(""+selectSubTab+" Tab is not selected");
        break;
      }

    }
  }
  
}
