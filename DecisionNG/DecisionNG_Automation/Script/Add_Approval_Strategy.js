var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");

function Add_Approval_Strategy(AprrovalStrategy, ImportApprovalStrategy, DistinctUser, Users)
{   

  let ApprovalStrategyTab = Aliases.browser.pageSapiensDecision2.linkApprovalStrategy.textnode9;
  if(ApprovalStrategyTab.getAttribute("class").includes("pi-chevron-right"))
  {
    ApprovalStrategyTab.click();
  }
    
  Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-approval-strategy-value']//button").click();
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(AprrovalStrategy,"No");
  
  Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[@class='spec-import-approval-strategy-value']//button").click();
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(ImportApprovalStrategy, "No");
        
  var element = Aliases.browser.pageSapiensDecision2.FindElement("//div/dcn-switch-button/div/div[2]/label/div/div");
  var style = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element, "");
    
  if((style.background).includes("rgb(74, 207, 246)"))
  {
      Log.Message("It is Already checked");
      if(DistinctUser == "No")
      {
        element.Click();
        //Don't Select Distinct User       
      }
  }
  else if((style.background).includes("rgb(221, 221, 221)"))
  {
    Log.Message("It is not checked"); 
    if(DistinctUser == "Yes")
    {
      element.Click();
      //Select Distinct User
    }
  } 

  if(AprrovalStrategy == "All")
  {          
        
    let MessageforAll = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'approval-strategy--add-btn')]");
    aqObject.CheckProperty(MessageforAll, "textContent", cmpEqual, "At least one approver has to be selected for Approval Strategy 'ALL'");
  }
  else if(AprrovalStrategy == "Any")
  {
    let MessageforAny = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-approval-strategy--approver-list__datagrid']//tbody//span");
    aqObject.CheckProperty(MessageforAny, "textContent", cmpEqual, "At least one approver has to be selected for Approval Strategy 'ANY'");       
  }
  
  let User_array = Users.split(',');
  for(let i = 0; i < User_array.length; i++)
  {
    
    Aliases.browser.pageSapiensDecision2.FindElement("//button[@class='approval-strategy--add-btn dcn-light-button--dark']").click();
    Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[contains(@class,'spec-approval-strategy--approver-list__datagrid__combo-box')]//button").click();
    
    SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(User_array[i],'No');

    Aliases.browser.pageSapiensDecision2.FindElement("//i[@class='icon-valid']").click();
            
    }       
    
}
          
          

    
  
