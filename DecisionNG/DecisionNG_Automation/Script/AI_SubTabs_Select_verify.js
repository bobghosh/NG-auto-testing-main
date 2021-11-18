function AdditionalInfo_SubTab_Select_Verify(selectSubTab)
{ 
  let page = Aliases.browser.pageSapiensDecision2;
  
  let subTabs = page.FindElements("//*[@aria-hidden='false']//ul//li//span");
  
  Log.Message(subTabs.length);
  
  for(let i=0 ; i< subTabs.length; i++)
  {
    

    let tabText = subTabs[i].textContent;
    
    tabTextLowcase = tabText.substr(2).toLowerCase().trim();
    
    if(tabTextLowcase == selectSubTab.toLowerCase())
    {
      let classofSubTasbs = subTabs[i].getAttribute('class')
      Log.Message(classofSubTasbs)
      if(classofSubTasbs.includes('tabs--selected'))
        {
          Log.Checkpoint(selectSubTab+"Tab is already selected")
        }
      else
      {
      
      subTabs[i].Click();
      if(!i==subTabs.length-1)
      {
        page.panel28.WaitProperty("VisibleOnScreen",false,50000);
      }
      
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
  
}
