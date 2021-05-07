function NewTabVerification(FactTypeNameparameter)
{
  let Tabs =  Aliases.browser.pageSapiensDecision.FindElement("//div[@class='import-glossary__analysis spec-import-glossary__analysis ng-star-inserted']//ul//li[1][@role='presentation']");
  let TabName = Tabs.textContent;
  
  if(TabName.charAt(TabName.length-2) > 0)
  {
  
      let NewFactTypecheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New (')]//dcn-checkbox");
      if(NewFactTypecheckbox.getAttribute("ng-reflect-model") == "false")
    	{
    			NewFactTypecheckbox.click();
          Log.Checkpoint("All the Fact Types are Selected");           
    	}
      else
      {
           Log.Message("Already the Fact Types are Selected");
      }
  
      let NewFactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@ng-reflect-header,'New (')]//p-listbox//ul//li");
    
      for (var i = 1; i<=NewFactTypeList.length; i++)
      {
        let NewFactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New (')]//p-listbox//ul//li[" +i+ "]");
        NewFactTypeName.click();
      
        let textbox = Aliases.browser.pageSapiensDecision.form.form2;
        let textbox2 = textbox.form3;
        let textbox3 = textbox2.textboxName;
  
        aqObject.CheckProperty(textbox3, "Text", cmpEqual, FactTypeNameparameter);
        aqObject.CheckProperty(textbox3, "Enabled", cmpEqual, false);
  
        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New (')]//textarea"), "isContentEditable", cmpEqual, false);
    
        let NewFTSingleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@ng-reflect-header,'New (')]//*[@aria-label='Single Value']");
        if(NewFTSingleValuebutton.getAttribute("class").includes("ui-state-disabled"))
        {
            Log.Message("Single Value Button is disabled");
        }
        else
        {
            Log.Error("List Indicator is Enabled");
        }
    
        let NewFTMultipleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@ng-reflect-header,'New (')]//*[@aria-label='Multiple Values']");
        if(NewFTMultipleValuebutton.getAttribute("class").includes("ui-state-disabled"))
        {
            Log.Message("Multiple Value Button is disabled");
        }
        else
        {
            Log.Error("List Indicator is Enabled");
        }
      
        let NewFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New (')]//*[@name='dataType']//input");
        if(NewFTDataType.getAttribute("disabled") == "true")
        {
            Log.Message("Data Type is disabled");
        }
        else
        {
            Log.Error("Data Type field is Enabled");
        }
    
        let NewFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New (')]//*[@name='displayFormat']//input");
        if(NewFTDispayFormat.getAttribute("disabled") == "true")
        {
            Log.Message("Display Format is disabled");
        }
        else
        {
            Log.Error("Display Format field is Enabled");
        }
    
        let NewFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@ng-reflect-header,'New (')]//*[@name='allowedValues']");
        if(NewFTAllowedValues.getAttribute("ng-reflect-disabled").includes("true"))
        {
            Log.Message("Allowed Value is disabled");
        }
        else
        {
            Log.Error("Enabled");
        }
      
        Log.Message(NewFTAllowedValues.getAttribute("ng-reflect-model"));  
    }
  }
  else if(TabName.charAt(TabName.length-2) == 0)
  {
      Log.Message("File doesn't hold FactTypes");
  }
  
}
module.exports.NewTabVerification = NewTabVerification;