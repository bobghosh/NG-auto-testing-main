function Edit_Custom_Properties()
{
  
      let CustomProperty_Name = "";
      let NewCPName = "NewCp";
      let RenameCP = "Yes";
      let MarkRequired = "Yes";
      let MarkRetired = "Yes";
      let UpdateDataType = "Yes";
      let DataType = "Numeric";
      let UpdateDisplayFormat = "Yes";
      let DisplayFormat = "";
      let UpdateAllowedValue = "Yes";
      let AllowedValue = "";
      
      Aliases.browser.pageSapiensDecision.FindElement("(//input[@placeholder='filter'])[2]").SetText(CustomProperty_Name);
      Delay(5000);
      CustomPropertiesCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-custom-properties-details//tbody//tr");
      Log.Message(CustomPropertiesCount.length);
      for(var j = 1; j <= CustomPropertiesCount.length ; j++)
      {
        var SelectedCustomProperty = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[1]");
        if(SelectedCustomProperty.textContent.trim() == CustomProperty_Name )
        {
          SelectedCustomProperty.Click();
          break;
        }
  
      }
      
      if(RenameCP == "Yes")
      {
        let CPName = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']//*[@name='name']");
        CPName.SetText(NewCPName);
        aqObject.CheckProperty(CPName, "contentText", cmpEqual, NewCPName);        
      }
      
      if(MarkRequired == "Yes")
      {
        Aliases.browser.pageSapiensDecision.FindElement("//*[@name='required']").Click();        
      }
      
      if(MarkRetired == "Yes")
      {
        Aliases.browser.pageSapiensDecision.FindElement("//*[@name='retired']").Click();        
      }
      
      if(UpdateDataType == "Yes")
      {
        Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='dataType']//button").Click();
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(DataType,"No")
      }
      
      if(UpdateDisplayFormat == "Yes")
      {
        Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='displayFormat']//button").Click();
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(DisplayFormat,"No")
      }
      if(UpdateAllowedValue == "Yes")
      {
        Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='allowedValues']//button").Click();
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(AllowedValue,"No")
      }
      
       Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
      
      Aliases.browser.pageSapiensDecision.FindElement("(//input[@placeholder='filter'])[2]").SetText(RenameCP);
      Delay(5000);
      CustomPropertiesCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-custom-properties-details//tbody//tr");
      Log.Message(CustomPropertiesCount.length);
      for(var j = 1; j <= CustomPropertiesCount.length ; j++)
      {
            var SelectedCustomProperty = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[1]");
            //Log.Message(SelectedCustomProperty.textContent);
            
            //If the Item Name matches 
            if(SelectedCustomProperty.textContent.trim() == RenameCP )
            {          
                   Log.Message("Check");
                  if (Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[2]").textContent.trim().toUpperCase() == DataType.toUpperCase())
                  {
                    Log.Checkpoint("Data Type matches");
                  }
                  else
                  {
                    Log.Error("Data Type is different");
                  }
                  
                  if (Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[3]").textContent.trim().toUpperCase() == DisplayFormat.toUpperCase())
                  {
                    Log.Checkpoint("Display Format matches");
                  }
                  else
                  {
                    Log.Error("Display Format is different");
                  }
                  
                  if (Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[4]").textContent.trim().toUpperCase().replace("_", " ") == AllowedValue.toUpperCase())
                  {
                    Log.Checkpoint("Allowed Value matches");
                  }
                  else
                  {
                    Log.Error("Allowed Value is different");
                  }
                  
                  if (Required == "Yes")
                  {
                    if(Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[5]").textContent.trim() == "Required")
                    {
                    Log.Checkpoint("Property is marked Required");
                    }
                    else
                    {
                      Log.Error("Property is marked Required but not shown in Custom Properties detail screen");
                    }
                  }
                  else
                  {
                    Log.Checkpoint("Required is not marked");
                  }                   
                    
                   
                   flag =1;  
             }
             if(flag == 1)
             {
                break;
             }
        }
}