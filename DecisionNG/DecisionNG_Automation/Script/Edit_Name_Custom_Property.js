var Open_Custom_Property = require("Open_Custom_Property");
function Edit_Custom_Property_All()
{
    
  let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.linkCustomProperties.textnode10;
  if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
  {
      CustomPropertiesTab.click();
  }
  
  let CP_Name = "Varsha";
  let CP_Edit_Attribute_Value = "Name-Test,Required-Yes";
  Open_Custom_Property.Open_Custom_Property(CP_Name); 
  
  let EditValue= CP_Edit_Attribute_Value;
  let CP_arr= EditValue.split(',')     
  Log.Message(CP_arr.length)
  
  
  for(var i = 0; i < CP_arr.length ; i++) 
  {
    var CP_data = CP_arr[i].split('-');          
    var FieldName = CP_data[0].trim();
    var EditedValue = CP_data[1];
    //var Condition = CP_data[2];
    
    if (FieldName == "Name")
    {
      let CPName = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']//*[@name='name']");
      CPName.SetText(EditedValue);                           
    }
    
    if(FieldName == "Required")
    {
       RequiredCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='required']");  
       Log.Message(RequiredCheckbox.getAttribute("ng-reflect-model"));
       if(EditedValue == "Yes")
       {      
         if(RequiredCheckbox.getAttribute("ng-reflect-model") == "true")
         {
           Log.Checkpoint("Required is Selected");
         }
         else
         {
           RequiredCheckbox.Click();
           Log.Checkpoint("Required is Selected");
         }
       }
       else
       {
         if(RequiredCheckbox.getAttribute("ng-reflect-model") == "true")
         {
           RequiredCheckbox.Click();
           Log.Checkpoint("Required is unselected");
         }
         else
         {
           
           Log.Checkpoint("Required is unselected");
         }         
       }
    }
    
    if(FieldName == "Retired")
    {
       RetiredCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='retired']");
       if(EditedValue == "Yes")
       {      
         if(RetiredCheckbox.getAttribute("ng-reflect-model") == "true")
         {
           Log.Checkpoint("Retired is Selected");
         }
         else
         {
           RetiredCheckbox.Click();
           Log.Checkpoint("Retired is Selected");
         }
       }
       else
       {
         if(RetiredCheckbox.getAttribute("ng-reflect-model") == "true")
         {
           RetiredCheckbox.Click();
           Log.Checkpoint("Retired is not Selected");
         }
         else
         {           
           Log.Checkpoint("Retired is not Selected");
         }
         
       }
    }
    
    if(FieldName == "DataType")
    {
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='dataType']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(EditedValue,"No")
    }
    
    if(FieldName == "DisplayFormat" && Condition == "Yes")
    {
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='displayFormat']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(EditedValue,"No")
    }
    
    if(FieldName == "AllowedValue" && Condition == "Yes")
    {
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='allowedValues']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(EditedValue,"No")
    }
    
  }
  
  let CustomPropertyName = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']//*[@name='name']").Text;
  Log.Message(CustomPropertyName);
  
  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  
  Aliases.browser.pageSapiensDecision.FindElement("(//input[@placeholder='filter'])[2]").SetText(CustomPropertyName);
        
  CustomPropertiesCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-custom-properties-details//tbody//tr");
  Log.Message(CustomPropertiesCount.length);
  
  for(var j = 1; j <= CustomPropertiesCount.length ; j++)
  {
    
    var SelectedCustomProperty = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+k+"]/td[1]").textContent.trim();
    
    if(SelectedCustomProperty == CustomPropertyName)
    {
      let DataType = "";
      let DisplayFormat = "";
      let AllowedValue = "";
      let RequiredValue = "";
      let RetiredValue = "";
    
      
      let EditedValue= CP_Edit_Attribute_Value;
      let CP_array= EditedValue.split(',')     
      Log.Message(CP_array.length);
    
      for(var k = 0; j < CP_array.length ; k++) 
      {
        var EditedCP_data = CP_array[j].split('-');          
        var EditedFieldName = EditedCP_data[0].trim();
        var EditedUpdatedValue = EditedCP_data[1];
        //var EditedCondition = EditedCP_data[2];
      
        if(EditedFieldName == "Name")
        {
          if(SelectedCustomProperty.textContent.trim() == EditedUpdatedValue)
          {
            Log.Checkpoint("Custom Property Name is updated");
          }
          else
          {
            Log.Error("Custom Property name is not updated");
          }
        }
        
        if(EditedFieldName == "DataType")
        {
          if(DataType.textContent.trim().toUpperCase() == EditedUpdatedValue.toUpperCase())
          {
            Log.Checkpoint("Data Type is updated");
          }
          else
          {
            Log.Error("Data Type is not updated");
          }
        }    
        
        if(EditedFieldName == "DisplayFormat")
        {
          if(DisplayFormat.textContent.trim().toUpperCase() == EditedUpdatedValue.toUpperCase())
          {
            Log.Checkpoint("Display Format is updated");
          }
          else
          {
            Log.Error("Display Format is not updated");
          }
        }
    
      }      
    
    }     
    
  }
  
}