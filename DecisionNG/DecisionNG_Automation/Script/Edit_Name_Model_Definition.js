function Edit_Name_Model_Definition()
{
  

  var timestamp = new Date();
  let numberunique = Date.now();
  
  let UpdatedName = "MD"+timestamp.getMilliseconds().toString() + "New" +numberunique;
  
  let NameField = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='name']");
  
  NameField.SetText(UpdatedName);
  
  aqObject.CheckProperty(NameField, "Text", cmpEqual, UpdatedName); 
  
  Project.Variables.CommonModelDefinitionName = UpdatedName;
  
}