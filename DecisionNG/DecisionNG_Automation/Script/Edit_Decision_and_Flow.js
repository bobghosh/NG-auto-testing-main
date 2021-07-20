var DropDown_SelectOption = require("SelectingOptionfromDropDown_Only1DDexsists");
function Edit_Decision_and_Flow()
{
  let page= Aliases.browser.pageSapiensDecision
  
  let Edit_Btn= page.FindElement("//dcn-hover-button")
  let text= Edit_Btn.textcontent
  if(text =='EDIT')
  {
    Edit_Btn.Click();
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Choose task to edit Decision");   
    page.FindElement("//dcn-autocomplete[@name='task']//button").Click();
    DropDown_SelectOption.SelectingOptionfromDropdown('Reject','No');
    page.form.buttonOk.ClickButton();
    page.WaitElement(page.FindElement("//dcn-laundry-line//span"),10000);
    aqObject.CheckProperty(page.FindElement("//dcn-laundry-line//span"),"contentText", cmpEqual, "DRAFT");
  }
  else
  {
   Log.Error("Edit Button is not present/Disabled"); 
  }
}
