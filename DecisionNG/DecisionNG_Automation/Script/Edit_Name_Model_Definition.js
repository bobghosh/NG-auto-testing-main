function Edit_Name_Model_Definition(UpdatedName)
{
  let NameField = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='name']");
  
  NameField.SetText(UpdatedName);
  
  aqObject.CheckProperty(NameField, "Text", cmpEqual, UpdatedName); 
  
}