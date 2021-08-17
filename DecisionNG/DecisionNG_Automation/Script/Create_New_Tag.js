var Revision_Buttons = require("Revision_Buttons");
function Create_New_Tag(TagName)
{
//  let TagName  = "Varsha";
  
  //User should be on Revision Page
  //Create New Tag
  Revision_Buttons.Tag_button().Click(); 
  
  //Verify the Create New Tag pop up and enter the Tag Name
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Create New Tag");
    
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(TagName);
  
  Delay(500);
  //button[@class='btn primary spec-confirmed']
  //Aliases.browser.pageSapiensDecision.FindElement("//button[@class='btn primary spec-confirmed']").Click();
  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  
  //Verify the TagName in the breadcrumb
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnode11_new.textnode11.textnode12.linkClone.textnodeNameLatest, "contentText", cmpContains, TagName , false);
  
  

}
