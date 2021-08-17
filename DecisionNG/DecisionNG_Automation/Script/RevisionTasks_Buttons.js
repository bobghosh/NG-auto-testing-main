function Assets_Add()
{
  let AddButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'+Add')]");
  return AddButton;
}

function Assets_Refresh()
{
  let RefreshButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Refresh')]");
  return RefreshButton;
}

function Assets_Validate()
{
  let ValidateButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Validate')]");
  return ValidateButton;
}

function Assets_ModifyDates()
{
  let ModifyDatesButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Modify Dates')]");
  return ModifyDatesButton;
}

function Assets_Remove()
{
  let RemoveButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'Remove')]");
  return RemoveButton;
}

function DescriptiveView(Descriptive_View)
{
//  let Descriptive_View = "Off";
  if(Descriptive_View == "On" && (Aliases.browser.pageSapiensDecision2.panel34.Exists == false))
  {
      Aliases.browser.pageSapiensDecision2.label2.panel33.Click();
      if((Aliases.browser.pageSapiensDecision2.panel34.Exists == true))
      {
      Log.Message("Switch is set to On")
      }
  }
  else if (Descriptive_View == "Off" && (Aliases.browser.pageSapiensDecision2.panel34.Exists == true))
  {
      Aliases.browser.pageSapiensDecision2.label2.panel33.Click();  
      if((Aliases.browser.pageSapiensDecision2.panel34.Exists == false))
      {
      Log.Message("Switch is set to Off")
      }
  }
  else
  {
    Log.Message("Switch is already set to" + Descriptive_View);
  }
}

function Assets_Submit()
{
  let SubmitButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button//*[contains(text(),'Submit')]");
  return SubmitButton;
}

//function Assets_Discard()
//{
//  let DiscardButton =  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(text(),'+Add')]");
//  return DiscardAddButton;
//}
module.exports.Assets_Validate = Assets_Validate;
module.exports.Assets_Add = Assets_Add;
module.exports.Assets_Submit = Assets_Submit;
module.exports.DescriptiveView = DescriptiveView;