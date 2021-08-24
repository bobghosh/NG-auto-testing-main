var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
//var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");

var Revision_Buttons = require("Revision_Buttons");
function Tag_Deploy_Verify_Deployed_Tag_Status()
{
  //Click on Deploy button for Revision
  Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Deploy ']").ClickButton();
  
//  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Deploy Tag");
  
//  let Project_Name = Aliases.browser.pageSapiensDecision2.form7.labelVrsha156756.textContent;
//  let Deploy_Name = Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.Text;  
//  
//  Aliases.browser.pageSapiensDecision.form.form2.form4.button2.ClickButton();
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-revision-environment//button").ClickButton()

  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("DE", "No");
  
//  let Environment_Type = Aliases.browser.pageSapiensDecision2.form7.label3.textContent;
//  let Format_Adapter = Aliases.browser.pageSapiensDecision2.form7.label4.textContent;
//  let Repository_Adapter = Aliases.browser.pageSapiensDecision2.form7.label5.textContent;
//  let Model_Definition = Aliases.browser.pageSapiensDecision2.form7.label6.textContent;
//  let Model_Version = Aliases.browser.pageSapiensDecision2.form7.label7.textContent;
  
  Delay(300);
  
  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  //Deploy pop up should be closed  
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panelRevisionTaskValidation, "Exists", cmpEqual, true);
    
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panel16, "contentText", cmpEqual, "Deployment task submission has started and may take a while to complete");
  
  Aliases.browser.pageSapiensDecision.panel16.click();
  
//  Aliases.browser.pageSapiensDecision.FindElement("//*[text()=' Deployment task was submitted  ']").WaitProperty("Exists", true, 100000);
  Aliases.browser.pageSapiensDecision2.panelRevisionTaskValidation.WaitProperty("Exists",true, 100000);
  Log.Message(Aliases.browser.pageSapiensDecision2.panelRevisionTaskValidation.textContent);
  Aliases.browser.pageSapiensDecision2.panelRevisionTaskValidation.click(); 
  
  
}
