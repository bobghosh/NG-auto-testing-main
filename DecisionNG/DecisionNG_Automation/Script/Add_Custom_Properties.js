function Add_Custom_Properties()
{   
  let CustomProperty = "Yes";
  let AddCP = "Yes";
  
  let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.linkCustomProperties.textnode10;
  if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
  {
      CustomPropertiesTab.click();
  }
  
  Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='custom-properties-details--add-btn']").Click();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.form5.textnodeAdd, "contentText", cmpEqual, "Add");
  
  //Name Field
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox5.SetText("Test1235");
  
  //Required Checkbox
  Aliases.browser.pageSapiensDecision2.form4.panel9.Click();
  
  //Date type Dropdown
  Aliases.browser.pageSapiensDecision.form.form2.form4.button2.ClickButton();
  //Select Dropdown
  
  //Display Format DropDown
  Aliases.browser.pageSapiensDecision.form.form2.form4.button3.ClickButton();
  //Select Dropdown
  
  //Allowed Value DropDown
  Aliases.browser.pageSapiensDecision.form.form2.form4.button4.ClickButton();
  //Select Dropdown
  
  
  
  
  
  
  
}
