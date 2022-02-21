﻿var Navigate_to_Deployment_History = require("Navigate_to_Deployment_History");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
var Buttons_Actions = require("Buttons_Actions");
var WaitElement_ispresent = require("WaitElement_ispresent");
//var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");

var Revision_Buttons = require("Revision_Buttons");
function Tag_Deploy_Verify_Deployed_Tag_Status(deployment_Environment,ApprovalStrategy)
{  
  //verify if the revision is tagged else tag first
  let tagUntagBtn = Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh ']//parent::span//following-sibling::span[1]")
  let tagUntagText = tagUntagBtn.textContent.trim();
  if(tagUntagText == "Untag")
  {
    Log.Checkpoint("Revision is Tagged")
  }
  else
  {
    Log.Warning("Revision is not Tagged it is Snapshot")
    tagUntagBtn.Click()
    Aliases.browser.pageSapiensDecision.FindElement("//*[@name='tagName']").SetText("Tag")
    Buttons_Actions.okButtonClick();
    Delay(1000)
    WaitElement_ispresent.Wait_Until_Element_ispresent("//*[text()='Deploy ']")
  }
  
  
  //Click on Deploy button for Revision
  Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Deploy ']").ClickButton();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Deploy Tag");
  
  let Project_Name = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-project-name-label']//span/label");
  Log.Message(Project_Name.textContent)
  
  let Deploy_Name = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-deploy-name-label']//input");
  Log.Message(Deploy_Name.Text)
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-revision-environment//button").ClickButton()
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(deployment_Environment, "No");
  
  let Environment_Type = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-environment-details']//*[@label='Environment type']//span/label");
  Log.Message(Environment_Type.textContent)
  
  let Format_Adapter = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-environment-details']//*[@label='Format adapter']//span/label");
  Log.Message(Format_Adapter.textContent)
  
  let Repository_Adapter = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-environment-details']//*[@label='Repository adapter']//span/label");
  Log.Message(Repository_Adapter.textContent)
  
  let Model_Definition = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-environment-details']//*[@label='Model definition']//span/label");
  Log.Message(Model_Definition.textContent)
  
  let Model_Version = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-environment-details']//*[@label='Model version']//span/label");
  Log.Message(Model_Version.textContent)
  
  Delay(300);
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
  //Deploy pop up should be closed  
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panel16, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panel16, "contentText", cmpEqual, "Deployment task submission has started and may take a while to complete");  Aliases.browser.pageSapiensDecision.panel16.click();

  //Pop up for Deployment pop up submitted successfully
  Aliases.browser.pageSapiensDecision2.panelRevisionTaskValidation.WaitProperty("Exists",true, 100000);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panelRevisionTaskValidation, "Exists", cmpEqual, true);
  Log.Message(Aliases.browser.pageSapiensDecision2.panelRevisionTaskValidation.textContent);
  Aliases.browser.pageSapiensDecision2.panelRevisionTaskValidation.click(); 
  
  if(ApprovalStrategy == "Any" || ApprovalStrategy == "All")
  {
    Log.Message("Approval Strategy is set to " + ApprovalStrategy)
    Navigate_to_Deployment_History.Navigate_to_Deployment_History();
    
    Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr[1]"), 10000);
  
    let Status = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr[1]//td[2]");
  
    if(Status == "REQUESTED")
    {
      Log.Checkpoint("Deployment status is requested")
    }
    else
    {
      Log.Error("Deployment status is not Requested");
    }
  }
  else
  {
    Log.Message("Approval Strategy is set to None")    
  }
 
}