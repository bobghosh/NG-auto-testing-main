var page = Aliases.browser.pageSapiensDecision2;

function AI_Verify_MainTab_Selected(selectMainTab)
{
  let mainTabs = page.FindElements("//p-tabview/div/ul/li[@role='presentation']/a")
  //Log.Message(mainTabs.length)
  for(let i=0 ; i< mainTabs.length; i++)
  {
    let tabText = mainTabs[i].textContent;
    //Log.Message(tabText)
    if(tabText.toLowerCase() == selectMainTab.toLowerCase())
    {
      var istabSelected = mainTabs[i].getAttribute('aria-selected');
      if(istabSelected == 'true')
      {
        Log.Checkpoint(selectMainTab+" Tab is selected");
        break;
      }
      else{
        Log.Error(selectMainTab+" Not Selected ")
      }
    }
  }
}


function AI_Verify_SubTab_Selected(selectSubTab)
{
  let subTabs = page.FindElements("//*[@aria-hidden='false']//ul//li//span");
  
 // Log.Message(subTabs.length);
  
  for(let i=0 ; i< subTabs.length; i++)
  {
    let tabText = subTabs[i].textContent;
    
    tabTextLowcase = tabText.substr(2).toLowerCase().trim();
    
    if(tabTextLowcase == selectSubTab.toLowerCase())
    {
      let classofSubTasbs = subTabs[i].getAttribute('class')
      //Log.Message(classofSubTasbs)
      if(classofSubTasbs.includes('tabs--selected'))
        {
          Log.Checkpoint(selectSubTab+" Tab is selected");
        }
      else
      {
        Log.Error(selectSubTab+" Tab is not selected");
      }
    }
  }
}