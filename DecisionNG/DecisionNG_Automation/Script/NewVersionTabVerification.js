function NewVersionTabVerification(FactTypeNameparameter)
{
  let NewVersionsFactTypecheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New Versions (')]//dcn-checkbox");
  if(NewVersionsFactTypecheckbox.getAttribute("ng-reflect-model") == "false")
  {
      NewVersionsFactTypecheckbox.click();
  }
  else
  {
      Log.Message("Fact Types are already selected");
  }
  
  let NewVersionFactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@ng-reflect-header,'New Versions (')]//p-listbox//ul//li");
            
  for (var j = 1; j<=NewVersionFactTypeList.length; j++)
  {
    let NewVersionFactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New Versions (')]//p-listbox//ul//li[" +j+ "]");
    NewVersionFactTypeName.click();
    
    let browser = Aliases.browser;
    let textbox = browser.pageSapiensDecision.form.form2;
    let textbox2 = textbox.form3;
    let textbox3 = textbox2.textboxName;
    
    aqObject.CheckProperty(textbox3, "Text", cmpEqual, FactTypeNameparameter);
    aqObject.CheckProperty(textbox3, "Enabled", cmpEqual, false);
      
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New Versions (')]//textarea"), "isContentEditable", cmpEqual, false);
    
    let NewVersionFTSingleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New Versions (')]//*[@aria-label='Single Value']");
    if(NewVersionFTSingleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
      Log.Message("Single Value Button is disabled");
    }else
    {
      Log.Error("Enabled");
    }
                
    let NewVersionFTMultipleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New Versions (')]//*[@aria-label='Multiple Values']");
    if(NewVersionFTMultipleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
      Log.Message("Multiple Value Button is disabled");
    }else
    {
      Log.Error("Enabled");
    }
    
    let NewVersionFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Versions (')]//*[@name='dataType']//input");
    if(NewVersionFTDataType.getAttribute("disabled") == "true")
    {
      Log.Message("Data Type is disabled");
    }else
    {
      Log.Error("Enabled");
    }
    
    let NewVersionFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Versions (')]//*[@name='displayFormat']//input");
    if(NewVersionFTDispayFormat.getAttribute("disabled")== "true")
    {
      Log.Message("Display Format is disabled");
    }else
    {
      Log.Error("Enabled");
    }
                
    let NewVersionFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Versions (')]//*[@name='allowedValues']");
    if(NewVersionFTAllowedValues.getAttribute("ng-reflect-disabled") == "true")
    {
      Log.Message("Allowed Value is disabled");
    }else
    {
      Log.Error("Enabled");
    }
    
    Log.Message(NewVersionFTAllowedValues.getAttribute("ng-reflect-model")); 
    
                
  }
}
module.exports.NewVersionTabVerification = NewVersionTabVerification;