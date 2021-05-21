var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");
function Add_Approval_Strategy()
{   
  let ApprovalStrategy = "Yes";
  let ChangeAS = "Yes";
  let NumberOfUserAll = 2;
  let NumberOfUserAny = 2;
  let DistinctUser = "Yes";
  
  let ApprovalStrategyTab = Aliases.browser.pageSapiensDecision2.linkApprovalStrategy.textnode9;
  if(ApprovalStrategy == "Yes")
  {
    if(ApprovalStrategyTab.getAttribute("class").includes("pi-chevron-right"))
    {
      ApprovalStrategyTab.click();
    }
    
    let AS = Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2;
    let ImportAS = Aliases.browser.pageSapiensDecision.form.form2.form4.textbox3;
    aqObject.CheckProperty(AS, "Text", cmpEqual, "None");
    aqObject.CheckProperty(ImportAS, "Text", cmpEqual, "Automatically Approved");
    
    if(ChangeAS =="Yes")
    {
        let DDValue1 = "All" ;
        Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[@class='spec-approval-strategy-value']//button").click();
        SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(DDValue1,"No");
  
        Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[@class='spec-import-approval-strategy-value']//button").click();
        SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown("Per Approval Strategy", "No");
        
        if(DDValue1 == "All")
        {          
        
        let MessageforAll = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-approval-strategy--approver-list__datagrid']//tbody//span");
        aqObject.CheckProperty(MessageforAll, "Text", cmpEqual, "At least one approver has to be selected for Approval Strategy 'ALL'");
         
        if(DistinctUser == "Yes")
          {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='slider round ng-star-inserted']").click();
          } 
        
          
          for (let i = 1; i<= NumberOfUserAll ; i++)
          {
            //Click on Add
            Aliases.browser.pageSapiensDecision2.FindElement("//button[@class='approval-strategy--add-btn dcn-light-button--dark']").click();
            Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[contains(@class,'spec-approval-strategy--approver-list__datagrid__combo-box')]//button").click();
            if(i == 1)
            {
            SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown("Vars", "No");
            }
            else if(i == 2)
            {
              SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown("Sumant", "No");
            }
            
            Aliases.browser.pageSapiensDecision2.FindElement("//i[@class='icon-valid']").click();
            
          }       
        }
        else if (DDValue1 = "Any" || "ALL")
        {
          let MessageforAny = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-approval-strategy--approver-list__datagrid']//tbody//span");
          aqObject.CheckProperty(MessageforAny, "Text", cmpEqual, "At least one approver has to be selected for Approval Strategy 'ANY'");
          
          if(DistinctUser == "Yes")
          {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='switch']").click();
          }  
          
          for (let j = 1; j<= NumberOfUserAny ; j++)
          {            
            //Click on Add
            
          }     
          
          
        }
    }
    
  }
}