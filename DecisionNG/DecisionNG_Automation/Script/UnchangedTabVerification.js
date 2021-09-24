function UnchangedTabVerification(FactTypeNameparameter)
{
  let UnchangedFactTypes = Aliases.browser.pageSapiensDecision.FindElements("//p-tabpanel[5]//p-listbox//ul//li");
  for (var l = 1; l<=UnchangedFactTypes.length; l++)
  {
    let UnchangedFactType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[5]//p-listbox//ul//li["+l+"]");
    UnchangedFactType.Click();
    
    let textbox = Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName;
    aqObject.CheckProperty(textbox, "Text", cmpEqual, FactTypeNameparameter);
    aqObject.CheckProperty(textbox, "Enabled", cmpEqual, false);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[5]//textarea"), "Enabled", cmpEqual, false);
    
    let UnchangedFTSingleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[5]//*[@aria-label='Single Value']");
    if(UnchangedFTSingleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
        Log.Message("Single Value Button is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
              
    let UnchangedFTMultipleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[5]//*[@aria-label='Multiple Values']");
    if(UnchangedFTMultipleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
        Log.Message("Multiple Value Button is disabled");
    }
    else
    {
        Log.Error("Enabled");                     
    }
             
    let UnchangedFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[5]//*[@name='dataType']//input");
    if(UnchangedFTDataType.getAttribute("disabled") == "true")
    {
        Log.Message("Data Type is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
             
    let UnchangedFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[5]//*[@name='displayFormat']//input");
    if(UnchangedFTDataType.getAttribute("disabled") == "true")
    {
        Log.Message("Display Format is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }
              
    let UnchangedFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[5]//*[@name='allowedValues']//input");
    if(UnchangedFTAllowedValues.getAttribute("disabled") == "true")
    {
        Log.Message("Allowed Value is disabled");
    }
    else
    {
        Log.Error("Enabled");
    }    
  }
}
module.exports.UnchangedTabVerification = UnchangedTabVerification;