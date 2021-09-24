function NewTabVerification(FactTypeNameparameter)
{
  let Tabs =  Aliases.browser.pageSapiensDecision.FindElement("//div[@class='import-glossary__analysis spec-import-glossary__analysis ng-star-inserted']//ul//li[1][@role='presentation']");
  let TabName = Tabs.textContent;
  
  if(TabName.charAt(TabName.length-2) > 0)
  {
  
      let NewFactTypecheckbox = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//dcn-checkbox[contains(@class,'spec-multi-selectable-checkbox__header__checkbox')]//span");
      if(NewFactTypecheckbox.getAttribute("class").includes("pi pi-check"))
    	{
        Log.Message("Already the Fact Types are Selected");         
    	}
      else
      {
        Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//dcn-checkbox[contains(@class,'spec-multi-selectable-checkbox__header__checkbox')]//div[2]").click();
        Log.Checkpoint("All the Fact Types are Selected");  
      }
  
      let NewFactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//p-tabpanel[1]//p-listbox//ul//li");
    
      for (var i = 1; i<=NewFactTypeList.length; i++)
      {
        let NewFactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//p-listbox//ul//li[" +i+ "]");
        NewFactTypeName.click();
      
        let textbox = Aliases.browser.pageSapiensDecision.form.form2;
        let textbox2 = textbox.form3;
        let textbox3 = textbox2.textboxName;
  
        aqObject.CheckProperty(textbox3, "Text", cmpEqual, FactTypeNameparameter);
        aqObject.CheckProperty(textbox3, "Enabled", cmpEqual, false);
  
        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//textarea"), "isContentEditable", cmpEqual, false);
    
        let NewFTSingleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[1]//*[@aria-label='Single Value']");
        if(NewFTSingleValuebutton.getAttribute("class").includes("ui-state-disabled"))
        {
            Log.Message("Single Value Button is disabled");
        }
        else
        {
            Log.Error("List Indicator is Enabled");
        }
    
        let NewFTMultipleValuebutton = Aliases.browser.pageSapiensDecision2.FindElement("//p-tabpanel[1]//*[@aria-label='Multiple Values']");
        if(NewFTMultipleValuebutton.getAttribute("class").includes("ui-state-disabled"))
        {
            Log.Message("Multiple Value Button is disabled");
        }
        else
        {
            Log.Error("List Indicator is Enabled");
        }
      
        let NewFTDataType = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//*[@name='dataType']//input");
        if(NewFTDataType.getAttribute("disabled") == "true")
        {
            Log.Message("Data Type is disabled");
        }
        else
        {
            Log.Error("Data Type field is Enabled");
        }
    
        let NewFTDispayFormat = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//*[@name='displayFormat']//input");
        if(NewFTDispayFormat.getAttribute("disabled") == "true")
        {
            Log.Message("Display Format is disabled");
        }
        else
        {
            Log.Error("Display Format field is Enabled");
        }
    
        let NewFTAllowedValues = Aliases.browser.pageSapiensDecision.FindElement("//p-tabpanel[1]//*[@name='allowedValues']//input");
        if(NewFTAllowedValues.getAttribute("disabled") == ("true"))
        {
            Log.Message("Allowed Value is disabled");
        }
        else
        {
            Log.Error("Allowed Value is Enabled");
        }
  
    }
  }
  else if(TabName.charAt(TabName.length-2) == 0)
  {
      Log.Message("File doesn't hold FactTypes");
  }
  
}
module.exports.NewTabVerification = NewTabVerification;