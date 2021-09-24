function ChangedTabVerification(FactTypeNameparameter)
{
  let ChangedFactTypecheckbox = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//dcn-checkbox[contains(@class,'spec-multi-selectable-checkbox__header__checkbox')]//span");
  if(ChangedFactTypecheckbox.getAttribute("class").includes("pi pi-check"))
	{
    Log.Message("Already the Fact Types are Selected");         
	}
  else
  {
    Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//dcn-checkbox[contains(@class,'spec-multi-selectable-checkbox__header__checkbox')]//div[2]").click();
    Log.Checkpoint("All the Fact Types are Selected");  
  }
            
  let ChangedFactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//p-tabpanel[3]//p-listbox//ul//li");
  
  for (var m = 1; m<=ChangedFactTypeList.length; m++)
  {
    let ChangedFactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//p-listbox//ul//li[" +m+ "]");
    ChangedFactTypeName.click(); 
    
    let textbox = Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName;
    aqObject.CheckProperty(textbox, "Text", cmpEqual, FactTypeNameparameter);
    aqObject.CheckProperty(textbox, "Enabled", cmpEqual, false);
      
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[3]//textarea"), "Enabled", cmpEqual, false);
    let ChangedFTSingleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//*[@aria-label='Single Value']");
    if(ChangedFTSingleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
        Log.Message("Single Value Button is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTMultipleValuebutton = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//*[@aria-label='Multiple Values']");
    if(ChangedFTMultipleValuebutton.getAttribute("class").includes("ui-state-disabled"))
    {
        Log.Message("Multiple Value Button is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
    let ChangedFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//*[@name='dataType']//input");
    if(ChangedFTDataType.getAttribute("disabled") == "true")
    {
        Log.Message("Data Type is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//*[@name='displayFormat']//input");
    if(ChangedFTDataType.getAttribute("disabled") == "true")
    {
        Log.Message("Display Format is disabled");
    }else
    {
        Log.Error("Enabled");
    }
              
   let ChangedFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[3]//*[@name='allowedValues']//input");
    if(ChangedFTAllowedValues.getAttribute("disabled") == "true")
    {
        Log.Message("Allowed Value is disabled");
    }else
    {
        Log.Error("Enabled");
    }      
  }
}
module.exports.ChangedTabVerification = ChangedTabVerification;