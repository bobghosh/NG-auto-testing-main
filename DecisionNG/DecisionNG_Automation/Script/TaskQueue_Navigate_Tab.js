function TaskQueue_Tab_Selection(Tab)
{
  //dcn-tasks-container/dcn-tab-view/p-tabview/div/ul/li
  
  //p-tabpanel//dcn-tab-view/p-tabview/div/ul/li
//  let Tab = "Group Tasks";
  
  let taskQueue_Tabs = Aliases.browser.pageSapiensDecision.FindElements("//dcn-tasks-container/dcn-tab-view/p-tabview/div/ul/li");
  
  for(let i = 1; i <= taskQueue_Tabs.length; i++)
  {
    let tabName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-tasks-container/dcn-tab-view/p-tabview/div/ul/li["+i+"]//span");
    
    if(tabName.textContent.includes(Tab))
    {
      tabName.Click();
      break;
    }
    
  } 
  
}
