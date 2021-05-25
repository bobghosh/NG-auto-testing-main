function Add_Model_Definition(ModelDefinitionName)
{
  //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageSapiensDecision.buttonSendToGlossary object equals 'Add'.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.buttonSendToGlossary, "ObjectLabel", cmpEqual, "Add");
  //Checks whether the 'Enabled' property of the Aliases.browser.pageSapiensDecision.buttonSendToGlossary object equals True.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.buttonSendToGlossary, "Enabled", cmpEqual, true);
  //Clicks the 'buttonSendToGlossary' button.
  Aliases.browser.pageSapiensDecision.buttonSendToGlossary.ClickButton();
  //Clicks the 'form' control.
  Aliases.browser.pageSapiensDecision.form.Click();
  //Sets the text 'Test12341' in the 'form' text editor.
  Aliases.browser.pageSapiensDecision.form.SetText(ModelDefinitionName);
  //Clicks the 'textnode7' control.
  Aliases.browser.pageSapiensDecision2.textnode7.Click();
  
}