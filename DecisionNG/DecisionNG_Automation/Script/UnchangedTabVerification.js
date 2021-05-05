function UnchangedTabVerification(FactTypeNameparameter)
{
  let UnchangedFactTypes = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@ng-reflect-header,'Unchanged (')]//p-listbox//ul//li");
  for (var l = 1; l<=UnchangedFactTypes.length; l++)
  {
    let UnchangedFactType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[contains(@ng-reflect-header,'Unchanged')]//p-listbox//ul//li["+l+"]");
    UnchangedFactType.Click();
    
    let textbox = Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName;
    aqObject.CheckProperty(textbox, "Text", cmpEqual, FactTypeNameparameter);
    aqObject.CheckProperty(textbox, "Enabled", cmpEqual, false);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@ng-reflect-header,'Unchanged')]//textarea"), "Enabled", cmpEqual, false);
    
    let UnchangedFTSingleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@ng-reflect-header,'Unchanged (')]//*[@aria-label='Single Value']");
    if(UnchangedFTSingleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
        Log.Message("Single Value Button is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
              
    let UnchangedFTMultipleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@ng-reflect-header,'Unchanged (')]//*[@aria-label='Multiple Values']");
    if(UnchangedFTMultipleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
        Log.Message("Multiple Value Button is disabled");
    }
    else
    {
        Log.Error("Enabled");                     
    }
             
    let UnchangedFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Unchanged')]//*[@name='dataType']//input");
    if(UnchangedFTDataType.getAttribute("disabled") == "true")
    {
        Log.Message("Data Type is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
             
    let UnchangedFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Unchanged')]//*[@name='displayFormat']//input");
    if(UnchangedFTDataType.getAttribute("disabled") == "true")
    {
        Log.Message("Display Format is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
              
    let UnchangedFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'Unchanged (')]//*[@name='allowedValues']");
    if(UnchangedFTAllowedValues.getAttribute("ng-reflect-disabled").includes("true"))
    {
        Log.Message("Allowed Value is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
    
    Log.Message(OCR.Recognize(UnchangedFTAllowedValues).FullText);
    
  }
}
module.exports.UnchangedTabVerification = UnchangedTabVerification;