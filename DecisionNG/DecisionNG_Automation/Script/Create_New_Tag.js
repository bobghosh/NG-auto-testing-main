var Revision_Buttons = require("Revision_Buttons");
function Create_New_Tag(TagName)
{
//  let TagName  = "Varsha";
  
  //User should be on Revision Page
  //Create New Tag
  Revision_Buttons.Tag_button().Click(); 
  
  //Verify the Create New Tag pop up and enter the Tag Name
  //  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Create New Tag");
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Create New Tag");
   
  Aliases.browser.pageSapiensDecision.FindElement("//*[@name='tagName']").SetText(TagName);
  
  Delay(500);
  //Aliases.browser.pageSapiensDecision.FindElement("//button[@class='btn primary spec-confirmed']").Click();
//  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
  
  //Verify the TagName in the breadcrumb
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.linkTest23Latest.textnodeTest23Latest, "contentText", cmpContains, TagName, false);
}