var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");
var Revision_Buttons = require("Revision_Buttons");
function Tag_Deploy_Verify_Deployed_Tag_Status()
{
  //Click on Deploy button for Revision
  Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Deploy ']").ClickButton();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Deploy Tag");
  
  let Project_Name = Aliases.browser.pageSapiensDecision2.form7.labelVrsha1.textContent;
  let Deploy_Name = Aliases.browser.pageSapiensDecision.form.form2.form4.textbox.Text;
  
  
  Aliases.browser.pageSapiensDecision.form.form2.form4.button2.ClickButton();
  
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown("DE", "No");
  
  let Environment_Type = Aliases.browser.pageSapiensDecision2.form7.labelUat.textContent;
  let Format_Adapter = Aliases.browser.pageSapiensDecision2.form7.labelDecisionExecutionDe.textContent;
  let Repository_Adapter = Aliases.browser.pageSapiensDecision2.form7.labelDecisionExecutionDe2.textContent;
  let Model_Definition = Aliases.browser.pageSapiensDecision2.form7.label3.textContent;
  let Model_Version = Aliases.browser.pageSapiensDecision2.form7.label4.textContent;
  
  Delay(300);
  
  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  //Deploy pop up should be closed  
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panel16, "contentText", cmpEqual, "Deployment task submission has started and may take a while to complete");
  
  Aliases.browser.pageSapiensDecision.panel16.click();
  
//  Aliases.browser.pageSapiensDecision.FindElement("//*[text()=' Deployment task was submitted  ']").WaitProperty("Exists", true, 100000);
  Aliases.browser.pageSapiensDecision2.panel35.WaitProperty("Exists",true, 100000);
  
  
  Log.Message(Aliases.browser.pageSapiensDecision2.panel35.textContent);
  Log.Message(Aliases.browser.pageSapiensDecision2.panel35.Text);
  Aliases.browser.pageSapiensDecision2.panel35.click();
  
//  Log.Message(Aliases.browser.pageSapiensDecision.FindElement("//*[text()=' Deployment task was submitted  ']").textContent);
  
//  Aliases.browser.pageSapiensDecision.FindElement("//*[text()=' Deployment task was submitted  ']").Click();
  
// aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel35, "Exists", cmpEqual, true);  
  
//  let TagsList = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@class,'i-table-frozen-view')]//tbody//tr");
//  
//  for(var i = 1; i <TagsList.length ; i++)
//  {
//    let TagName = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr["+i+"]//td[3]");
//  
//    if (TagName.textContent == "Varsha")
//    {
//      let Status = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-table-frozen-view')]//tbody//tr["+i+"]//td[2]");
//      
//  
//   if(Status.WaitProperty("textContent", "Requested", 100000) == false)
//   //booen
//      {
//        Log.Message(Status.textContent)
//      }
//      else
//      {
//        Log.Message("Asset is failed")
//      }
//
////for successful submission of deployment
////  let browser = Aliases.browser;
////  aqObject.CheckProperty(browser.pageSapiensDecision.panel17, "contentText", cmpEqual, "Deployment task was submitted");
////  aqObject.CheckProperty(browser.pageSapiensDecision2.panel35, "Exists", cmpEqual, true);
////  
//    }
//  }  
  
}