function ChangedTabVerification(FactTypeNameparameter)
{
  let ChangedFactTypecheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Changed (')]//dcn-checkbox");
  if(ChangedFactTypecheckbox.getAttribute("ng-reflect-model") == "false")
  {
     ChangedFactTypecheckbox.click();
     Log.Message("Fact Types are Selected");
  }
  else
  {
      Log.Message("Fact Types are already selected");
  }
            
  let ChangedFactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@ng-reflect-header,'Changed (')]//p-listbox//ul//li");
  
  for (var m = 1; m<=ChangedFactTypeList.length; m++)
  {
    let ChangedFactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Changed (')]//p-listbox//ul//li[" +m+ "]");
    ChangedFactTypeName.click(); 
    
    let textbox = Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName;
    aqObject.CheckProperty(textbox, "Text", cmpEqual, FactTypeNameparameter);
    aqObject.CheckProperty(textbox, "Enabled", cmpEqual, false);
      
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@ng-reflect-header,'Changed (')]//textarea"), "Enabled", cmpEqual, false);
    let ChangedFTSingleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Changed (')]//*[@aria-label='Single Value']");
    if(ChangedFTSingleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
        Log.Message("Single Value Button is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTMultipleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Changed (')]//*[@aria-label='Multiple Values']");
    if(ChangedFTMultipleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
        Log.Message("Multiple Value Button is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
    let ChangedFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Changed')]//*[@name='dataType']//input");
    if(ChangedFTDataType.getAttribute("disabled") == "true")
    {
        Log.Message("Data Type is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Changed')]//*[@name='displayFormat']//input");
    if(ChangedFTDataType.getAttribute("disabled") == "true")
    {
        Log.Message("Display Format is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Changed (')]//*[@name='allowedValues']");
    if(ChangedFTAllowedValues.getAttribute("ng-reflect-disabled") == "true")
    {
        Log.Message("Allowed Value is disabled");
    }else
    {
        Log.Error("Enabled");
    }
      
    Log.Message(OCR.Recognize(ChangedFTAllowedValues).FullText);
      
  }
}
module.exports.ChangedTabVerification = ChangedTabVerification;