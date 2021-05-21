function Add_New_Model_Definition(ModelDefinitionName)
{
  //Sets the text 'Test12341' in the 'textbox6' text editor.
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox6.SetText(ModelDefinitionName);
  //Clicks the 'linkMoreDetails' link.
  Aliases.browser.pageSapiensDecision2.formF.form.linkMoreDetails.Click();
  //Checks whether the 'Text' property of the Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName object equals 'Test12341'.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName, "Text", cmpEqual, ModelDefinitionName);  

}